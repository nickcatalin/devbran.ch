'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { IconBrandGithub, IconBrush, IconMoon, IconAccessible } from '@tabler/icons-react';

interface FeaturesSectionProps {
    className?: string;
}

export function FeaturesSection({ className }: FeaturesSectionProps) {
    const features = [
        {
            title: 'Clean Design',
            description: 'Minimalist and professional design that puts your content first.',
            icon: <IconBrush className="h-8 w-8 text-devbranch-primary" />,
        },
        {
            title: 'Dark Mode',
            description: 'Seamless switching between light and dark themes based on your preference.',
            icon: <IconMoon className="h-8 w-8 text-devbranch-primary" />,
        },
        {
            title: 'Accessibility',
            description: 'Built with accessibility in mind, following WCAG guidelines.',
            icon: <IconAccessible className="h-8 w-8 text-devbranch-primary" />,
        },
        {
            title: 'GitHub Integration',
            description: 'Connect your GitHub account for seamless developer experience.',
            icon: <IconBrandGithub className="h-8 w-8 text-devbranch-primary" />,
        },
    ];

    return (
        <section id="features" className={cn('py-16 bg-background', className)}>
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Features</h2>
                    <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                        DevBran.ch is built with developers in mind, offering a clean and professional way to showcase your work.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            className="p-6 rounded-lg border bg-card hover:shadow-md transition-shadow"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                            <div className="mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-semibold mb-3 text-devbranch-primary">{feature.title}</h3>
                            <p className="text-card-foreground/80">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}