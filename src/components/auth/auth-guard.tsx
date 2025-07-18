'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/features/auth/auth-context';

interface AuthGuardProps {
    children: React.ReactNode;
    fallback?: React.ReactNode;
    redirectTo?: string;
}

/**
 * Component to protect routes that require authentication
 * Redirects unauthenticated users or shows a fallback component
 */
export function AuthGuard({
    children,
    fallback,
    redirectTo = '/login'
}: AuthGuardProps) {
    const { isAuthenticated, isLoading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        // Don't redirect while still loading
        if (isLoading) return;

        // Redirect unauthenticated users
        if (!isAuthenticated) {
            router.push(redirectTo);
        }
    }, [isAuthenticated, isLoading, redirectTo, router]);

    // Show nothing while loading
    if (isLoading) {
        return null;
    }

    // Show fallback if not authenticated
    if (!isAuthenticated) {
        return fallback || null;
    }

    // Show children if authenticated
    return <>{children}</>;
}