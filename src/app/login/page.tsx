import AuthForm from '@/components/auth/AuthForm';

export default function LoginPage() {
    return (
        <div className="min-h-screen bg-background-primary dark:bg-dark-background-primary">
            <AuthForm mode="login" />
        </div>
    );
}
