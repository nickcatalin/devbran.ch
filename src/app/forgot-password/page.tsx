"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { ArrowLeft, CheckCircle, Mail } from "lucide-react";
import { useAuth } from "@/contexts/auth-context";
import { toast } from "sonner";

export default function ForgotPasswordPage() {
    const router = useRouter();
    const { forgotPassword, user } = useAuth();
    const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [emailSent, setEmailSent] = useState(false);

    useEffect(() => {
        // Redirect if already logged in
        if (user) {
            router.push("/dashboard");
        }
    }, [user, router]);

    const handleResetPassword = async () => {
        if (!email) {
            toast.error("Please enter your email address");
            return;
        }

        setIsLoading(true);
        try {
            await forgotPassword(email);
            setEmailSent(true);
            toast.success("Password reset email sent!");
        } catch (error: any) {
            console.error("Password reset failed:", error);
            toast.error(error.message || "Failed to send reset email");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-accent/10 via-primary/15 to-secondary/20 flex items-center justify-center p-4 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0">
                <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-3xl"></div>
            </div>
            <div className="w-full max-w-md relative z-10">
                <div className="mb-8">
                    <Link
                        href="/login"
                        className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back to login
                    </Link>
                </div>

                <Card className="bg-card/80 backdrop-blur border-border/50 shadow-2xl">
                    <CardHeader className="text-center space-y-4">
                        <CardTitle className="text-3xl font-bold">
                            <span className="text-foreground">Dev</span>
                            <span className="text-primary">Bran.ch</span>
                        </CardTitle>
                        <CardDescription className="text-muted-foreground">
                            {emailSent ? "Check your email" : "Reset your password"}
                        </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-6">
                        {emailSent ? (
                            <div className="text-center space-y-4">
                                <div className="flex justify-center">
                                    <CheckCircle className="h-16 w-16 text-primary" />
                                </div>
                                <div className="space-y-2">
                                    <p className="text-foreground">
                                        We've sent a password reset link to:
                                    </p>
                                    <p className="font-medium text-primary">{email}</p>
                                </div>
                                <p className="text-sm text-muted-foreground">
                                    Check your email and click the link to reset your password.
                                    If you don't see it, check your spam folder.
                                </p>
                                <Button
                                    onClick={() => {
                                        setEmailSent(false);
                                        setEmail("");
                                    }}
                                    variant="ghost"
                                    className="text-primary hover:bg-primary"
                                >
                                    Send to a different email
                                </Button>
                            </div>
                        ) : (
                            <>
                                <div className="space-y-2">
                                    <p className="text-sm text-muted-foreground text-center">
                                        Enter your email address and we'll send you a link to reset your password.
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium text-foreground">
                                            Email
                                        </label>
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="john@example.com"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="bg-card border-border focus:border-primary focus:ring-primary/20 text-foreground placeholder:text-muted-foreground"
                                            disabled={isLoading}
                                            onKeyPress={(e) => e.key === 'Enter' && handleResetPassword()}
                                        />
                                    </div>
                                </div>

                                <Button
                                    onClick={handleResetPassword}
                                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                                    disabled={!email || isLoading}
                                >
                                    {isLoading ? (
                                        <>
                                            <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
                                            Sending reset link...
                                        </>
                                    ) : (
                                        <>
                                            <Mail className="mr-2 h-4 w-4" />
                                            Send reset link
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
