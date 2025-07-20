"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Iphone15Pro from "@/components/ui/iphone-15-pro";
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
            // Show a consistent loading placeholder that matches device proportions
            return <div className="w-full aspect-[433/882] bg-white/20 rounded-3xl animate-pulse drop-shadow-2xl" />;
        }

        return <Iphone15Pro className="drop-shadow-2xl w-full h-auto" src="/placeholder-profile.svg" />;
    };

    return (
        <section className="container mx-auto px-4 pt-24 pb-12 sm:pt-28 sm:pb-16 md:pt-32 md:pb-20 lg:pt-40 lg:pb-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className="space-y-6 md:space-y-8 text-center lg:text-left">
                    <div className="space-y-4">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                            <span className="text-[#565264]">Dev</span>
                            <span className="text-[#56876D]">Bran.ch</span>
                        </h1>
                        <p className="text-lg sm:text-xl lg:text-2xl text-[#565264] leading-relaxed max-w-2xl mx-auto lg:mx-0">
                            The only link-in-bio tool built specifically for developers.
                            Showcase your code, projects, and skills in one beautiful page.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto lg:mx-0">
                            <div className="relative flex-1">
                                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#565264]/70 font-medium z-10">
                                    devbran.ch/
                                </span>
                                <Input
                                    placeholder="username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    className="pl-[100px] bg-white/80 border-[#565264]/20 focus:border-[#56876D] focus:ring-[#56876D]/20 h-12"
                                    onKeyPress={(e) => e.key === 'Enter' && handleCreatePage()}
                                />
                            </div>
                            <Button
                                onClick={handleCreatePage}
                                className="bg-[#56876D] hover:bg-[#56876D]/90 text-white h-12 px-6 whitespace-nowrap"
                            >
                                Create Page
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </div>
                        <p className="text-sm text-[#565264]/70">
                            Get started for free • No credit card required
                        </p>
                    </div>
                </div>

                <div className="flex justify-center lg:justify-end order-first lg:order-last">
                    <div className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[400px]">
                        {renderDeviceComponent()}
                    </div>
                </div>
            </div>
        </section>
    );
}
