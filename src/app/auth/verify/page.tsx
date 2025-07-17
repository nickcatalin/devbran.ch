'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { account } from '@/lib/appwrite';
import { toast } from 'react-hot-toast';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/shadcn/card';
import { Button } from '@/components/ui/shadcn/button';
import { CheckCircle, XCircle, Loader2 } from 'lucide-react';

export default function VerifyEmailPage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        const handleVerification = async () => {
            try {
                const userId = searchParams.get('userId');
                const secret = searchParams.get('secret');

                if (!userId || !secret) {
                    throw new Error('Missing verification parameters');
                }

                // Complete the email verification
                await account.updateVerification(userId, secret);

                setStatus('success');
                toast.success('Email verified successfully! You can now log in.');

                // Redirect to login after a short delay
                setTimeout(() => {
                    router.push('/login');
                }, 3000);

            } catch (error: any) {
                console.error('Email verification error:', error);
                setStatus('error');
                setErrorMessage(error.message || 'Email verification failed');
                toast.error('Email verification failed');
            }
        };

        handleVerification();
    }, [searchParams, router]);

    const handleRetry = () => {
        router.push('/login');
    };

    const renderContent = () => {
        switch (status) {
            case 'loading':
                return (
                    <div className="flex flex-col items-center space-y-4">
                        <Loader2 className="w-12 h-12 animate-spin text-primary-600" />
                        <h2 className="text-xl font-semibold">Verifying Email...</h2>
                        <p className="text-text-muted dark:text-dark-text-muted text-center">
                            Please wait while we verify your email address.
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
                            Email Verified!
                        </h2>
                        <p className="text-text-muted dark:text-dark-text-muted text-center">
                            Your email has been successfully verified. You can now log in to your account.
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
                            Verification Failed
                        </h2>
                        <p className="text-text-muted dark:text-dark-text-muted text-center">
                            {errorMessage}
                        </p>
                        <Button onClick={handleRetry} variant="outline">
                            Go to Login
                        </Button>
                    </div>
                );
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-4">
            <Card className="w-full max-w-md">
                <CardHeader>
                    <CardTitle className="text-center">Email Verification</CardTitle>
                    <CardDescription className="text-center">
                        Verifying your email address
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    {renderContent()}
                </CardContent>
            </Card>
        </div>
    );
}
