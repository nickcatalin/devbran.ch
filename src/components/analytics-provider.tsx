'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { posthog } from '@/lib/posthog';
import { useTheme } from 'next-themes';

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const { theme } = useTheme();

    // Track page views
    useEffect(() => {
        if (pathname) {
            let url = window.origin + pathname;
            if (searchParams?.toString()) {
                url = `${url}?${searchParams.toString()}`;
            }

            // Track page view
            posthog?.capture?.('$pageview', { $current_url: url });
        }
    }, [pathname, searchParams]);

    // Track theme changes
    useEffect(() => {
        if (theme) {
            posthog?.capture?.('theme_changed', { theme });
        }
    }, [theme]);

    return <>{children}</>;
}