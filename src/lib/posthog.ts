import posthog from 'posthog-js';
import { PostHogProvider } from 'posthog-js/react';

/**
 * Initialize PostHog client with environment variables
 * Only initializes in production or when explicitly enabled
 */
if (typeof window !== 'undefined') {
    // Only initialize on the client side
    const apiKey = process.env.NEXT_PUBLIC_POSTHOG_KEY;
    const apiHost = process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://app.posthog.com';

    if (apiKey) {
        posthog.init(apiKey, {
            api_host: apiHost,
            capture_pageview: false, // We'll handle this manually for App Router
            disable_session_recording: process.env.NODE_ENV !== 'production',
            persistence: 'localStorage',
            loaded: (posthog) => {
                if (process.env.NODE_ENV !== 'production') {
                    // Log to console in development
                    console.log('[PostHog] Initialized');
                }
            },
        });
    }
}

/**
 * Custom hook for tracking analytics events
 * @returns Object with tracking functions
 */
export function useAnalytics() {
    /**
     * Track a custom event
     * @param eventName Name of the event to track
     * @param properties Optional properties to include with the event
     */
    const trackEvent = (eventName: string, properties?: Record<string, any>) => {
        posthog.capture(eventName, properties);
    };

    /**
     * Track a page view event
     * @param url The URL of the page being viewed
     * @param properties Optional additional properties
     */
    const trackPageView = (url: string, properties?: Record<string, any>) => {
        posthog.capture('$pageview', {
            $current_url: url,
            ...properties,
        });
    };

    return {
        trackEvent,
        trackPageView,
    };
}

/**
 * Check if PostHog is properly configured
 * @returns boolean indicating if PostHog is configured
 */
export function isPostHogConfigured(): boolean {
    return Boolean(process.env.NEXT_PUBLIC_POSTHOG_KEY);
}

export { posthog, PostHogProvider };