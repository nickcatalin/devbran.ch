import { Metadata } from 'next';
import { SignupForm } from '@/components/auth/signup-form';

export const metadata: Metadata = {
    title: 'Create Account - DevBran.ch',
    description: 'Create a new DevBran.ch account',
};

export default function SignupPage({
    searchParams,
}: {
    searchParams: { callbackUrl?: string };
}) {
    return (
        <>
            <div className="text-center mb-6">
                <h1 className="text-2xl font-bold tracking-tight">Create an account</h1>
                <p className="text-sm text-muted-foreground mt-1">
                    Get started with your DevBran.ch account
                </p>
            </div>
            <SignupForm redirectUrl={searchParams.callbackUrl} />
        </>
    );
}