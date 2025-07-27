import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { Safari } from "@/components/ui/safari";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { Code, Zap, Globe, Github } from "lucide-react";

export function FeaturesSection() {
    return (
        <section id="features" className="bg-gradient-to-br from-secondary/15 via-accent/10 to-primary/20 py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-20">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 text-secondary font-medium text-sm mb-6">
                        🚀 Features
                    </div>
                    <h2 className="text-5xl lg:text-6xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">Built for </span>
                        <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Developers</span>
                    </h2>
                    <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto font-light">
                        Every feature designed with developers in mind, from GitHub integration to custom domains
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
                    {/* Safari Component */}
                    <div className="flex justify-center lg:justify-start order-2 lg:order-1">
                        <div className="w-full max-w-[600px] lg:max-w-[700px] relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl blur-2xl"></div>
                            <div className="relative">
                                <CardContainer className="inter-var">
                                    <CardBody className="bg-transparent relative group/card w-auto h-auto rounded-xl p-6">
                                        <CardItem
                                            translateZ="60"
                                            className="w-full"
                                        >
                                            <Safari
                                                imageSrc="/placeholder-safari.svg"
                                                url="devbran.ch/johndoe"
                                                className="drop-shadow-2xl w-full h-auto border border-border/50 bg-card/50 backdrop-blur"
                                            />
                                        </CardItem>
                                    </CardBody>
                                </CardContainer>
                            </div>
                        </div>
                    </div>

                    {/* Features Grid */}
                    <div className="order-1 lg:order-2">
                        <BentoGrid className="max-w-none mx-auto gap-6">
                            <BentoGridItem
                                className="md:col-span-2 bg-card/60 backdrop-blur border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg group"
                                title={<span className="text-foreground font-semibold text-lg">GitHub Integration</span>}
                                description={<span className="text-muted-foreground">Automatically sync your repositories and showcase your best projects with live stats</span>}
                                header={
                                    <div className="flex h-32 items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg group-hover:from-primary/20 group-hover:to-primary/10 transition-all duration-300">
                                        <Github className="h-12 w-12 text-primary" />
                                    </div>
                                }
                                icon={<Code className="h-4 w-4 text-primary" />}
                            />
                            <BentoGridItem
                                className="bg-card/60 backdrop-blur border-border/50 hover:border-secondary/30 transition-all duration-300 hover:shadow-lg group"
                                title={<span className="text-foreground font-semibold">Custom Domains</span>}
                                description={<span className="text-muted-foreground">Professional presence with your own domain</span>}
                                header={
                                    <div className="flex h-32 items-center justify-center bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-lg group-hover:from-secondary/20 group-hover:to-secondary/10 transition-all duration-300">
                                        <Globe className="h-12 w-12 text-secondary" />
                                    </div>
                                }
                                icon={<Globe className="h-4 w-4 text-secondary" />}
                            />
                            <BentoGridItem
                                className="bg-card/60 backdrop-blur border-border/50 hover:border-accent/30 transition-all duration-300 hover:shadow-lg group"
                                title={<span className="text-foreground font-semibold">Code Snippets</span>}
                                description={<span className="text-muted-foreground">Beautiful syntax-highlighted code examples</span>}
                                header={
                                    <div className="flex h-32 items-center justify-center bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg group-hover:from-accent/20 group-hover:to-accent/10 transition-all duration-300">
                                        <Code className="h-12 w-12 text-accent" />
                                    </div>
                                }
                                icon={<Code className="h-4 w-4 text-accent" />}
                            />
                            <BentoGridItem
                                className="md:col-span-2 bg-card/60 backdrop-blur border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg group"
                                title={<span className="text-foreground font-semibold text-lg">Developer Analytics</span>}
                                description={<span className="text-muted-foreground">Track clicks, views, and engagement with detailed insights and performance metrics</span>}
                                header={
                                    <div className="flex h-32 items-center justify-center bg-gradient-to-br from-muted/20 to-muted/10 rounded-lg group-hover:from-muted/30 group-hover:to-muted/20 transition-all duration-300">
                                        <Zap className="h-12 w-12 text-foreground" />
                                    </div>
                                }
                                icon={<Zap className="h-4 w-4 text-foreground" />}
                            />
                        </BentoGrid>
                    </div>
                </div>
            </div>
        </section>
    );
}
