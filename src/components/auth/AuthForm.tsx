'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/shadcn/button';
import { Input } from '@/components/ui/shadcn/input';
import { Label } from '@/components/ui/shadcn/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/shadcn/card';
import { Alert, AlertDescription } from '@/components/ui/shadcn/alert';
import { Separator } from '@/components/ui/shadcn/separator';
import { Github, Mail, ArrowLeft, Loader2 } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

interface AuthFormProps {
    mode: 'login' | 'signup';
}

export default function AuthForm({ mode }: AuthFormProps) {
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [isEmailSent, setIsEmailSent] = useState(false);

    const { loginWithMagicLink, loginWithOAuth } = useAuth();
    const router = useRouter();

    const handleEmailSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');
        setSuccess('');

        try {
            if (mode === 'login') {
                await loginWithMagicLink(email);
            } else {
                await loginWithMagicLink(email);
            }
            setSuccess('Check your email for the magic link!');
            setIsEmailSent(true);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An error occurred');
        } finally {
            setIsLoading(false);
        }
    };

    const handleGitHubLogin = async () => {
        setIsLoading(true);
        setError('');
        try {
            await loginWithOAuth('github');
            router.push('/dashboard');
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An error occurred');
        } finally {
            setIsLoading(false);
        }
    };

    const handleGoogleLogin = async () => {
        setIsLoading(true);
        setError('');
        try {
            await loginWithOAuth('google');
            router.push('/dashboard');
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An error occurred');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-4 py-12">
            <div className="w-full max-w-md">
                {/* Back to Home */}
                <Link
                    href="/"
                    className="inline-flex items-center text-text-secondary dark:text-dark-text-secondary hover:text-primary-600 dark:hover:text-primary-400 mb-8 transition-colors"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Home
                </Link>

                <Card className="border-0 shadow-lg">
                    <CardHeader className="text-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-forest-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                            <span className="text-white font-bold text-lg">D</span>
                        </div>
                        <CardTitle className="text-2xl font-bold text-text-primary dark:text-dark-text-primary">
                            {mode === 'login' ? 'Welcome Back' : 'Get Started'}
                        </CardTitle>
                        <CardDescription className="text-text-secondary dark:text-dark-text-secondary">
                            {mode === 'login'
                                ? 'Sign in to your DevBran.ch account'
                                : 'Create your professional developer profile'
                            }
                        </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-6">
                        {/* Error/Success Messages */}
                        {error && (
                            <Alert variant="destructive">
                                <AlertDescription>{error}</AlertDescription>
                            </Alert>
                        )}
                        {success && (
                            <Alert>
                                <AlertDescription>{success}</AlertDescription>
                            </Alert>
                        )}

                        {!isEmailSent ? (
                            <>
                                {/* OAuth Buttons */}
                                <div className="space-y-3">
                                    <Button
                                        variant="outline"
                                        className="w-full"
                                        onClick={handleGitHubLogin}
                                        disabled={isLoading}
                                    >
                                        <Github className="w-4 h-4 mr-2" />
                                        Continue with GitHub
                                    </Button>
                                    <Button
                                        variant="outline"
                                        className="w-full"
                                        onClick={handleGoogleLogin}
                                        disabled={isLoading}
                                    >
                                        <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
                                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                                        </svg>
                                        Continue with Google
                                    </Button>
                                </div>

                                <div className="relative">
                                    <div className="absolute inset-0 flex items-center">
                                        <Separator className="w-full" />
                                    </div>
                                    <div className="relative flex justify-center text-xs uppercase">
                                        <span className="bg-background-primary dark:bg-dark-background-primary px-2 text-text-muted dark:text-dark-text-muted">
                                            Or continue with email
                                        </span>
                                    </div>
                                </div>

                                {/* Email Form */}
                                <form onSubmit={handleEmailSubmit} className="space-y-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email address</Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="Enter your email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                            className="w-full"
                                        />
                                    </div>
                                    <Button
                                        type="submit"
                                        className="w-full bg-primary-600 hover:bg-primary-700 text-white"
                                        disabled={isLoading}
                                    >
                                        {isLoading ? (
                                            <>
                                                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                                Sending magic link...
                                            </>
                                        ) : (
                                            <>
                                                <Mail className="w-4 h-4 mr-2" />
                                                Send magic link
                                            </>
                                        )}
                                    </Button>
                                </form>
                            </>
                        ) : (
                            <div className="text-center space-y-4">
                                <div className="w-16 h-16 bg-green-50 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto">
                                    <Mail className="w-8 h-8 text-green-600" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-text-primary dark:text-dark-text-primary mb-2">
                                        Check your email
                                    </h3>
                                    <p className="text-text-secondary dark:text-dark-text-secondary">
                                        We've sent a magic link to <strong>{email}</strong>.
                                        Click the link in your email to complete your {mode === 'login' ? 'sign in' : 'sign up'}.
                                    </p>
                                </div>
                                <Button
                                    variant="outline"
                                    onClick={() => setIsEmailSent(false)}
                                    className="w-full"
                                >
                                    Back to login
                                </Button>
                            </div>
                        )}

                        {/* Footer */}
                        <div className="text-center text-sm text-text-muted dark:text-dark-text-muted">
                            {mode === 'login' ? (
                                <>
                                    Don't have an account?{' '}
                                    <Link href="/signup" className="text-primary-600 hover:text-primary-700 font-medium">
                                        Sign up
                                    </Link>
                                </>
                            ) : (
                                <>
                                    Already have an account?{' '}
                                    <Link href="/login" className="text-primary-600 hover:text-primary-700 font-medium">
                                        Sign in
                                    </Link>
                                </>
                            )}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
