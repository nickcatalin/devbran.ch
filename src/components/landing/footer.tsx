import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Twitter, Github } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-[#565264] py-16">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-white">
                            <span className="text-[#E8C7DE]">Dev</span>
                            <span className="text-[#E7EBC5]">Bran.ch</span>
                        </h3>
                        <p className="text-white/80">
                            The link-in-bio tool built for developers, by developers.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-semibold text-white">Product</h4>
                        <div className="space-y-2 text-white/80">
                            <Link href="/features" className="block hover:text-white transition-colors">Features</Link>
                            <Link href="/pricing" className="block hover:text-white transition-colors">Pricing</Link>
                            <Link href="/examples" className="block hover:text-white transition-colors">Examples</Link>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-semibold text-white">Support</h4>
                        <div className="space-y-2 text-white/80">
                            <Link href="/docs" className="block hover:text-white transition-colors">Documentation</Link>
                            <Link href="/help" className="block hover:text-white transition-colors">Help Center</Link>
                            <Link href="/contact" className="block hover:text-white transition-colors">Contact</Link>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-semibold text-white">Connect</h4>
                        <div className="flex gap-4">
                            <Link href="#" className="text-white/80 hover:text-white transition-colors">
                                <Twitter className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-white/80 hover:text-white transition-colors">
                                <Github className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>
                </div>

                <Separator className="bg-white/20 mb-8" />

                <div className="flex flex-col md:flex-row justify-between items-center text-white/80">
                    <p>&copy; 2025 DevBran.ch. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
