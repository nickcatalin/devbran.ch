"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Shield, Users, Star } from "lucide-react";
import { analytics } from "@/lib/posthog";

export function CtaSection() {
    const [username, setUsername] = useState("");

    const handleCreatePage = () => {
        if (username.trim()) {
            analytics.buttonClick('get_started_cta', 'hero_section');
            analytics.track('cta_username_entered', { username: username.trim() });
            // Redirect to signup page with username as query param
            window.location.href = `/signup?username=${encodeURIComponent(username)}`;
        }
    };

    return (
        <section id="pricing" className="py-24 bg-gradient-to-br from-primary/90 via-secondary/80 to-accent/70 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
            <div className="absolute top-0 left-0 w-96 h-96 bg-background/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-background/20 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-background/10 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-4 text-center relative">
                <div className="max-w-4xl mx-auto space-y-12">
                    <div className="space-y-6">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground font-medium text-sm mb-4">
                            🚀 Get Started
                        </div>
                        <h2 className="text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
                            Ready to Build Your<br />
                            <span className="bg-gradient-to-r from-primary-foreground to-primary-foreground/80 bg-clip-text text-transparent">Developer Profile?</span>
                        </h2>
                        <p className="text-xl lg:text-2xl text-primary-foreground/90 max-w-2xl mx-auto font-light">
                            Join thousands of developers who trust DevBran.ch to showcase their work
                        </p>
                    </div>

                    <div className="flex gap-3 max-w-lg mx-auto">
                        <div className="relative flex-1">
                            <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-primary-foreground/80 font-medium z-10 text-sm">
                                devbran.ch/
                            </span>
                            <Input
                                placeholder="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="pl-[110px] h-14 text-lg bg-background/90 backdrop-blur border-primary-foreground/30 text-foreground placeholder:text-muted-foreground focus:border-primary-foreground/50 focus:ring-primary-foreground/30"
                                onKeyPress={(e) => e.key === 'Enter' && handleCreatePage()}
                            />
                        </div>
                        <Button
                            onClick={handleCreatePage}
                            size="lg"
                            className="h-14 px-8 text-lg font-semibold bg-primary-foreground text-primary hover:bg-primary-foreground/90 border-0 shadow-lg hover:shadow-xl transition-all duration-200"
                        >
                            Get Started
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </div>

                    <div className="flex items-center justify-center gap-8 text-primary-foreground/90">
                        <div className="flex items-center gap-3">
                            <div className="flex items-center justify-center w-8 h-8 bg-primary-foreground/10 rounded-full border border-primary-foreground/20">
                                <Shield className="h-4 w-4" />
                            </div>
                            <span className="font-medium">Free forever</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="flex items-center justify-center w-8 h-8 bg-primary-foreground/10 rounded-full border border-primary-foreground/20">
                                <Users className="h-4 w-4" />
                            </div>
                            <span className="font-medium">Join 10k+ developers</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="flex items-center justify-center w-8 h-8 bg-primary-foreground/10 rounded-full border border-primary-foreground/20">
                                <Star className="h-4 w-4" />
                            </div>
                            <span className="font-medium">5-star rated</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
