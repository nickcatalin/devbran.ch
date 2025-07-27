import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Twitter, Github } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-gradient-to-br from-secondary/15 via-accent/10 to-primary/5 py-20 border-t border-border/50">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-8 mb-12">
                    <div className="space-y-6">
                        <div className="flex items-center space-x-2">
                            <div className="flex h-8 w-8 items-center justify-center">
                                <img
                                    src="/devbranch-logo.svg"
                                    alt="DevBranch Logo"
                                    className="h-8 w-8 object-contain"
                                />
                            </div>
                            <h3 className="text-2xl font-bold">
                                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Dev</span>
                                <span className="text-foreground">Bran.ch</span>
                            </h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                            The link-in-bio tool built for developers, by developers. Showcase your code, projects, and skills beautifully.
                        </p>
                        <div className="flex gap-4">
                            <Link
                                href="#"
                                className="flex items-center justify-center w-10 h-10 bg-card border border-border rounded-lg text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-200"
                            >
                                <Twitter className="h-4 w-4" />
                            </Link>
                            <Link
                                href="#"
                                className="flex items-center justify-center w-10 h-10 bg-card border border-border rounded-lg text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-200"
                            >
                                <Github className="h-4 w-4" />
                            </Link>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h4 className="font-semibold text-foreground text-lg">Product</h4>
                        <div className="space-y-3">
                            <Link href="/features" className="block text-muted-foreground hover:text-primary transition-colors duration-200">Features</Link>
                            <Link href="/pricing" className="block text-muted-foreground hover:text-primary transition-colors duration-200">Pricing</Link>
                            <Link href="/examples" className="block text-muted-foreground hover:text-primary transition-colors duration-200">Examples</Link>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h4 className="font-semibold text-foreground text-lg">Support</h4>
                        <div className="space-y-3">
                            <Link href="/docs" className="block text-muted-foreground hover:text-primary transition-colors duration-200">Documentation</Link>
                            <Link href="/help" className="block text-muted-foreground hover:text-primary transition-colors duration-200">Help Center</Link>
                            <Link href="/contact" className="block text-muted-foreground hover:text-primary transition-colors duration-200">Contact</Link>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h4 className="font-semibold text-foreground text-lg">Connect</h4>
                        <div className="space-y-3">
                            <p className="text-muted-foreground text-sm">Follow us for updates</p>
                            <div className="text-muted-foreground text-sm">
                                <span className="inline-flex items-center gap-1">
                                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                                    Building the future of developer portfolios
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <Separator className="mb-8 bg-border/50" />

                <div className="flex flex-col md:flex-row justify-between items-center text-muted-foreground">
                    <p className="text-sm">&copy; 2025 DevBran.ch. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <Link href="/privacy" className="text-sm hover:text-primary transition-colors duration-200">Privacy Policy</Link>
                        <Link href="/terms" className="text-sm hover:text-primary transition-colors duration-200">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
