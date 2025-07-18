import { toast } from 'sonner';
import { captureException } from './sentry';

/**
 * Standard API response structure
 */
export interface ApiResponse<T = any> {
    success: boolean;
    data?: T;
    error?: {
        code: string;
        message: string;
        details?: any;
    };
}

/**
 * Error codes for API responses
 */
export enum ErrorCode {
    UNAUTHORIZED = 'unauthorized',
    NOT_FOUND = 'not_found',
    VALIDATION_ERROR = 'validation_error',
    SERVER_ERROR = 'server_error',
    APPWRITE_ERROR = 'appwrite_error',
    UNKNOWN_ERROR = 'unknown_error',
}

/**
 * Create a successful API response
 * @param data The data to include in the response
 * @returns A standardized successful API response
 */
export function createSuccessResponse<T>(data: T): ApiResponse<T> {
    return {
        success: true,
        data,
    };
}

/**
 * Create an error API response
 * @param code Error code
 * @param message User-friendly error message
 * @param details Additional error details (not exposed to client)
 * @returns A standardized error API response
 */
export function createErrorResponse(
    code: ErrorCode | string,
    message: string,
    details?: any
): ApiResponse {
    return {
        success: false,
        error: {
            code,
            message,
            details,
        },
    };
}

/**
 * Handle Appwrite errors and convert to standardized format
 * @param error The error from Appwrite
 * @param defaultMessage Default message if error is not recognized
 * @returns Standardized error response
 */
export function handleAppwriteError(
    error: any,
    defaultMessage = 'An unexpected error occurred'
): ApiResponse {
    // Log the error to Sentry
    captureException(error, { source: 'appwrite' });

    // Extract error information from Appwrite error format
    const code = error.code || ErrorCode.APPWRITE_ERROR;
    const message = error.message || defaultMessage;

    // Map common Appwrite error codes to user-friendly messages
    let userMessage = message;
    if (code === 401) {
        userMessage = 'Authentication required. Please log in again.';
    } else if (code === 404) {
        userMessage = 'The requested resource was not found.';
    } else if (code === 429) {
        userMessage = 'Too many requests. Please try again later.';
    } else if (code >= 500) {
        userMessage = 'Server error. Please try again later.';
    }

    return createErrorResponse(ErrorCode.APPWRITE_ERROR, userMessage, {
        originalError: error,
    });
}

/**
 * Handle general API errors
 * @param error The error object
 * @param defaultMessage Default message if error is not recognized
 * @returns Standardized error response
 */
export function handleApiError(
    error: any,
    defaultMessage = 'An unexpected error occurred'
): ApiResponse {
    // Log the error to Sentry
    captureException(error, { source: 'api' });

    // Determine the error message to show to the user
    let message = defaultMessage;
    let code = ErrorCode.UNKNOWN_ERROR;

    if (error instanceof Error) {
        message = error.message || defaultMessage;
    }

    // Handle specific error types
    if (error.status === 401 || error.statusCode === 401) {
        code = ErrorCode.UNAUTHORIZED;
        message = 'Authentication required. Please log in again.';
    } else if (error.status === 404 || error.statusCode === 404) {
        code = ErrorCode.NOT_FOUND;
        message = 'The requested resource was not found.';
    } else if (error.status === 400 || error.statusCode === 400) {
        code = ErrorCode.VALIDATION_ERROR;
        message = error.message || 'Invalid request. Please check your input.';
    } else if (error.status >= 500 || error.statusCode >= 500) {
        code = ErrorCode.SERVER_ERROR;
        message = 'Server error. Please try again later.';
    }

    return createErrorResponse(code, message, {
        originalError: error,
    });
}

/**
 * Show a toast notification for an API error
 * @param error The error object or message
 * @param title Optional title for the toast
 */
export function showErrorToast(error: any, title = 'Error') {
    let message = 'An unexpected error occurred';

    if (typeof error === 'string') {
        message = error;
    } else if (error?.error?.message) {
        message = error.error.message;
    } else if (error?.message) {
        message = error.message;
    }

    toast.error(title, {
        description: message,
        duration: 5000,
    });
}

/**
 * Show a success toast notification
 * @param message Success message
 * @param title Optional title for the toast
 */
export function showSuccessToast(message: string, title = 'Success') {
    toast.success(title, {
        description: message,
        duration: 3000,
    });
}