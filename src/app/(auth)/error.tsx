'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { posthog } from '@/lib/posthog';

export default function AuthError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Report the error to analytics
        posthog.capture('auth_error', {
            error: error.message,
            digest: error.digest,
        });
    }, [error]);

    return (
        <div className="flex flex-col items-center justify-center space-y-4">
            <h1 className="text-3xl font-bold">Authentication Error</h1>
            <p className="text-muted-foreground text-center max-w-md">
                An error occurred during authentication. Please try again or contact support if the problem persists.
            </p>
            <div className="bg-destructive/10 text-destructive p-4 rounded-md max-w-md text-sm">
                {error.message || 'An unexpected error occurred'}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Button onClick={reset}>
                    Try Again
                </Button>
                <Button variant="outline" asChild>
                    <Link href="/login">
                        Return to Sign In
                    </Link>
                </Button>
            </div>
        </div>
    );
}