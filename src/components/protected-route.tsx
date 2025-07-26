"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/auth-context";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { AlertCircle, Mail } from "lucide-react";
import { toast } from "sonner";

interface ProtectedRouteProps {
    children: React.ReactNode;
    redirectTo?: string;
    requireVerification?: boolean;
}

export const ProtectedRoute = ({
    children,
    redirectTo = "/login",
    requireVerification = false
}: ProtectedRouteProps) => {
    const { user, loading, sendEmailVerification } = useAuth();
    const router = useRouter();
    const [shouldRender, setShouldRender] = useState(false);
    const [isVerificationSending, setIsVerificationSending] = useState(false);

    useEffect(() => {
        if (!loading) {
            if (!user) {
                router.push(redirectTo);
            } else if (requireVerification && !user.emailVerification) {
                // Don't render content but show verification message
                setShouldRender(false);
            } else {
                setShouldRender(true);
            }
        }
    }, [user, loading, router, redirectTo, requireVerification]);

    const handleSendVerification = async () => {
        setIsVerificationSending(true);
        try {
            await sendEmailVerification();
            toast.success("Verification email sent! Check your inbox.");
        } catch (error: any) {
            console.error("Failed to send verification email:", error);
            toast.error(error.message || "Failed to send verification email");
        } finally {
            setIsVerificationSending(false);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-background flex items-center justify-center">
                <div className="flex flex-col items-center space-y-4">
                    <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                    <p className="text-foreground font-medium">Loading...</p>
                </div>
            </div>
        );
    }

    // Show verification required page if user is not verified and verification is required
    if (user && requireVerification && !user.emailVerification) {
        return (
            <div className="min-h-screen bg-background flex items-center justify-center p-4">
                <div className="w-full max-w-md">
                    <div className="bg-card border rounded-lg p-6 space-y-6">
                        <div className="text-center space-y-4">
                            <div className="flex justify-center">
                                <Mail className="h-16 w-16 text-primary" />
                            </div>
                            <div className="space-y-2">
                                <h2 className="text-2xl font-bold text-card-foreground">
                                    Email Verification Required
                                </h2>
                                <p className="text-muted-foreground">
                                    Please verify your email address to access this feature.
                                </p>
                            </div>
                        </div>

                        <Alert className="border-amber-200 bg-amber-50">
                            <AlertCircle className="h-4 w-4 text-amber-600" />
                            <AlertDescription className="text-amber-800">
                                Check your email inbox for a verification link, or request a new one below.
                            </AlertDescription>
                        </Alert>

                        <div className="space-y-3">
                            <Button
                                onClick={handleSendVerification}
                                disabled={isVerificationSending}
                                className="w-full"
                            >
                                {isVerificationSending ? (
                                    <>
                                        <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <Mail className="mr-2 h-4 w-4" />
                                        Send Verification Email
                                    </>
                                )}
                            </Button>

                            <Button
                                variant="outline"
                                onClick={() => router.push("/dashboard")}
                                className="w-full"
                            >
                                Go to Dashboard
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (!shouldRender) {
        return null;
    }

    return <>{children}</>;
};
