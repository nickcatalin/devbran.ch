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
    const { user, logout } = useAuth();
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [passwordReset, setPasswordReset] = useState(false);
    const [userId, setUserId] = useState("");
    const [secret, setSecret] = useState("");

    useEffect(() => {
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

        // Only redirect if already logged in AND no valid reset parameters
        // This allows password reset even when authenticated
        if (user && (!userIdParam || !secretParam)) {
            router.push("/dashboard");
        }
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

            // If user was already logged in, log them out to ensure they use the new password
            if (user) {
                try {
                    await logout();
                } catch (error) {
                    // Ignore logout errors as the password was successfully reset
                    console.warn("Could not log out after password reset:", error);
                }
            }
        } catch (error: any) {
            console.error("Password reset failed:", error);
            toast.error(error.message || "Failed to reset password");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-background flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                <div className="mb-8">
                    <Link
                        href="/login"
                        className="inline-flex items-center gap-2 text-foreground hover:text-secondary transition-colors"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back to login
                    </Link>
                </div>

                <Card className="bg-card border-border">
                    <CardHeader className="text-center space-y-4">
                        <CardTitle className="text-3xl font-bold">
                            <span className="text-foreground">Dev</span>
                            <span className="text-secondary">Bran.ch</span>
                        </CardTitle>
                        <CardDescription className="text-muted-foreground">
                            {passwordReset ? "Password reset complete" : "Set your new password"}
                        </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-6">
                        {passwordReset ? (
                            <div className="text-center space-y-4">
                                <div className="flex justify-center">
                                    <CheckCircle className="h-16 w-16 text-secondary" />
                                </div>
                                <div className="space-y-2">
                                    <p className="text-foreground">
                                        Your password has been reset successfully!
                                    </p>
                                </div>
                                <p className="text-sm text-muted-foreground">
                                    You can now sign in with your new password.
                                </p>
                                <Button
                                    onClick={() => router.push("/login")}
                                    className="w-full bg-primary hover:bg-secondary text-primary-foreground"
                                >
                                    Go to Sign In
                                </Button>
                            </div>
                        ) : (
                            <>
                                <div className="space-y-2">
                                    <p className="text-sm text-muted-foreground text-center">
                                        Enter your new password below.
                                    </p>
                                    {user && (
                                        <div className="p-3 bg-secondary border border-secondary rounded-md">
                                            <p className="text-xs text-muted-foreground text-center">
                                                You're currently signed in. After resetting your password, you'll be logged out and need to sign in again with your new password.
                                            </p>
                                        </div>
                                    )}
                                </div>

                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <label htmlFor="password" className="text-sm font-medium text-foreground">
                                            New Password
                                        </label>
                                        <Input
                                            id="password"
                                            type="password"
                                            placeholder="••••••••"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            className="bg-background border-border focus:border-secondary focus:ring-secondary"
                                            disabled={isLoading}
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="confirmPassword" className="text-sm font-medium text-foreground">
                                            Confirm New Password
                                        </label>
                                        <Input
                                            id="confirmPassword"
                                            type="password"
                                            placeholder="••••••••"
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                            className="bg-background border-border focus:border-secondary focus:ring-secondary"
                                            disabled={isLoading}
                                            onKeyPress={(e) => e.key === 'Enter' && handleResetPassword()}
                                        />
                                    </div>

                                    <p className="text-xs text-muted-foreground">
                                        Password must be at least 8 characters long.
                                    </p>
                                </div>

                                <Button
                                    onClick={handleResetPassword}
                                    className="w-full bg-primary hover:bg-secondary text-primary-foreground"
                                    disabled={!password || !confirmPassword || isLoading}
                                >
                                    {isLoading ? (
                                        <>
                                            <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
                                            Resetting password...
                                        </>
                                    ) : (
                                        <>
                                            <Lock className="mr-2 h-4 w-4" />
                                            Reset Password
                                        </>
                                    )}
                                </Button>

                                <p className="text-center text-sm text-muted-foreground">
                                    Remember your password?{" "}
                                    <Link href="/login" className="text-primary hover:underline font-medium">
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
