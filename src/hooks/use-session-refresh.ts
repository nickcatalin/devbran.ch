'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/features/auth/auth-context';
import { toast } from 'sonner';

/**
 * Hook to handle session refresh based on middleware headers
 * Monitors for X-Auth-Session-Refresh header and refreshes the session when needed
 */
export function useSessionRefresh() {
    const { isAuthenticated, logout } = useAuth();
    const router = useRouter();

    useEffect(() => {
        // Only run this effect if the user is authenticated
        if (!isAuthenticated) return;

        // Function to check for session refresh header in fetch responses
        const checkResponseForSessionRefresh = (response: Response) => {
            const needsRefresh = response.headers.get('X-Auth-Session-Refresh');

            if (needsRefresh === 'needed') {
                // Show a toast notification to the user
                toast.warning('Your session is about to expire', {
                    description: 'Please re-authenticate to continue.',
                    action: {
                        label: 'Re-login',
                        onClick: () => {
                            // Log the user out and redirect to login
                            logout().then(() => {
                                router.push('/login');
                            });
                        },
                    },
                    duration: 10000, // Show for 10 seconds
                });
            }
        };

        // Create a fetch interceptor
        const originalFetch = window.fetch;
        window.fetch = async (...args) => {
            const response = await originalFetch(...args);
            checkResponseForSessionRefresh(response.clone());
            return response;
        };

        // Cleanup function to restore original fetch
        return () => {
            window.fetch = originalFetch;
        };
    }, [isAuthenticated, logout, router]);
}