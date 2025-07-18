'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Logo } from '../ui/logo';
import { IconBrandGithub, IconBrandTwitter } from '@tabler/icons-react';

interface FooterProps {
    className?: string;
}

export function Footer({ className }: FooterProps) {
    return (
        <footer className={cn('border-t py-12 bg-background', className)}>
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="md:col-span-2">
                        <Logo size="sm" />
                        <p className="mt-4 text-sm text-foreground/70 max-w-md">
                            DevBran.ch is a professional link management platform designed specifically for developers, providing a clean and minimalist way to showcase your online presence.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="#features" className="text-sm text-foreground/70 hover:text-devbranch-primary transition-colors">
                                    Features
                                </Link>
                            </li>
                            <li>
                                <Link href="#about" className="text-sm text-foreground/70 hover:text-devbranch-primary transition-colors">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="/login" className="text-sm text-foreground/70 hover:text-devbranch-primary transition-colors">
                                    Login
                                </Link>
                            </li>
                            <li>
                                <Link href="/signup" className="text-sm text-foreground/70 hover:text-devbranch-primary transition-colors">
                                    Sign Up
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Connect</h3>
                        <div className="flex space-x-4">
                            <Link
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-foreground/70 hover:text-devbranch-primary transition-colors"
                                aria-label="GitHub"
                            >
                                <IconBrandGithub size={24} />
                            </Link>
                            <Link
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-foreground/70 hover:text-devbranch-primary transition-colors"
                                aria-label="Twitter"
                            >
                                <IconBrandTwitter size={24} />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm text-foreground/60">
                        &copy; {new Date().getFullYear()} DevBran.ch. All rights reserved.
                    </p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="/privacy" className="text-sm text-foreground/60 hover:text-devbranch-primary transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="text-sm text-foreground/60 hover:text-devbranch-primary transition-colors">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}