'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { initPostHog, trackPageView } from './posthog';

export function PostHogProvider({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        // Initialize PostHog
        initPostHog();
    }, []);

    useEffect(() => {
        // Track page views
        if (pathname) {
            const url = `${pathname}${searchParams ? `?${searchParams.toString()}` : ''}`;
            trackPageView(url);
        }
    }, [pathname, searchParams]);

    return <>{children}</>;
}
