/**
 * Authentication error class
 * Provides structured error handling for authentication operations
 */
export class AuthError extends Error {
    code: number;

    constructor(message: string, code: number = 400) {
        super(message);
        this.name = 'AuthError';
        this.code = code;
    }
}

/**
 * Map Appwrite error codes to user-friendly messages
 * @param error The error object from Appwrite
 * @returns A user-friendly error message
 */
export function getAuthErrorMessage(error: unknown): string {
    const appwriteError = error as { code?: number; message?: string; type?: string };

    // Handle specific Appwrite error codes
    switch (appwriteError.code) {
        case 401:
            return 'Authentication failed. Please check your credentials and try again.';
        case 429:
            return 'Too many attempts. Please try again later.';
        case 503:
            return 'Authentication service is temporarily unavailable. Please try again later.';
        default:
            // Handle specific error types
            if (appwriteError.type === 'user_invalid_credentials') {
                return 'Invalid credentials. Please check your email and try again.';
            }

            if (appwriteError.type === 'user_blocked') {
                return 'This account has been temporarily blocked. Please contact support.';
            }

            return appwriteError.message ||
                'An unexpected error occurred during authentication. Please try again.';
    }
}