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

// Email validation schema
const loginSchema = z.object({
  email: z.string()
    .nonempty('Email is required')
    .email('Please enter a valid email address'),
});

type LoginFormData = z.infer<typeof loginSchema>;

interface LoginFormProps {
  redirectUrl?: string;
  onSuccess?: () => void;
}

/**
 * Login form component with magic link functionality
 */
export function LoginForm({ redirectUrl, onSuccess }: LoginFormProps) {
  const { login, loginWithOAuth, isLoading, clearError } = useAuth();
  const [isSent, setIsSent] = useState(false);
  const { trackEvent } = useAnalytics();

  // Initialize react-hook-form with zod validation
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
    },
  });

  // Handle magic link submission
  const onSubmit = async (data: LoginFormData) => {
    try {
      clearError();
      await login(data.email, redirectUrl);

      // Track successful magic link request
      trackEvent('auth_magic_link_requested', { success: true });

      // Show success message
      toast.success('Magic link sent!', {
        description: 'Check your email for a login link',
      });

      setIsSent(true);
      reset();

      if (onSuccess) {
        onSuccess();
      }
    } catch (err) {
      // Track failed login attempt
      trackEvent('auth_magic_link_failed', {
        error: err instanceof Error ? err.message : 'Unknown error'
      });

      toast.error('Login failed', {
        description: err instanceof Error ? err.message : 'An unexpected error occurred',
      });
    }
  };

  // Handle OAuth login
  const handleOAuthLogin = async (provider: 'google' | 'github') => {
    try {
      clearError();
      trackEvent('auth_oauth_initiated', { provider });
      await loginWithOAuth(provider, redirectUrl);
    } catch (err) {
      toast.error('Login failed', {
        description: err instanceof Error ? err.message : 'An unexpected error occurred',
      });
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Sign In</CardTitle>
        <CardDescription>
          {isSent
            ? 'Check your email for a magic link to sign in'
            : 'Sign in to your DevBran.ch account'}
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
              We'll send you a magic link to sign in
            </p>

            <Button
              type="submit"
              className="w-full"
              disabled={isSubmitting || isLoading}
            >
              {isSubmitting || isLoading ? 'Sending...' : 'Send Magic Link'}
            </Button>
          </form>
        )}

        {isSent && (
          <div className="text-center py-4">
            <p className="mb-4">Magic link sent! Check your email to continue.</p>
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
              onClick={() => handleOAuthLogin('github')}
              disabled={isSubmitting || isLoading}
            />

            <OAuthButton
              provider="google"
              onClick={() => handleOAuthLogin('google')}
              disabled={isSubmitting || isLoading}
            />
          </div>
        )}
      </CardContent>

      <CardFooter className="flex justify-center text-sm text-muted-foreground">
        <p>
          Don't have an account?{' '}
          <Link href="/signup" className="text-devbranch-primary hover:underline">
            Sign up
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
}