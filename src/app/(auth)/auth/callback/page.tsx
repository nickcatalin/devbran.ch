'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { toast } from '@/components/ui/toast';
import { useAuth } from '@/features/auth/auth-context';
import { useAnalytics } from '@/lib/posthog';
import { account } from '@/lib/appwrite';

export default function AuthCallbackPage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const { isAuthenticated, isLoading } = useAuth();
    const [isProcessing, setIsProcessing] = useState(true);
    const { trackEvent } = useAnalytics();

    useEffect(() => {
        const handleCallback = async () => {
            try {
                // Check if there's an error in the URL
                const error = searchParams.get('error');
                if (error) {
                    toast.error('Authentication failed', {
                        description: error,
                    });
                    trackEvent('auth_callback_error', { error });
                    router.push('/login');
                    return;
                }

                // Check for magic URL parameters
                const userId = searchParams.get('userId');
                const secret = searchParams.get('secret');

                // If we have userId and secret, this is a magic URL callback
                if (userId && secret) {
                    try {
                        // Check if user is already authenticated
                        let isAlreadyAuthenticated = false;
                        try {
                            const currentUser = await account.get();
                            if (currentUser) {
                                isAlreadyAuthenticated = true;
                            }
                        } catch (error) {
                            // User is not authenticated, continue with session creation
                        }

                        // Only create a session if not already authenticated
                        if (!isAlreadyAuthenticated) {
                            await account.createSession(userId, secret);
                        }

                        toast.success('Authentication successful', {
                            description: 'You have been signed in successfully',
                        });
                        trackEvent('auth_magic_link_success');

                        // Redirect to dashboard or callback URL
                        const callbackUrl = searchParams.get('callbackUrl') || '/dashboard';
                        router.push(callbackUrl);
                        return;
                    } catch (sessionError) {
                        console.error('Failed to create session from magic URL:', sessionError);

                        // Check if the error is due to rate limiting
                        const errorMessage = sessionError instanceof Error ? sessionError.message : 'Unknown error';

                        if (errorMessage.includes('Rate limit')) {
                            toast.error('Too many login attempts', {
                                description: 'Please wait a moment before trying again.',
                            });
                        } else {
                            toast.error('Authentication failed', {
                                description: 'Unable to complete authentication. Please try again.',
                            });
                        }

                        trackEvent('auth_magic_link_failed', {
                            error: errorMessage
                        });
                        router.push('/login');
                        return;
                    }
                }

                // If no magic URL parameters, handle regular OAuth callback
                // Wait for auth state to be determined
                if (isLoading) {
                    return;
                }

                // If authenticated, redirect to dashboard or callback URL
                if (isAuthenticated) {
                    const callbackUrl = searchParams.get('callbackUrl') || '/dashboard';
                    toast.success('Authentication successful', {
                        description: 'You have been signed in successfully',
                    });
                    trackEvent('auth_callback_success');
                    router.push(callbackUrl);
                } else {
                    // If not authenticated after callback, something went wrong
                    toast.error('Authentication failed', {
                        description: 'Unable to complete authentication. Please try again.',
                    });
                    trackEvent('auth_callback_failed');
                    router.push('/login');
                }
            } finally {
                setIsProcessing(false);
            }
        };

        handleCallback();
    }, [isAuthenticated, isLoading, router, searchParams, trackEvent]);

    return (
        <div className="flex flex-col items-center justify-center space-y-4">
            <h1 className="text-2xl font-bold">Completing authentication...</h1>
            {isProcessing && (
                <div className="flex flex-col items-center space-y-4">
                    <div className="h-8 w-8 animate-spin rounded-full border-4 border-devbranch-primary border-t-transparent"></div>
                    <p className="text-sm text-muted-foreground">
                        Please wait while we complete your authentication
                    </p>
                </div>
            )}
        </div>
    );
}