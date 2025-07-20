import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { Safari } from "@/components/ui/safari";
import { Code, Zap, Globe, Github } from "lucide-react";

export function FeaturesSection() {
    return (
        <section id="features" className="bg-[#565264] py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                        Built for Developers
                    </h2>
                    <p className="text-xl text-white/80 max-w-2xl mx-auto">
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
                                className="md:col-span-2 bg-white/10 border-white/20"
                                title={<span className="text-white">GitHub Integration</span>}
                                description={<span className="text-white/80">Automatically sync your repositories and showcase your best projects</span>}
                                header={
                                    <div className="flex h-32 items-center justify-center bg-gradient-to-br from-[#E8C7DE] to-[#E7EBC5] rounded-lg">
                                        <Github className="h-12 w-12 text-[#565264]" />
                                    </div>
                                }
                                icon={<Code className="h-4 w-4 text-white" />}
                            />
                            <BentoGridItem
                                className="bg-white/10 border-white/20"
                                title={<span className="text-white">Custom Domains</span>}
                                description={<span className="text-white/80">Use your own domain for a professional presence</span>}
                                header={
                                    <div className="flex h-32 items-center justify-center bg-gradient-to-br from-[#E7EBC5] to-[#56876D] rounded-lg">
                                        <Globe className="h-12 w-12 text-white" />
                                    </div>
                                }
                                icon={<Globe className="h-4 w-4 text-white" />}
                            />
                            <BentoGridItem
                                className="bg-white/10 border-white/20"
                                title={<span className="text-white">Code Snippets</span>}
                                description={<span className="text-white/80">Share beautiful syntax-highlighted code</span>}
                                header={
                                    <div className="flex h-32 items-center justify-center bg-gradient-to-br from-[#56876D] to-[#E8C7DE] rounded-lg">
                                        <Code className="h-12 w-12 text-white" />
                                    </div>
                                }
                                icon={<Code className="h-4 w-4 text-white" />}
                            />
                            <BentoGridItem
                                className="md:col-span-2 bg-white/10 border-white/20"
                                title={<span className="text-white">Developer Analytics</span>}
                                description={<span className="text-white/80">Track clicks, views, and engagement with detailed analytics</span>}
                                header={
                                    <div className="flex h-32 items-center justify-center bg-gradient-to-br from-[#E8C7DE] to-[#565264] rounded-lg">
                                        <Zap className="h-12 w-12 text-white" />
                                    </div>
                                }
                                icon={<Zap className="h-4 w-4 text-white" />}
                            />
                        </BentoGrid>
                    </div>
                </div>
            </div>
        </section>
    );
}
