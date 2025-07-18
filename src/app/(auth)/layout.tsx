'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { toast } from '@/components/ui/toast';

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const searchParams = useSearchParams();
    const authRequired = searchParams.get('authRequired');
    const error = searchParams.get('error');

    useEffect(() => {
        // Show toast if redirected due to auth requirement
        if (authRequired === 'true') {
            toast.info('Authentication required', {
                description: 'Please sign in to access this page',
            });
        }

        // Show error toast if there was an authentication error
        if (error) {
            toast.error('Authentication failed', {
                description: error,
            });
        }
    }, [authRequired, error]);

    return (
        <div className="flex min-h-screen flex-col items-center justify-center py-12 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8">
                <div className="flex justify-center">
                    <a href="/" className="flex items-center">
                        <span className="text-2xl font-bold text-devbranch-primary">DevBran.ch</span>
                    </a>
                </div>
                {children}
            </div>
        </div>
    );
}