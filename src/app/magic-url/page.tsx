"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/auth-context";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2, Mail, ArrowLeft, CheckCircle } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";

export default function MagicURLPage() {
    const router = useRouter();
    const { sendMagicURL, user } = useAuth();
    const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [emailSent, setEmailSent] = useState(false);

    useEffect(() => {
        // Redirect if already logged in
        if (user) {
            router.push("/dashboard");
        }
    }, [user, router]);

    const handleSendMagicURL = async () => {
        if (!email) {
            toast.error("Please enter your email address");
            return;
        }

        if (!email.includes("@")) {
            toast.error("Please enter a valid email address");
            return;
        }

        setIsLoading(true);
        try {
            await sendMagicURL(email);
            setEmailSent(true);
            toast.success("Magic link sent! Check your email.");
        } catch (error: any) {
            console.error("Magic URL send failed:", error);
            toast.error(error.message || "Failed to send magic link");
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" && !isLoading && email) {
            handleSendMagicURL();
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-secondary/15 via-primary/10 to-accent/20 flex items-center justify-center p-4 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0">
                <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl"></div>
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
                            {emailSent ? "Check your email" : "Sign in with Magic Link"}
                        </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-6">
                        {emailSent ? (
                            <div className="text-center space-y-4">
                                <div className="flex justify-center">
                                    <CheckCircle className="h-16 w-16 text-primary" />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-lg font-semibold text-foreground">
                                        Magic link sent!
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                        We've sent a magic link to <strong>{email}</strong>.
                                        Click the link in your email to sign in instantly.
                                    </p>
                                </div>
                                <div className="bg-secondary p-4 rounded-lg">
                                    <p className="text-sm text-muted-foreground">
                                        💡 <strong>Tip:</strong> The magic link will expire in 1 hour for security reasons.
                                    </p>
                                </div>
                                <div className="space-y-3">
                                    <Button
                                        onClick={() => {
                                            setEmailSent(false);
                                            setEmail("");
                                        }}
                                        variant="outline"
                                        className="w-full"
                                    >
                                        Send Another Link
                                    </Button>
                                    <Link href="/login" className="block">
                                        <Button
                                            variant="ghost"
                                            className="w-full text-foreground hover:text-primary"
                                        >
                                            Use Password Instead
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        ) : (
                            <div className="space-y-6">
                                <div className="text-center space-y-2">
                                    <Mail className="h-12 w-12 text-primary mx-auto" />
                                    <p className="text-sm text-muted-foreground">
                                        Enter your email address and we'll send you a magic link to sign in instantly—no password required!
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="email" className="text-foreground">
                                            Email address
                                        </Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="Enter your email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            onKeyPress={handleKeyPress}
                                            className="bg-card border-border focus:border-primary focus:ring-primary/20 text-foreground placeholder:text-muted-foreground"
                                            disabled={isLoading}
                                        />
                                    </div>
                                </div>

                                <Button
                                    onClick={handleSendMagicURL}
                                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                                    disabled={!email || isLoading}
                                >
                                    {isLoading ? (
                                        <>
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                            Sending Magic Link...
                                        </>
                                    ) : (
                                        <>
                                            <Mail className="mr-2 h-4 w-4" />
                                            Send Magic Link
                                        </>
                                    )}
                                </Button>

                                <div className="relative">
                                    <div className="absolute inset-0 flex items-center">
                                        <span className="w-full border-t border-border" />
                                    </div>
                                    <div className="relative flex justify-center text-xs uppercase">
                                        <span className="bg-card px-2 text-muted-foreground">
                                            or
                                        </span>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-3">
                                    <Link href="/login" className="block">
                                        <Button
                                            variant="outline"
                                            className="w-full border-border text-foreground hover:bg-muted"
                                        >
                                            Use Password
                                        </Button>
                                    </Link>
                                    <Link href="/signup" className="block">
                                        <Button
                                            variant="outline"
                                            className="w-full border-border text-foreground hover:bg-muted"
                                        >
                                            Sign Up
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        )}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
