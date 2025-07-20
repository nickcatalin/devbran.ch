"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { ArrowLeft, Github, Mail } from "lucide-react";

export default function LoginPage() {
    const searchParams = useSearchParams();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        const usernameParam = searchParams.get("username");
        if (usernameParam) {
            setUsername(usernameParam);
        }
    }, [searchParams]);

    const handleSignUp = () => {
        // In a real app, this would handle authentication
        console.log("Sign up with:", { username, email, password });
    };

    const handleGithubLogin = () => {
        // In a real app, this would handle GitHub OAuth
        console.log("Login with GitHub");
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
                            Create your developer profile in minutes
                        </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-6">
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <label htmlFor="username" className="text-sm font-medium text-[#565264]">
                                    Username
                                </label>
                                <Input
                                    id="username"
                                    type="text"
                                    placeholder="johndoe"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    className="bg-white/80 border-[#565264]/20 focus:border-[#56876D] focus:ring-[#56876D]/20"
                                />
                                <p className="text-xs text-[#565264]/60">
                                    Your profile will be available at devbran.ch/{username}
                                </p>
                            </div>

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
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="password" className="text-sm font-medium text-[#565264]">
                                    Password
                                </label>
                                <Input
                                    id="password"
                                    type="password"
                                    placeholder="••••••••"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="bg-white/80 border-[#565264]/20 focus:border-[#56876D] focus:ring-[#56876D]/20"
                                />
                            </div>
                        </div>

                        <Button
                            onClick={handleSignUp}
                            className="w-full bg-[#56876D] hover:bg-[#56876D]/90 text-white"
                            disabled={!username || !email || !password}
                        >
                            <Mail className="mr-2 h-4 w-4" />
                            Create Account
                        </Button>

                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <Separator className="w-full bg-[#565264]/20" />
                            </div>
                            <div className="relative flex justify-center text-xs uppercase">
                                <span className="bg-white px-2 text-[#565264]/60">or continue with</span>
                            </div>
                        </div>

                        <Button
                            onClick={handleGithubLogin}
                            variant="outline"
                            className="w-full border-[#565264]/20 text-[#565264] hover:bg-[#565264]/5"
                        >
                            <Github className="mr-2 h-4 w-4" />
                            Continue with GitHub
                        </Button>

                        <p className="text-center text-xs text-[#565264]/60">
                            By creating an account, you agree to our{" "}
                            <Link href="/terms" className="underline hover:text-[#56876D]">
                                Terms of Service
                            </Link>{" "}
                            and{" "}
                            <Link href="/privacy" className="underline hover:text-[#56876D]">
                                Privacy Policy
                            </Link>
                        </p>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
