"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Iphone15Pro from "@/components/ui/iphone-15-pro";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
    const [username, setUsername] = useState("");
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const handleCreatePage = () => {
        if (username.trim()) {
            // Redirect to signup page with username as query param
            window.location.href = `/signup?username=${encodeURIComponent(username)}`;
        }
    };

    const renderDeviceComponent = () => {
        if (!isClient) {
            // Show a less jarring loading placeholder with similar styling
            return (
                <div className="w-full max-w-[280px] mx-auto">
                    <div className="w-full aspect-[433/882] bg-transparent rounded-[3rem] border border-border/20 relative overflow-hidden">
                        <div className="absolute inset-4 bg-card/30 rounded-[2.5rem] animate-pulse" />
                        <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-border/30 rounded-full" />
                    </div>
                </div>
            );
        }

        return (
            <CardContainer className="inter-var">
                <CardBody className="bg-transparent relative group/card w-auto h-auto rounded-xl p-6">
                    <CardItem
                        translateZ="50"
                        className="w-full"
                    >
                        <Iphone15Pro
                            className="drop-shadow-2xl w-full h-auto"
                            src="/placeholder-profile.svg"
                        />
                    </CardItem>
                </CardBody>
            </CardContainer>
        );
    };

    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-primary/5 via-secondary/10 to-accent/15">
            {/* Animated background elements */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/15 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl"></div>
            </div>
            {/* Dot pattern overlay */}
            <div
                className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage: `radial-gradient(circle, hsl(var(--muted-foreground) / 0.3) 1px, transparent 1px)`,
                    backgroundSize: '50px 50px'
                }}
            ></div>
            <div className="container mx-auto px-4 py-20 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <div className="space-y-8 text-center lg:text-left">
                        <div className="space-y-6">
                            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-medium text-sm mb-4">
                                ✨ Built for Developers
                            </div>
                            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight">
                                <span className="bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">Dev</span>
                                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Bran.ch</span>
                            </h1>
                            <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light">
                                The only link-in-bio tool built specifically for developers.
                                <span className="block mt-2 text-foreground font-medium">Showcase your code, projects, and skills in one beautiful page.</span>
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto lg:mx-0">
                                <div className="relative flex-1">
                                    <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground font-medium z-10 text-sm">
                                        devbran.ch/
                                    </span>
                                    <Input
                                        placeholder="username"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        className="pl-[110px] h-14 text-lg bg-card/50 backdrop-blur border-border/50 focus:border-primary/50 focus:ring-primary/20"
                                        onKeyPress={(e) => e.key === 'Enter' && handleCreatePage()}
                                    />
                                </div>
                                <Button
                                    onClick={handleCreatePage}
                                    size="lg"
                                    className="h-14 px-8 text-lg font-semibold bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 border-0 shadow-lg hover:shadow-xl transition-all duration-200"
                                >
                                    Create Page
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </div>
                            <div className="flex items-center justify-center lg:justify-start gap-6 text-sm">
                                <div className="flex items-center gap-2 text-muted-foreground">
                                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                                    <span>Free forever</span>
                                </div>
                                <div className="flex items-center gap-2 text-muted-foreground">
                                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                                    <span>No credit card required</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center lg:justify-end order-first lg:order-last">
                        <div className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[420px] relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-3xl"></div>
                            <div className="relative">
                                {renderDeviceComponent()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
