"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { ArrowLeft, CheckCircle, Lock } from "lucide-react";
import { useAuth } from "@/contexts/auth-context";
import { toast } from "sonner";
import { account } from "@/lib/appwrite";

export default function ResetPasswordPage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const { user } = useAuth();
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [passwordReset, setPasswordReset] = useState(false);
    const [userId, setUserId] = useState("");
    const [secret, setSecret] = useState("");

    useEffect(() => {
        // Redirect if already logged in
        if (user) {
            router.push("/dashboard");
        }

        // Get the userId and secret from URL parameters
        const userIdParam = searchParams.get("userId");
        const secretParam = searchParams.get("secret");

        if (!userIdParam || !secretParam) {
            toast.error("Invalid reset link. Please request a new password reset.");
            router.push("/forgot-password");
            return;
        }

        setUserId(userIdParam);
        setSecret(secretParam);
    }, [user, router, searchParams]);

    const handleResetPassword = async () => {
        if (!password || !confirmPassword) {
            toast.error("Please fill in all fields");
            return;
        }

        if (password !== confirmPassword) {
            toast.error("Passwords do not match");
            return;
        }

        if (password.length < 8) {
            toast.error("Password must be at least 8 characters long");
            return;
        }

        setIsLoading(true);
        try {
            await account.updateRecovery(userId, secret, password);
            setPasswordReset(true);
            toast.success("Password reset successfully!");
        } catch (error: any) {
            console.error("Password reset failed:", error);
            toast.error(error.message || "Failed to reset password");
        } finally {
            setIsLoading(false);
        }
    };

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
                            {passwordReset ? "Password reset complete" : "Set your new password"}
                        </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-6">
                        {passwordReset ? (
                            <div className="text-center space-y-4">
                                <div className="flex justify-center">
                                    <CheckCircle className="h-16 w-16 text-[#56876D]" />
                                </div>
                                <div className="space-y-2">
                                    <p className="text-[#565264]">
                                        Your password has been reset successfully!
                                    </p>
                                </div>
                                <p className="text-sm text-[#565264]/70">
                                    You can now sign in with your new password.
                                </p>
                                <Button
                                    onClick={() => router.push("/login")}
                                    className="w-full bg-[#56876D] hover:bg-[#56876D]/90 text-white"
                                >
                                    Go to Sign In
                                </Button>
                            </div>
                        ) : (
                            <>
                                <div className="space-y-2">
                                    <p className="text-sm text-[#565264]/80 text-center">
                                        Enter your new password below.
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <label htmlFor="password" className="text-sm font-medium text-[#565264]">
                                            New Password
                                        </label>
                                        <Input
                                            id="password"
                                            type="password"
                                            placeholder="••••••••"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            className="bg-white/80 border-[#565264]/20 focus:border-[#56876D] focus:ring-[#56876D]/20"
                                            disabled={isLoading}
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="confirmPassword" className="text-sm font-medium text-[#565264]">
                                            Confirm New Password
                                        </label>
                                        <Input
                                            id="confirmPassword"
                                            type="password"
                                            placeholder="••••••••"
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                            className="bg-white/80 border-[#565264]/20 focus:border-[#56876D] focus:ring-[#56876D]/20"
                                            disabled={isLoading}
                                            onKeyPress={(e) => e.key === 'Enter' && handleResetPassword()}
                                        />
                                    </div>

                                    <p className="text-xs text-[#565264]/60">
                                        Password must be at least 8 characters long.
                                    </p>
                                </div>

                                <Button
                                    onClick={handleResetPassword}
                                    className="w-full bg-[#56876D] hover:bg-[#56876D]/90 text-white"
                                    disabled={!password || !confirmPassword || isLoading}
                                >
                                    {isLoading ? (
                                        <>
                                            <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                                            Resetting password...
                                        </>
                                    ) : (
                                        <>
                                            <Lock className="mr-2 h-4 w-4" />
                                            Reset Password
                                        </>
                                    )}
                                </Button>

                                <p className="text-center text-sm text-[#565264]/80">
                                    Remember your password?{" "}
                                    <Link href="/login" className="text-[#56876D] hover:underline font-medium">
                                        Sign in
                                    </Link>
                                </p>
                            </>
                        )}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
