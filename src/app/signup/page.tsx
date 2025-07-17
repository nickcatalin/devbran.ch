import AuthForm from '@/components/auth/AuthForm';

export default function SignupPage() {
    return (
        <div className="min-h-screen bg-background-primary dark:bg-dark-background-primary">
            <AuthForm mode="signup" />
        </div>
    );
}
