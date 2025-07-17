'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { account } from '@/lib/appwrite';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from 'react-hot-toast';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/shadcn/card';
import { Button } from '@/components/ui/shadcn/button';
import { CheckCircle, XCircle, Loader2 } from 'lucide-react';

export default function AuthCallbackPage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const { refreshAuth } = useAuth();
    const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        const handleCallback = async () => {
            try {
                const userId = searchParams.get('userId');
                const secret = searchParams.get('secret');

                if (!userId || !secret) {
                    throw new Error('Missing authentication parameters');
                }

                // Complete the magic link authentication
                await account.updateMagicURLSession(userId, secret);

                // Refresh the auth state
                await refreshAuth();

                setStatus('success');
                toast.success('Successfully authenticated! Redirecting to dashboard...');

                // Redirect to dashboard after a short delay
                setTimeout(() => {
                    router.push('/dashboard');
                }, 2000);

            } catch (error: any) {
                console.error('Auth callback error:', error);
                setStatus('error');
                setErrorMessage(error.message || 'Authentication failed');
                toast.error('Authentication failed');
            }
        };

        handleCallback();
    }, [searchParams, router, refreshAuth]);

    const handleRetry = () => {
        router.push('/login');
    };

    const renderContent = () => {
        switch (status) {
            case 'loading':
                return (
                    <div className="flex flex-col items-center space-y-4">
                        <Loader2 className="w-12 h-12 animate-spin text-primary-600" />
                        <h2 className="text-xl font-semibold">Authenticating...</h2>
                        <p className="text-text-muted dark:text-dark-text-muted text-center">
                            Please wait while we verify your authentication.
                        </p>
                    </div>
                );

            case 'success':
                return (
                    <div className="flex flex-col items-center space-y-4">
                        <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center">
                            <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
                        </div>
                        <h2 className="text-xl font-semibold text-green-600 dark:text-green-400">
                            Authentication Successful!
                        </h2>
                        <p className="text-text-muted dark:text-dark-text-muted text-center">
                            You have been successfully authenticated. Redirecting to your dashboard...
                        </p>
                    </div>
                );

            case 'error':
                return (
                    <div className="flex flex-col items-center space-y-4">
                        <div className="w-16 h-16 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center">
                            <XCircle className="w-8 h-8 text-red-600 dark:text-red-400" />
                        </div>
                        <h2 className="text-xl font-semibold text-red-600 dark:text-red-400">
                            Authentication Failed
                        </h2>
                        <p className="text-text-muted dark:text-dark-text-muted text-center">
                            {errorMessage}
                        </p>
                        <Button onClick={handleRetry} variant="outline">
                            Try Again
                        </Button>
                    </div>
                );
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-4">
            <Card className="w-full max-w-md">
                <CardHeader>
                    <CardTitle className="text-center">Authentication</CardTitle>
                    <CardDescription className="text-center">
                        Processing your authentication request
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    {renderContent()}
                </CardContent>
            </Card>
        </div>
    );
}
