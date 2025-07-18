'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface AboutSectionProps {
    className?: string;
}

export function AboutSection({ className }: AboutSectionProps) {
    return (
        <section id="about" className={cn('py-16 bg-muted/50', className)}>
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl font-bold mb-6 text-center">About DevBran.ch</h2>
                        <p className="text-lg mb-6 text-foreground/80">
                            DevBran.ch is a platform designed specifically for developers who want to showcase their professional presence online. Unlike generic link-in-bio tools, DevBran.ch is built with developers' needs in mind.
                        </p>
                        <p className="text-lg mb-6 text-foreground/80">
                            Our platform provides a clean, minimalist interface that puts your content first. With features like GitHub integration, custom themes, and accessibility compliance, DevBran.ch helps you create a professional online presence that stands out.
                        </p>
                        <p className="text-lg text-foreground/80">
                            Whether you're a frontend developer, backend engineer, or full-stack developer, DevBran.ch gives you the tools to showcase your projects, blog posts, social media profiles, and more in one centralized location.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}