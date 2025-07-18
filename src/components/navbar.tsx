'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ThemeToggle } from './ui/theme-toggle';
import { Logo } from './ui/logo';
import { cn } from '@/lib/utils';
import { IconMenu2, IconX } from '@tabler/icons-react';

interface NavbarProps {
    className?: string;
    variant?: 'landing' | 'dashboard';
}

export function Navbar({ className, variant = 'landing' }: NavbarProps) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className={cn('border-b bg-background sticky top-0 z-50', className)}>
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <div className="flex items-center gap-6">
                    <Link href="/" className="flex items-center gap-2" aria-label="DevBran.ch Home">
                        <Logo size="sm" />
                    </Link>
                    <nav className="hidden md:flex">
                        <ul className="flex items-center gap-6">
                            {variant === 'landing' && (
                                <>
                                    <li>
                                        <Link
                                            href="#features"
                                            className="text-sm font-medium transition-colors hover:text-devbranch-primary"
                                        >
                                            Features
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="#about"
                                            className="text-sm font-medium transition-colors hover:text-devbranch-primary"
                                        >
                                            About
                                        </Link>
                                    </li>
                                </>
                            )}
                            {variant === 'dashboard' && (
                                <>
                                    <li>
                                        <Link
                                            href="/dashboard"
                                            className="text-sm font-medium transition-colors hover:text-devbranch-primary"
                                        >
                                            Dashboard
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/settings"
                                            className="text-sm font-medium transition-colors hover:text-devbranch-primary"
                                        >
                                            Settings
                                        </Link>
                                    </li>
                                </>
                            )}
                        </ul>
                    </nav>
                </div>
                <div className="flex items-center gap-4">
                    <ThemeToggle />
                    <Link
                        href="/login"
                        className="rounded-md bg-devbranch-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-devbranch-primary/90"
                    >
                        Login
                    </Link>
                    <button
                        className="md:hidden rounded-md p-2 text-foreground hover:bg-muted"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={mobileMenuOpen}
                        aria-controls="mobile-menu"
                    >
                        {mobileMenuOpen ? <IconX size={20} /> : <IconMenu2 size={20} />}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {mobileMenuOpen && (
                <div id="mobile-menu" className="md:hidden border-t">
                    <nav className="container mx-auto px-4 py-4">
                        <ul className="flex flex-col gap-4">
                            {variant === 'landing' && (
                                <>
                                    <li>
                                        <Link
                                            href="#features"
                                            className="block py-2 text-sm font-medium transition-colors hover:text-devbranch-primary"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            Features
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="#about"
                                            className="block py-2 text-sm font-medium transition-colors hover:text-devbranch-primary"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            About
                                        </Link>
                                    </li>
                                </>
                            )}
                            {variant === 'dashboard' && (
                                <>
                                    <li>
                                        <Link
                                            href="/dashboard"
                                            className="block py-2 text-sm font-medium transition-colors hover:text-devbranch-primary"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            Dashboard
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/settings"
                                            className="block py-2 text-sm font-medium transition-colors hover:text-devbranch-primary"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            Settings
                                        </Link>
                                    </li>
                                </>
                            )}
                        </ul>
                    </nav>
                </div>
            )}
        </header>
    );
}