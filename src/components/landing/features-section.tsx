import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { Safari } from "@/components/ui/safari";
import { Code, Zap, Globe, Github } from "lucide-react";

export function FeaturesSection() {
    return (
        <section id="features" className="bg-secondary py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-secondary-foreground mb-4">
                        Built for Developers
                    </h2>
                    <p className="text-xl text-secondary-foreground max-w-2xl mx-auto">
                        Every feature designed with developers in mind
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Safari Component */}
                    <div className="flex justify-center lg:justify-start">
                        <div className="w-full max-w-[600px] lg:max-w-[700px]">
                            <Safari
                                imageSrc="/placeholder-safari.svg"
                                url="devbran.ch/johndoe"
                                className="drop-shadow-2xl w-full h-auto"
                            />
                        </div>
                    </div>

                    {/* Features Grid */}
                    <div>
                        <BentoGrid className="max-w-none mx-auto">
                            <BentoGridItem
                                className="md:col-span-2 bg-secondary border-secondary"
                                title={<span className="text-secondary-foreground">GitHub Integration</span>}
                                description={<span className="text-secondary-foreground">Automatically sync your repositories and showcase your best projects</span>}
                                header={
                                    <div className="flex h-32 items-center justify-center bg-accent rounded-lg">
                                        <Github className="h-12 w-12 text-accent-foreground" />
                                    </div>
                                }
                                icon={<Code className="h-4 w-4 text-secondary-foreground" />}
                            />
                            <BentoGridItem
                                className="bg-secondary border-secondary"
                                title={<span className="text-secondary-foreground">Custom Domains</span>}
                                description={<span className="text-secondary-foreground">Use your own domain for a professional presence</span>}
                                header={
                                    <div className="flex h-32 items-center justify-center bg-primary rounded-lg">
                                        <Globe className="h-12 w-12 text-primary-foreground" />
                                    </div>
                                }
                                icon={<Globe className="h-4 w-4 text-secondary-foreground" />}
                            />
                            <BentoGridItem
                                className="bg-secondary border-secondary"
                                title={<span className="text-secondary-foreground">Code Snippets</span>}
                                description={<span className="text-secondary-foreground">Share beautiful syntax-highlighted code</span>}
                                header={
                                    <div className="flex h-32 items-center justify-center bg-accent rounded-lg">
                                        <Code className="h-12 w-12 text-accent-foreground" />
                                    </div>
                                }
                                icon={<Code className="h-4 w-4 text-secondary-foreground" />}
                            />
                            <BentoGridItem
                                className="md:col-span-2 bg-secondary border-secondary"
                                title={<span className="text-secondary-foreground">Developer Analytics</span>}
                                description={<span className="text-secondary-foreground">Track clicks, views, and engagement with detailed analytics</span>}
                                header={
                                    <div className="flex h-32 items-center justify-center bg-muted rounded-lg">
                                        <Zap className="h-12 w-12 text-muted-foreground" />
                                    </div>
                                }
                                icon={<Zap className="h-4 w-4 text-secondary-foreground" />}
                            />
                        </BentoGrid>
                    </div>
                </div>
            </div>
        </section>
    );
}
