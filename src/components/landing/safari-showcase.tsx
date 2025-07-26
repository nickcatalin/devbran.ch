"use client";
import { Safari } from "@/components/ui/safari";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Code, User } from "lucide-react";

export function SafariShowcaseSection() {
    return (
        <section className="relative py-20 md:py-32 bg-background overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Content */}
                    <div className="space-y-8 text-center lg:text-left">
                        <div className="space-y-4">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                                <span className="text-primary">Beautiful</span>
                                <br />
                                <span className="text-secondary">Developer</span>
                                <br />
                                <span className="text-primary">Profiles</span>
                            </h2>
                            <p className="text-lg sm:text-xl text-foreground leading-relaxed max-w-xl mx-auto lg:mx-0">
                                Create stunning, professional profiles that showcase your coding skills,
                                projects, and achievements in one seamless experience.
                            </p>
                        </div>

                        {/* Features list */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 justify-center lg:justify-start">
                                <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                                    <Code className="w-4 h-4 text-secondary-foreground" />
                                </div>
                                <span className="text-foreground font-medium">GitHub integration & project showcase</span>
                            </div>
                            <div className="flex items-center gap-3 justify-center lg:justify-start">
                                <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                                    <Globe className="w-4 h-4 text-secondary-foreground" />
                                </div>
                                <span className="text-foreground font-medium">Custom domain & professional branding</span>
                            </div>
                            <div className="flex items-center gap-3 justify-center lg:justify-start">
                                <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                                    <User className="w-4 h-4 text-secondary-foreground" />
                                </div>
                                <span className="text-foreground font-medium">Developer-focused templates</span>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Button className="bg-primary hover:bg-secondary text-primary-foreground h-12 px-8">
                                View Live Demo
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                            <Button
                                variant="outline"
                                className="h-12 px-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                            >
                                See Examples
                            </Button>
                        </div>
                    </div>

                    {/* Safari Component */}
                    <div className="flex justify-center lg:justify-end">
                        <div className="w-full max-w-[600px] lg:max-w-[700px]">
                            <Safari
                                imageSrc="/placeholder-profile.svg"
                                url="devbran.ch/johndoe"
                                className="drop-shadow-2xl w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Background decorations */}
            <div className="absolute top-10 left-10 w-20 h-20 bg-primary rounded-full blur-xl" />
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-secondary rounded-full blur-xl" />
            <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-accent rounded-full blur-lg" />
        </section>
    );
}
