import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Twitter, Github } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-secondary py-16">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-secondary-foreground">
                            <span className="text-accent">Dev</span>
                            <span className="text-background">Bran.ch</span>
                        </h3>
                        <p className="text-secondary-foreground">
                            The link-in-bio tool built for developers, by developers.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-semibold text-secondary-foreground">Product</h4>
                        <div className="space-y-2 text-secondary-foreground">
                            <Link href="/features" className="block hover:text-secondary-foreground transition-colors">Features</Link>
                            <Link href="/pricing" className="block hover:text-secondary-foreground transition-colors">Pricing</Link>
                            <Link href="/examples" className="block hover:text-secondary-foreground transition-colors">Examples</Link>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-semibold text-secondary-foreground">Support</h4>
                        <div className="space-y-2 text-secondary-foreground">
                            <Link href="/docs" className="block hover:text-secondary-foreground transition-colors">Documentation</Link>
                            <Link href="/help" className="block hover:text-secondary-foreground transition-colors">Help Center</Link>
                            <Link href="/contact" className="block hover:text-secondary-foreground transition-colors">Contact</Link>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-semibold text-secondary-foreground">Connect</h4>
                        <div className="flex gap-4">
                            <Link href="#" className="text-secondary-foreground hover:text-secondary-foreground transition-colors">
                                <Twitter className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-secondary-foreground hover:text-secondary-foreground transition-colors">
                                <Github className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>
                </div>

                <Separator className="mb-8" />

                <div className="flex flex-col md:flex-row justify-between items-center text-secondary-foreground">
                    <p>&copy; 2025 DevBran.ch. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <Link href="/privacy" className="hover:text-secondary-foreground transition-colors">Privacy</Link>
                        <Link href="/terms" className="hover:text-secondary-foreground transition-colors">Terms</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
