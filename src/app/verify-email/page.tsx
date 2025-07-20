"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import Link from "next/link";
import { ArrowLeft, CheckCircle, Mail, AlertCircle, Loader2 } from "lucide-react";
import { useAuth } from "@/contexts/auth-context";
import { toast } from "sonner";

export default function VerifyEmailPage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const { user, verifyEmail, sendEmailVerification } = useAuth();
    const [isVerifying, setIsVerifying] = useState(false);
    const [isResending, setIsResending] = useState(false);
    const [verificationStatus, setVerificationStatus] = useState<'pending' | 'success' | 'error'>('pending');
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        const userId = searchParams.get("userId");
        const secret = searchParams.get("secret");

        if (userId && secret) {
            handleEmailVerification(userId, secret);
        }
    }, [searchParams]);

    const handleEmailVerification = async (userId: string, secret: string) => {
        setIsVerifying(true);
        setErrorMessage("");

        try {
            await verifyEmail(userId, secret);
            setVerificationStatus('success');
            toast.success("Email verified successfully!");
        } catch (error: any) {
            console.error("Email verification failed:", error);
            setVerificationStatus('error');
            setErrorMessage(error.message || "Email verification failed");
            toast.error("Email verification failed");
        } finally {
            setIsVerifying(false);
        }
    };

    const handleResendVerification = async () => {
        if (!user) {
            toast.error("You must be logged in to resend verification email");
            router.push("/login");
            return;
        }

        setIsResending(true);
        try {
            await sendEmailVerification();
            toast.success("Verification email sent successfully!");
        } catch (error: any) {
            console.error("Failed to resend verification email:", error);
            toast.error(error.message || "Failed to send verification email");
        } finally {
            setIsResending(false);
        }
    };

    const renderContent = () => {
        if (isVerifying) {
            return (
                <div className="text-center space-y-4">
                    <div className="flex justify-center">
                        <Loader2 className="h-16 w-16 text-[#56876D] animate-spin" />
                    </div>
                    <div className="space-y-2">
                        <p className="text-[#565264] font-medium">
                            Verifying your email...
                        </p>
                        <p className="text-sm text-[#565264]/70">
                            Please wait while we verify your email address.
                        </p>
                    </div>
                </div>
            );
        }

        if (verificationStatus === 'success') {
            return (
                <div className="text-center space-y-4">
                    <div className="flex justify-center">
                        <CheckCircle className="h-16 w-16 text-green-600" />
                    </div>
                    <div className="space-y-2">
                        <p className="text-[#565264] font-medium">
                            Email verified successfully!
                        </p>
                        <p className="text-sm text-[#565264]/70">
                            Your email address has been verified. You can now access all features of your account.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Button
                            onClick={() => router.push("/dashboard")}
                            className="bg-[#56876D] hover:bg-[#56876D]/90 text-white"
                        >
                            Go to Dashboard
                        </Button>
                        <Button
                            variant="outline"
                            onClick={() => router.push("/")}
                            className="border-[#565264]/20 text-[#565264] hover:bg-[#565264]/5"
                        >
                            Back to Home
                        </Button>
                    </div>
                </div>
            );
        }

        if (verificationStatus === 'error') {
            return (
                <div className="space-y-4">
                    <div className="text-center space-y-4">
                        <div className="flex justify-center">
                            <AlertCircle className="h-16 w-16 text-red-600" />
                        </div>
                        <div className="space-y-2">
                            <p className="text-[#565264] font-medium">
                                Email verification failed
                            </p>
                            <p className="text-sm text-[#565264]/70">
                                The verification link may be invalid or expired.
                            </p>
                        </div>
                    </div>

                    {errorMessage && (
                        <Alert className="border-red-200 bg-red-50">
                            <AlertCircle className="h-4 w-4 text-red-600" />
                            <AlertDescription className="text-red-600">
                                {errorMessage}
                            </AlertDescription>
                        </Alert>
                    )}

                    <div className="space-y-3">
                        {user ? (
                            <Button
                                onClick={handleResendVerification}
                                disabled={isResending}
                                className="w-full bg-[#56876D] hover:bg-[#56876D]/90 text-white"
                            >
                                {isResending ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <Mail className="mr-2 h-4 w-4" />
                                        Resend Verification Email
                                    </>
                                )}
                            </Button>
                        ) : (
                            <Button
                                onClick={() => router.push("/login")}
                                className="w-full bg-[#56876D] hover:bg-[#56876D]/90 text-white"
                            >
                                Sign In to Resend
                            </Button>
                        )}

                        <Button
                            variant="outline"
                            onClick={() => router.push("/")}
                            className="w-full border-[#565264]/20 text-[#565264] hover:bg-[#565264]/5"
                        >
                            Back to Home
                        </Button>
                    </div>
                </div>
            );
        }

        // Default state - no verification parameters
        return (
            <div className="space-y-4">
                <div className="text-center space-y-4">
                    <div className="flex justify-center">
                        <Mail className="h-16 w-16 text-[#56876D]" />
                    </div>
                    <div className="space-y-2">
                        <p className="text-[#565264] font-medium">
                            Verify your email address
                        </p>
                        <p className="text-sm text-[#565264]/70">
                            Click the verification link in your email to verify your account.
                        </p>
                    </div>
                </div>

                <Alert className="border-[#56876D]/20 bg-[#56876D]/5">
                    <Mail className="h-4 w-4 text-[#56876D]" />
                    <AlertDescription className="text-[#565264]">
                        Check your email inbox and spam folder for the verification link.
                    </AlertDescription>
                </Alert>

                <div className="space-y-3">
                    {user && !user.emailVerification ? (
                        <Button
                            onClick={handleResendVerification}
                            disabled={isResending}
                            className="w-full bg-[#56876D] hover:bg-[#56876D]/90 text-white"
                        >
                            {isResending ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Sending...
                                </>
                            ) : (
                                <>
                                    <Mail className="mr-2 h-4 w-4" />
                                    Resend Verification Email
                                </>
                            )}
                        </Button>
                    ) : user?.emailVerification ? (
                        <Alert className="border-green-200 bg-green-50">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            <AlertDescription className="text-green-600">
                                Your email is already verified!
                            </AlertDescription>
                        </Alert>
                    ) : (
                        <Button
                            onClick={() => router.push("/login")}
                            className="w-full bg-[#56876D] hover:bg-[#56876D]/90 text-white"
                        >
                            Sign In to Verify Email
                        </Button>
                    )}

                    <Button
                        variant="outline"
                        onClick={() => router.push("/")}
                        className="w-full border-[#565264]/20 text-[#565264] hover:bg-[#565264]/5"
                    >
                        Back to Home
                    </Button>
                </div>
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#E7EBC5] to-[#E8C7DE] flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                <div className="mb-8">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-[#565264] hover:text-[#56876D] transition-colors"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back to home
                    </Link>
                </div>

                <Card className="bg-white/90 backdrop-blur-sm border-[#565264]/10">
                    <CardHeader className="text-center space-y-4">
                        <CardTitle className="text-3xl font-bold">
                            <span className="text-[#565264]">Dev</span>
                            <span className="text-[#56876D]">Bran.ch</span>
                        </CardTitle>
                        <CardDescription className="text-[#565264]/80">
                            Email Verification
                        </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-6">
                        {renderContent()}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
