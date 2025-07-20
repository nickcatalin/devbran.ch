"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { ArrowLeft, Mail, CheckCircle } from "lucide-react";

export default function ForgotPasswordPage() {
    const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [emailSent, setEmailSent] = useState(false);

    const handleResetPassword = async () => {
        setIsLoading(true);
        try {
            // In a real app, this would send a password reset email
            console.log("Password reset requested for:", email);

            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));

            setEmailSent(true);
        } catch (error) {
            console.error("Password reset failed:", error);
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
                            {emailSent ? "Check your email" : "Reset your password"}
                        </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-6">
                        {emailSent ? (
                            <div className="text-center space-y-4">
                                <div className="flex justify-center">
                                    <CheckCircle className="h-16 w-16 text-[#56876D]" />
                                </div>
                                <div className="space-y-2">
                                    <p className="text-[#565264]">
                                        We've sent a password reset link to:
                                    </p>
                                    <p className="font-medium text-[#56876D]">{email}</p>
                                </div>
                                <p className="text-sm text-[#565264]/70">
                                    Check your email and click the link to reset your password.
                                    If you don't see it, check your spam folder.
                                </p>
                                <Button
                                    onClick={() => {
                                        setEmailSent(false);
                                        setEmail("");
                                    }}
                                    variant="ghost"
                                    className="text-[#56876D] hover:bg-[#56876D]/10"
                                >
                                    Send to a different email
                                </Button>
                            </div>
                        ) : (
                            <>
                                <div className="space-y-2">
                                    <p className="text-sm text-[#565264]/80 text-center">
                                        Enter your email address and we'll send you a link to reset your password.
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium text-[#565264]">
                                            Email
                                        </label>
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="john@example.com"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="bg-white/80 border-[#565264]/20 focus:border-[#56876D] focus:ring-[#56876D]/20"
                                            disabled={isLoading}
                                            onKeyPress={(e) => e.key === 'Enter' && handleResetPassword()}
                                        />
                                    </div>
                                </div>

                                <Button
                                    onClick={handleResetPassword}
                                    className="w-full bg-[#56876D] hover:bg-[#56876D]/90 text-white"
                                    disabled={!email || isLoading}
                                >
                                    {isLoading ? (
                                        <>
                                            <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                                            Sending reset link...
                                        </>
                                    ) : (
                                        <>
                                            <Mail className="mr-2 h-4 w-4" />
                                            Send reset link
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
