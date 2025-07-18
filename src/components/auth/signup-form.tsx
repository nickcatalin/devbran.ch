'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Link from 'next/link';
import { useAuth } from '@/features/auth/auth-context';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from '@/components/ui/toast';
import { useAnalytics } from '@/lib/posthog';
import { OAuthButton } from './oauth-button';
import { FormDivider } from './form-divider';

// Signup validation schema
const signupSchema = z.object({
    email: z.string()
        .nonempty('Email is required')
        .email('Please enter a valid email address'),
});

type SignupFormData = z.infer<typeof signupSchema>;

interface SignupFormProps {
    redirectUrl?: string;
    onSuccess?: () => void;
}

/**
 * Signup form component with magic link functionality
 * Note: Since we're using magic links, signup and login are essentially the same flow
 * but with different UI messaging
 */
export function SignupForm({ redirectUrl, onSuccess }: SignupFormProps) {
    const { login, loginWithOAuth, isLoading, clearError } = useAuth();
    const [isSent, setIsSent] = useState(false);
    const { trackEvent } = useAnalytics();

    // Initialize react-hook-form with zod validation
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<SignupFormData>({
        resolver: zodResolver(signupSchema),
        defaultValues: {
            email: '',
        },
    });

    // Handle magic link submission
    const onSubmit = async (data: SignupFormData) => {
        try {
            clearError();
            await login(data.email, redirectUrl);

            // Track successful signup request
            trackEvent('auth_signup_requested', { success: true });

            // Show success message
            toast.success('Magic link sent!', {
                description: 'Check your email to complete your signup',
            });

            setIsSent(true);
            reset();

            if (onSuccess) {
                onSuccess();
            }
        } catch (err) {
            // Track failed signup attempt
            trackEvent('auth_signup_failed', {
                error: err instanceof Error ? err.message : 'Unknown error'
            });

            toast.error('Signup failed', {
                description: err instanceof Error ? err.message : 'An unexpected error occurred',
            });
        }
    };

    // Handle OAuth signup
    const handleOAuthSignup = async (provider: 'google' | 'github') => {
        try {
            clearError();
            trackEvent('auth_oauth_signup_initiated', { provider });
            await loginWithOAuth(provider, redirectUrl);
        } catch (err) {
            toast.error('Signup failed', {
                description: err instanceof Error ? err.message : 'An unexpected error occurred',
            });
        }
    };

    return (
        <Card className="w-full max-w-md mx-auto">
            <CardHeader>
                <CardTitle>Create an Account</CardTitle>
                <CardDescription>
                    {isSent
                        ? 'Check your email for a magic link to complete signup'
                        : 'Sign up for a new DevBran.ch account'}
                </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
                {!isSent && (
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <Input
                            label="Email"
                            type="email"
                            placeholder="you@example.com"
                            error={errors.email?.message}
                            disabled={isSubmitting || isLoading}
                            {...register('email')}
                            aria-describedby="email-description"
                        />

                        <p id="email-description" className="text-sm text-muted-foreground">
                            We'll send you a magic link to create your account
                        </p>

                        <Button
                            type="submit"
                            className="w-full"
                            disabled={isSubmitting || isLoading}
                        >
                            {isSubmitting || isLoading ? 'Sending...' : 'Create Account'}
                        </Button>
                    </form>
                )}

                {isSent && (
                    <div className="text-center py-4">
                        <p className="mb-4">Magic link sent! Check your email to complete your signup.</p>
                        <Button
                            variant="secondary"
                            onClick={() => setIsSent(false)}
                            className="w-full"
                        >
                            Use a different email
                        </Button>
                    </div>
                )}

                {!isSent && <FormDivider text="Or continue with" />}

                {!isSent && (
                    <div className="grid grid-cols-2 gap-3">
                        <OAuthButton
                            provider="github"
                            onClick={() => handleOAuthSignup('github')}
                            disabled={isSubmitting || isLoading}
                        />

                        <OAuthButton
                            provider="google"
                            onClick={() => handleOAuthSignup('google')}
                            disabled={isSubmitting || isLoading}
                        />
                    </div>
                )}
            </CardContent>

            <CardFooter className="flex justify-center text-sm text-muted-foreground">
                <p>
                    Already have an account?{' '}
                    <Link href="/login" className="text-devbranch-primary hover:underline">
                        Sign in
                    </Link>
                </p>
            </CardFooter>
        </Card>
    );
}