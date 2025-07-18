'use client';

import { useState } from 'react';
import { useAuth } from '@/features/auth/auth-context';
import { toast } from 'sonner';

/**
 * Hook for handling authentication form logic
 * @returns Authentication form state and handlers
 */
export function useAuthForm() {
    const { login, loginWithOAuth, error, clearError } = useAuth();
    const [isSubmitting, setIsSubmitting] = useState(false);

    /**
     * Handle magic link login
     * @param email User's email address
     */
    const handleMagicLinkLogin = async (email: string) => {
        try {
            setIsSubmitting(true);
            await login(email);

            toast.success('Magic link sent!', {
                description: 'Check your email for a login link.',
            });
        } catch (error) {
            toast.error('Login failed', {
                description: (error as Error).message,
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    /**
     * Handle OAuth login
     * @param provider OAuth provider ('google' or 'github')
     */
    const handleOAuthLogin = async (provider: 'google' | 'github') => {
        try {
            setIsSubmitting(true);
            await loginWithOAuth(provider);

            // No toast needed as user will be redirected to OAuth provider
        } catch (error) {
            toast.error('Login failed', {
                description: (error as Error).message,
            });
            setIsSubmitting(false);
        }
    };

    return {
        isSubmitting,
        error,
        clearError,
        handleMagicLinkLogin,
        handleOAuthLogin,
    };
}