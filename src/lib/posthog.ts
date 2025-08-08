'use client';

import posthog from 'posthog-js';

// Initialize PostHog only on client side
if (typeof window !== 'undefined') {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY || '', {
        api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://eu.i.posthog.com',
        ui_host: "https://eu.posthog.com",
        capture_pageview: true, // Auto capture page views
        capture_pageleave: true, // Auto capture when users leave pages
        autocapture: true, // Auto capture clicks, form submissions, etc.
        capture_dead_clicks: true, // Capture clicks that don't lead anywhere
        capture_performance: true, // Web vitals and performance metrics
        disable_session_recording: false, // Enable session recordings
        loaded: (posthog) => {
            if (process.env.NODE_ENV === 'development') {
                console.log('PostHog loaded');
            }
        }
    });
}

export default posthog;

// Helper functions for common tracking events
export const analytics = {
    // Product Analytics - Enhanced user identification
    identify: (userId: string, properties?: Record<string, any>) => {
        if (typeof window !== 'undefined') {
            posthog.identify(userId, properties);
        }
    },

    // Identify user with comprehensive information
    identifyUser: (email: string, username?: string, userId?: string, additionalProperties?: Record<string, any>) => {
        if (typeof window !== 'undefined') {
            // Use email as the primary identifier in PostHog
            posthog.identify(email, {
                email,
                username,
                user_id: userId,
                $email: email, // PostHog standard property
                $name: username, // PostHog standard property
                ...additionalProperties
            });
        }
    },

    // Set user properties without changing identity
    setUserProperties: (properties: Record<string, any>) => {
        if (typeof window !== 'undefined') {
            posthog.setPersonProperties(properties);
        }
    },

    track: (event: string, properties?: Record<string, any>) => {
        if (typeof window !== 'undefined') {
            posthog.capture(event, properties);
        }
    },

    // Web Analytics (automatic with config above)
    page: (properties?: Record<string, any>) => {
        if (typeof window !== 'undefined') {
            posthog.capture('$pageview', properties);
        }
    },

    // Error Tracking
    captureException: (error: Error, context?: Record<string, any>) => {
        if (typeof window !== 'undefined') {
            posthog.capture('$exception', {
                $exception_message: error.message,
                $exception_type: error.name,
                $exception_stack_trace_raw: error.stack,
                ...context
            });
        }
    },

    // User actions
    signUp: (method?: string) => {
        analytics.track('user_signed_up', { method });
    },

    login: (method?: string) => {
        analytics.track('user_logged_in', { method });
    },

    logout: () => {
        analytics.track('user_logged_out');
        // Reset PostHog identity after logout
        if (typeof window !== 'undefined') {
            posthog.reset();
        }
    },

    // Common product events
    buttonClick: (buttonName: string, location?: string) => {
        analytics.track('button_clicked', {
            button_name: buttonName,
            location
        });
    },

    formSubmit: (formName: string, success: boolean = true) => {
        analytics.track('form_submitted', {
            form_name: formName,
            success
        });
    }
};