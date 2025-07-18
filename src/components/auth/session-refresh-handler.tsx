'use client';

import { useSessionRefresh } from '@/hooks/use-session-refresh';

/**
 * Component that handles session refresh monitoring
 * This component doesn't render anything visible but sets up the session refresh monitoring
 */
export function SessionRefreshHandler() {
    // Use the session refresh hook
    useSessionRefresh();

    // This component doesn't render anything
    return null;
}