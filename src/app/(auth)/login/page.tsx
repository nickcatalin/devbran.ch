import { Metadata } from 'next';
import { LoginForm } from '@/components/auth/login-form';

export const metadata: Metadata = {
    title: 'Sign In - DevBran.ch',
    description: 'Sign in to your DevBran.ch account',
};

export default function LoginPage({
    searchParams,
}: {
    searchParams: { callbackUrl?: string };
}) {
    return (
        <>
            <div className="text-center mb-6">
                <h1 className="text-2xl font-bold tracking-tight">Welcome back</h1>
                <p className="text-sm text-muted-foreground mt-1">
                    Sign in to your DevBran.ch account
                </p>
            </div>
            <LoginForm redirectUrl={searchParams.callbackUrl} />
        </>
    );
}