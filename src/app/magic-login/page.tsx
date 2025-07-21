"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuth } from "@/contexts/auth-context";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Loader2, CheckCircle, AlertCircle, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";

export default function MagicLoginPage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const { loginWithMagicURL, user } = useAuth();
    const [isLoading, setIsLoading] = useState(true);
    const [loginSuccess, setLoginSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // Redirect if already logged in
        if (user && !isLoading) {
            router.push("/dashboard");
            return;
        }

        const handleMagicLogin = async () => {
            const userId = searchParams.get("userId");
            const secret = searchParams.get("secret");

            if (!userId || !secret) {
                setError("Invalid magic link. Missing authentication parameters.");
                setIsLoading(false);
                return;
            }

            try {
                await loginWithMagicURL(userId, secret);
                setLoginSuccess(true);
                toast.success("Successfully logged in with magic link!");

                // Redirect to dashboard after a short delay
                setTimeout(() => {
                    router.push("/dashboard");
                }, 2000);
            } catch (error: any) {
                console.error("Magic URL login failed:", error);
                const errorMessage = error?.message || "Failed to log in with magic link. Please try again.";
                setError(errorMessage);
                toast.error(errorMessage);
            } finally {
                setIsLoading(false);
            }
        };

        handleMagicLogin();
    }, [user, searchParams, loginWithMagicURL, router, isLoading]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#E7EBC5] to-[#E8C7DE] flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                <div className="mb-8">
                    <Link
                        href="/login"
                        className="inline-flex items-center gap-2 text-[#565264] hover:text-[#56876D] transition-colors"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back to login
                    </Link>
                </div>

                <Card className="bg-white/90 backdrop-blur-sm border-[#565264]/10">
                    <CardHeader className="text-center space-y-4">
                        <CardTitle className="text-3xl font-bold">
                            <span className="text-[#565264]">Dev</span>
                            <span className="text-[#56876D]">Bran.ch</span>
                        </CardTitle>
                        <CardDescription className="text-[#565264]/80">
                            {isLoading ? "Logging you in..." :
                                loginSuccess ? "Login successful!" :
                                    "Magic link authentication"}
                        </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-6">
                        {isLoading ? (
                            <div className="text-center space-y-4">
                                <div className="flex justify-center">
                                    <Loader2 className="h-16 w-16 text-[#56876D] animate-spin" />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-lg font-semibold text-[#565264]">
                                        Processing magic link...
                                    </h3>
                                    <p className="text-sm text-[#565264]/70">
                                        Please wait while we log you in.
                                    </p>
                                </div>
                            </div>
                        ) : loginSuccess ? (
                            <div className="text-center space-y-4">
                                <div className="flex justify-center">
                                    <CheckCircle className="h-16 w-16 text-[#56876D]" />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-lg font-semibold text-[#565264]">
                                        Welcome back!
                                    </h3>
                                    <p className="text-sm text-[#565264]/70">
                                        You have been successfully logged in. Redirecting to your dashboard...
                                    </p>
                                </div>
                            </div>
                        ) : error ? (
                            <div className="text-center space-y-4">
                                <div className="flex justify-center">
                                    <AlertCircle className="h-16 w-16 text-red-500" />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-lg font-semibold text-[#565264]">
                                        Login Failed
                                    </h3>
                                    <p className="text-sm text-red-600">
                                        {error}
                                    </p>
                                </div>
                                <div className="space-y-3">
                                    <Button
                                        onClick={() => router.push("/login")}
                                        className="w-full bg-[#56876D] hover:bg-[#56876D]/90 text-white"
                                    >
                                        Try Again
                                    </Button>
                                    <Button
                                        onClick={() => router.push("/magic-url")}
                                        variant="outline"
                                        className="w-full border-[#565264] text-[#565264] hover:bg-[#565264] hover:text-white"
                                    >
                                        Request New Magic Link
                                    </Button>
                                </div>
                            </div>
                        ) : null}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
