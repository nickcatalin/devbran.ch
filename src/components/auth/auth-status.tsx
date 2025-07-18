'use client';

import { useAuth } from '@/features/auth/auth-context';

/**
 * Component to display authentication status
 * Useful for debugging and user information display
 */
export function AuthStatus() {
    const { user, isAuthenticated, isLoading } = useAuth();

    if (isLoading) {
        return <div>Loading authentication status...</div>;
    }

    if (!isAuthenticated) {
        return <div>Not authenticated</div>;
    }

    return (
        <div>
            <h2>Authenticated</h2>
            <p>User ID: {user?.$id}</p>
            <p>Email: {user?.email}</p>
        </div>
    );
}