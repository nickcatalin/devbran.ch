'use client';

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useAuth } from '@/features/auth/auth-context';

/**
 * Hook to handle authentication-based redirects
 * @param redirectAuthenticated Path to redirect to if user is authenticated
 * @param redirectUnauthenticated Path to redirect to if user is not authenticated
 */
export function useAuthRedirect(
    redirectAuthenticated?: string,
    redirectUnauthenticated?: string
) {
    const { isAuthenticated, isLoading } = useAuth();
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        // Don't redirect while still loading
        if (isLoading) return;

        // Redirect authenticated users if specified
        if (isAuthenticated && redirectAuthenticated && pathname !== redirectAuthenticated) {
            router.push(redirectAuthenticated);
            return;
        }

        // Redirect unauthenticated users if specified
        if (!isAuthenticated && redirectUnauthenticated && pathname !== redirectUnauthenticated) {
            router.push(redirectUnauthenticated);
            return;
        }
    }, [isAuthenticated, isLoading, redirectAuthenticated, redirectUnauthenticated, router, pathname]);
}