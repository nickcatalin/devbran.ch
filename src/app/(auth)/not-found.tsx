import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function AuthNotFound() {
    return (
        <div className="flex flex-col items-center justify-center space-y-4">
            <h1 className="text-3xl font-bold">404 - Page Not Found</h1>
            <p className="text-muted-foreground text-center max-w-md">
                The authentication page you&apos;re looking for doesn&apos;t exist or has been moved.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Button asChild>
                    <Link href="/login">
                        Sign In
                    </Link>
                </Button>
                <Button variant="outline" asChild>
                    <Link href="/">
                        Return Home
                    </Link>
                </Button>
            </div>
        </div>
    );
}