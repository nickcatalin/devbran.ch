'use client';

import { cn } from '@/lib/utils';
import { Logo } from '../ui/logo';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface HeroSectionProps {
    className?: string;
}

export function HeroSection({ className }: HeroSectionProps) {
    return (
        <section
            className={cn(
                'py-20 md:py-32 bg-gradient-to-b from-background to-devbranch-accent-green/20',
                className
            )}
        >
            <div className="container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex justify-center mb-6">
                        <Logo size="lg" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-devbranch-primary to-devbranch-accent-dark-green">
                        Developer Links, Simplified
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-foreground/80">
                        Professional link management for developers, with a clean and minimalist design.
                    </p>
                </motion.div>

                <motion.div
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <Link
                        href="/signup"
                        className="rounded-md bg-devbranch-primary px-6 py-3 text-base font-medium text-white transition-colors hover:bg-devbranch-primary/90 focus:outline-none focus:ring-2 focus:ring-devbranch-primary focus:ring-offset-2"
                    >
                        Get Started
                    </Link>
                    <Link
                        href="/login"
                        className="rounded-md bg-devbranch-accent-pink px-6 py-3 text-base font-medium text-devbranch-text transition-colors hover:bg-devbranch-accent-pink/90 focus:outline-none focus:ring-2 focus:ring-devbranch-accent-pink focus:ring-offset-2"
                    >
                        Login
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}