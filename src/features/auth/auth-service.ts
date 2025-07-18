import { ID } from 'appwrite';
import { account } from '@/lib/appwrite';
import { posthog } from '@/lib/posthog';
import { retryWithBackoff } from '@/lib/retry-utils';

/**
 * Authentication service for Appwrite integration
 * Provides methods for user authentication and session management
 */
export class AuthService {
    /**
     * Send a magic link to the provided email address
     * @param email User's email address
     * @param redirectUrl URL to redirect to after successful authentication
     * @returns Promise resolving to the created session
     */
    async createMagicLinkSession(email: string, redirectUrl?: string): Promise<void> {
        try {
            const url = redirectUrl || `${window.location.origin}/auth/callback`;
            const userId = ID.unique(); // Generate a unique ID for the user

            // Use retry with backoff for rate limiting issues
            await retryWithBackoff(
                async () => {
                    // Create a magic URL token
                    // This sends an email with a magic link to the user
                    await account.createMagicURLToken(
                        userId,  // Unique user ID (will be used if this is a new user)
                        email,   // User's email address
                        url      // Redirect URL after clicking the magic link
                    );
                },
                2, // Max 2 retries (3 attempts total)
                1000, // Start with 1 second delay
                (error) => {
                    // Only retry on rate limit errors
                    const errorMessage = error instanceof Error ? error.message : String(error);
                    return errorMessage.includes('Rate limit');
                }
            );

            // Track magic link request in analytics
            posthog.capture('auth_magic_link_requested', { email });

            return;
        } catch (error) {
            console.error('Magic link session creation failed:', error);
            posthog.capture('auth_error', {
                method: 'magic_link',
                error: (error as Error).message
            });
            throw this.handleAuthError(error);
        }
    }

    /**
     * Create a session using OAuth provider
     * @param provider OAuth provider ('google' or 'github')
     * @param redirectUrl URL to redirect to after successful authentication
     */
    async createOAuthSession(provider: 'google' | 'github', redirectUrl?: string): Promise<void> {
        try {
            const url = redirectUrl || window.location.origin;
            const callbackUrl = `${url}/auth/callback`;

            // Track OAuth login attempt
            posthog.capture('auth_oauth_initiated', { provider });

            // Use type assertion to handle the TypeScript error
            // Appwrite expects specific string literals for OAuth providers
            if (provider === 'google') {
                await account.createOAuth2Session('google' as any, callbackUrl, callbackUrl);
            } else if (provider === 'github') {
                await account.createOAuth2Session('github' as any, callbackUrl, callbackUrl);
            }
        } catch (error) {
            console.error(`${provider} OAuth session creation failed:`, error);
            posthog.capture('auth_error', {
                method: 'oauth',
                provider,
                error: (error as Error).message
            });
            throw this.handleAuthError(error);
        }
    }

    /**
     * Get the current user session
     * @returns Promise resolving to the current session
     */
    async getCurrentSession() {
        try {
            return await account.getSession('current');
        } catch (error) {
            // No active session, not necessarily an error
            return null;
        }
    }

    /**
     * Get the current user account
     * @returns Promise resolving to the current user
     */
    async getCurrentUser() {
        try {
            return await account.get();
        } catch (error) {
            // No authenticated user, not necessarily an error
            return null;
        }
    }

    /**
     * Logout the current user
     * @returns Promise resolving when logout is complete
     */
    async logout() {
        try {
            const session = await this.getCurrentSession();

            if (session) {
                await account.deleteSession(session.$id);
                posthog.capture('auth_logout');
            }

            return true;
        } catch (error) {
            console.error('Logout failed:', error);
            posthog.capture('auth_error', {
                method: 'logout',
                error: (error as Error).message
            });
            throw this.handleAuthError(error);
        }
    }

    /**
     * Handle authentication errors and provide user-friendly messages
     * @param error The error object from Appwrite
     * @returns A new error with a user-friendly message
     */
    private handleAuthError(error: unknown): Error {
        const appwriteError = error as { code?: number; message?: string };

        // Map Appwrite error codes to user-friendly messages
        switch (appwriteError.code) {
            case 401:
                return new Error('Authentication failed. Please check your credentials and try again.');
            case 429:
                return new Error('Too many attempts. Please try again later.');
            case 503:
                return new Error('Authentication service is temporarily unavailable. Please try again later.');
            default:
                return new Error(
                    appwriteError.message ||
                    'An unexpected error occurred during authentication. Please try again.'
                );
        }
    }
}

// Export a singleton instance of the auth service
export const authService = new AuthService();