import * as Sentry from '@sentry/nextjs';

export const initSentry = () => {
    if (process.env.NEXT_PUBLIC_SENTRY_DSN) {
        Sentry.init({
            dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
            environment: process.env.NODE_ENV,
            tracesSampleRate: process.env.NODE_ENV === 'production' ? 0.1 : 1.0,
            debug: process.env.NODE_ENV === 'development',
            beforeSend(event, hint) {
                if (process.env.NODE_ENV === 'development') {
                    console.log('Sentry event:', event);
                }
                return event;
            },
        });
    }
};

export const captureException = (error: Error, context?: Record<string, any>) => {
    Sentry.captureException(error, {
        extra: context,
    });
};

export const captureMessage = (message: string, level: 'info' | 'warning' | 'error' = 'info') => {
    Sentry.captureMessage(message, level);
};

export const setUser = (user: { id: string; email?: string; username?: string }) => {
    Sentry.setUser(user);
};

export const clearUser = () => {
    Sentry.setUser(null);
};

export const addBreadcrumb = (breadcrumb: { message: string; category?: string; level?: 'info' | 'warning' | 'error' }) => {
    Sentry.addBreadcrumb(breadcrumb as any);
};

export const withSentry = async <T>(
    name: string,
    callback: () => Promise<T>
): Promise<T> => {
    try {
        const result = await callback();
        return result;
    } catch (error) {
        Sentry.captureException(error);
        throw error;
    }
};

export default Sentry;
