import * as Sentry from '@sentry/nextjs';

/**
 * Initialize Sentry with environment detection and filtering
 * This is called by the Sentry Next.js SDK automatically
 */
export function initSentry() {
    const dsn = process.env.NEXT_PUBLIC_SENTRY_DSN;
    const environment = process.env.NODE_ENV || 'development';

    if (dsn) {
        Sentry.init({
            dsn,
            environment,
            tracesSampleRate: environment === 'production' ? 0.2 : 1.0,
            debug: environment !== 'production',
            replaysSessionSampleRate: environment === 'production' ? 0.1 : 1.0,
            replaysOnErrorSampleRate: 1.0,

            // Filter out sensitive information
            beforeSend(event) {
                // Don't send events in development unless explicitly enabled
                if (environment !== 'production' && !process.env.NEXT_PUBLIC_ENABLE_SENTRY_DEV) {
                    return null;
                }

                // Filter out sensitive data if needed
                if (event.request && event.request.headers) {
                    delete event.request.headers['authorization'];
                    delete event.request.headers['cookie'];
                }

                return event;
            },
        });
    }
}

/**
 * Capture an exception with Sentry
 * @param error The error to capture
 * @param context Additional context to include
 */
export function captureException(error: Error, context?: Record<string, any>) {
    Sentry.captureException(error, {
        extra: context,
    });
}

/**
 * Set user information for Sentry
 * @param user User information to associate with events
 */
export function setUser(user: { id: string; email?: string; username?: string } | null) {
    Sentry.setUser(user);
}

/**
 * Check if Sentry is properly configured
 * @returns boolean indicating if Sentry is configured
 */
export function isSentryConfigured(): boolean {
    return Boolean(process.env.NEXT_PUBLIC_SENTRY_DSN);
}

export { Sentry };