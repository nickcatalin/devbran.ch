/**
 * Authentication utility functions for token validation and handling
 */

/**
 * Decode a JWT token without verification
 * This is safe to use in middleware where you don't have access to the secret
 * 
 * @param token The JWT token to decode
 * @returns The decoded payload or null if invalid
 */
export function decodeJwt(token: string): { exp?: number } | null {
    try {
        // Split the token into parts
        const parts = token.split('.');
        if (parts.length !== 3) return null;

        // Decode the payload (middle part)
        const payload = Buffer.from(parts[1], 'base64').toString();
        return JSON.parse(payload);
    } catch (error) {
        console.error('Error decoding JWT:', error);
        return null;
    }
}

/**
 * Check if a token is near expiry
 * 
 * @param token The JWT token to check
 * @param thresholdMinutes Minutes before expiry to consider the token as "near expiry"
 * @returns boolean indicating if the token is near expiry
 */
export function isTokenNearExpiry(token: string, thresholdMinutes = 5): boolean {
    try {
        const decoded = decodeJwt(token);
        if (!decoded || !decoded.exp) return true;

        // Calculate time until expiry in minutes
        const expiryTime = decoded.exp * 1000; // Convert to milliseconds
        const currentTime = Date.now();
        const timeUntilExpiryMs = expiryTime - currentTime;
        const timeUntilExpiryMinutes = timeUntilExpiryMs / (1000 * 60);

        // Return true if token expires within the threshold
        return timeUntilExpiryMinutes <= thresholdMinutes;
    } catch (error) {
        console.error('Error checking token expiry:', error);
        return true; // Assume token is near expiry if there's an error
    }
}

/**
 * Format an error message for authentication failures
 * 
 * @param error The error object
 * @returns A user-friendly error message
 */
export function formatAuthError(error: unknown): string {
    const err = error as { code?: number; message?: string };

    switch (err.code) {
        case 401:
            return 'Your session has expired. Please log in again.';
        case 403:
            return 'You don\'t have permission to access this resource.';
        case 429:
            return 'Too many authentication attempts. Please try again later.';
        default:
            return err.message || 'An authentication error occurred. Please try again.';
    }
}