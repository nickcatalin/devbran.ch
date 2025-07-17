import { PostHog } from 'posthog-js';

let posthog: PostHog | null = null;

export const initPostHog = () => {
    if (typeof window !== 'undefined' && !posthog) {
        posthog = new PostHog(
            process.env.NEXT_PUBLIC_POSTHOG_KEY || '',
            {
                api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://app.posthog.com',
                person_profiles: 'identified_only',
                capture_pageview: false, // Disable automatic pageview capture
                capture_pageleave: true,
                loaded: (ph: PostHog) => {
                    if (process.env.NODE_ENV === 'development') {
                        ph.debug(true);
                    }
                },
            }
        );
    }
    return posthog;
};

export const getPostHog = () => posthog;

// Track page views
export const trackPageView = (pathname: string) => {
    if (posthog) {
        posthog.capture('$pageview', {
            $current_url: pathname,
        });
    }
};

// Track events
export const trackEvent = (event: string, properties?: Record<string, any>) => {
    if (posthog) {
        posthog.capture(event, properties);
    }
};

// Track user identification
export const identifyUser = (userId: string, properties?: Record<string, any>) => {
    if (posthog) {
        posthog.identify(userId, properties);
    }
};

// Track user logout
export const resetUser = () => {
    if (posthog) {
        posthog.reset();
    }
};

// Track block interactions
export const trackBlockInteraction = (blockType: string, action: string, properties?: Record<string, any>) => {
    trackEvent('block_interaction', {
        block_type: blockType,
        action,
        ...properties,
    });
};

// Track form submissions
export const trackFormSubmission = (formType: string, success: boolean, properties?: Record<string, any>) => {
    trackEvent('form_submission', {
        form_type: formType,
        success,
        ...properties,
    });
};

// Track profile visits
export const trackProfileVisit = (profileSlug: string, referrer?: string) => {
    trackEvent('profile_visit', {
        profile_slug: profileSlug,
        referrer,
    });
};

// Track project clicks
export const trackProjectClick = (projectName: string, url: string, profileSlug: string) => {
    trackEvent('project_click', {
        project_name: projectName,
        url,
        profile_slug: profileSlug,
    });
};

// Feature flags
export const isFeatureEnabled = (flag: string): boolean => {
    return posthog?.isFeatureEnabled(flag) || false;
};

export default posthog;
