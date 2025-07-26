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
        <section id="pricing" className="py-20 bg-primary">
            <div className="container mx-auto px-4 text-center">
                <div className="max-w-3xl mx-auto space-y-8">
                    <h2 className="text-4xl lg:text-5xl font-bold text-primary-foreground">
                        Ready to Build Your Developer Profile?
                    </h2>
                    <p className="text-xl text-primary-foreground">
                        Join thousands of developers who trust DevBran.ch to showcase their work
                    </p>

                    <div className="flex gap-2 max-w-md mx-auto">
                        <div className="relative flex-1">
                            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground font-medium z-10">
                                devbran.ch/
                            </span>
                            <Input
                                placeholder="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="pl-[100px]"
                                onKeyPress={(e) => e.key === 'Enter' && handleCreatePage()}
                            />
                        </div>
                        <Button
                            onClick={handleCreatePage}
                            variant="secondary"
                        >
                            Get Started
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </div>

                    <div className="flex items-center justify-center gap-8 text-primary-foreground">
                        <div className="flex items-center gap-2">
                            <Shield className="h-5 w-5" />
                            <span>Free forever</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Users className="h-5 w-5" />
                            <span>Join 10k+ developers</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Star className="h-5 w-5" />
                            <span>5-star rated</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
