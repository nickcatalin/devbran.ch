'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/shadcn/button';
import { Badge } from '@/components/ui/shadcn/badge';
import { ArrowRight, Star, Github, Zap, Users, BarChart3 } from 'lucide-react';

export default function Hero() {
    const [email, setEmail] = useState('');

    const handleWaitlistSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Implement waitlist logic
        console.log('Waitlist email:', email);
    };

    return (
        <section className="relative pt-24 pb-12 lg:pt-32 lg:pb-20 bg-background-primary dark:bg-dark-background-primary">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-full">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-accent-400/20 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute top-40 right-10 w-96 h-96 bg-lime-100/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
                    <div className="absolute bottom-20 left-1/3 w-64 h-64 bg-forest-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
                </div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    {/* Badge */}
                    <Badge
                        variant="outline"
                        className="mb-6 border-primary-600 text-primary-600 bg-primary-50 dark:bg-primary-900/20"
                    >
                        <Star className="w-3 h-3 mr-1" />
                        The future of developer profiles
                    </Badge>

                    {/* Main Heading */}
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary dark:text-dark-text-primary mb-6 leading-tight">
                        Your{' '}
                        <span className="bg-gradient-to-r from-primary-600 to-forest-500 bg-clip-text text-transparent">
                            Professional
                        </span>
                        <br />
                        Developer Profile
                    </h1>

                    {/* Subheading */}
                    <p className="text-xl sm:text-2xl text-text-secondary dark:text-dark-text-secondary mb-8 max-w-3xl mx-auto leading-relaxed">
                        Create a stunning developer profile with custom blocks, analytics, and integrations.
                        The ultimate <strong>Linktree alternative</strong> built for developers.
                    </p>

                    {/* Feature Highlights */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        <div className="flex items-center gap-2 bg-background-secondary dark:bg-dark-background-secondary px-4 py-2 rounded-full">
                            <Zap className="w-4 h-4 text-primary-600" />
                            <span className="text-sm text-text-secondary dark:text-dark-text-secondary">Custom Blocks</span>
                        </div>
                        <div className="flex items-center gap-2 bg-background-secondary dark:bg-dark-background-secondary px-4 py-2 rounded-full">
                            <BarChart3 className="w-4 h-4 text-forest-500" />
                            <span className="text-sm text-text-secondary dark:text-dark-text-secondary">Analytics</span>
                        </div>
                        <div className="flex items-center gap-2 bg-background-secondary dark:bg-dark-background-secondary px-4 py-2 rounded-full">
                            <Users className="w-4 h-4 text-accent-500" />
                            <span className="text-sm text-text-secondary dark:text-dark-text-secondary">AMA Features</span>
                        </div>
                        <div className="flex items-center gap-2 bg-background-secondary dark:bg-dark-background-secondary px-4 py-2 rounded-full">
                            <Github className="w-4 h-4 text-text-secondary dark:text-dark-text-secondary" />
                            <span className="text-sm text-text-secondary dark:text-dark-text-secondary">GitHub Integration</span>
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                        <Button
                            size="lg"
                            className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 text-lg font-semibold"
                            asChild
                        >
                            <Link href="/signup">
                                Get Started Free
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white px-8 py-4 text-lg font-semibold"
                            asChild
                        >
                            <Link href="/demo">
                                View Demo
                            </Link>
                        </Button>
                    </div>

                    {/* Social Proof */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-text-muted dark:text-dark-text-muted">
                        <div className="flex items-center gap-2">
                            <div className="flex -space-x-2">
                                <div className="w-8 h-8 bg-primary-600 rounded-full border-2 border-white dark:border-dark-background-primary"></div>
                                <div className="w-8 h-8 bg-forest-500 rounded-full border-2 border-white dark:border-dark-background-primary"></div>
                                <div className="w-8 h-8 bg-accent-500 rounded-full border-2 border-white dark:border-dark-background-primary"></div>
                            </div>
                            <span className="text-sm">Join 2,000+ developers</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 fill-current text-yellow-400" />
                            <Star className="w-4 h-4 fill-current text-yellow-400" />
                            <Star className="w-4 h-4 fill-current text-yellow-400" />
                            <Star className="w-4 h-4 fill-current text-yellow-400" />
                            <Star className="w-4 h-4 fill-current text-yellow-400" />
                            <span className="text-sm ml-1">5.0 from 500+ reviews</span>
                        </div>
                    </div>
                </div>

                {/* Hero Image/Demo */}
                <div className="mt-16 lg:mt-24 relative">
                    <div className="bg-gradient-to-r from-primary-600 to-forest-500 rounded-2xl p-8 shadow-2xl max-w-4xl mx-auto">
                        <div className="bg-white dark:bg-dark-background-primary rounded-xl p-6 shadow-xl">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                <div className="flex-1 bg-background-secondary dark:bg-dark-background-secondary rounded-md px-4 py-1 text-sm text-text-muted dark:text-dark-text-muted">
                                    devbran.ch/johndoe
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-forest-500 rounded-full"></div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-text-primary dark:text-dark-text-primary">John Doe</h3>
                                        <p className="text-text-secondary dark:text-dark-text-secondary">Full Stack Developer</p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="bg-background-secondary dark:bg-dark-background-secondary rounded-lg p-4">
                                        <div className="w-4 h-4 bg-primary-600 rounded mb-2"></div>
                                        <div className="text-sm text-text-secondary dark:text-dark-text-secondary">Projects</div>
                                    </div>
                                    <div className="bg-background-secondary dark:bg-dark-background-secondary rounded-lg p-4">
                                        <div className="w-4 h-4 bg-forest-500 rounded mb-2"></div>
                                        <div className="text-sm text-text-secondary dark:text-dark-text-secondary">Resume</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
