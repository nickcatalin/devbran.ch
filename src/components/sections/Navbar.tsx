'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useTheme } from '@/contexts/ThemeContext';
import { Button } from '@/components/ui/shadcn/button';
import { Moon, Sun, Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { theme, setTheme, resolvedTheme } = useTheme();

    const toggleTheme = () => {
        setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background-primary/95 dark:bg-dark-background-primary/95 backdrop-blur-sm border-b border-primary-200 dark:border-dark-background-tertiary">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-primary-600 to-forest-500 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-sm">D</span>
                        </div>
                        <span className="text-xl font-bold text-text-primary dark:text-dark-text-primary">
                            DevBran.ch
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link
                            href="#features"
                            className="text-text-secondary dark:text-dark-text-secondary hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                        >
                            Features
                        </Link>
                        <Link
                            href="#pricing"
                            className="text-text-secondary dark:text-dark-text-secondary hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                        >
                            Pricing
                        </Link>
                        <Link
                            href="#about"
                            className="text-text-secondary dark:text-dark-text-secondary hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                        >
                            About
                        </Link>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center space-x-4">
                        {/* Theme Toggle */}
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={toggleTheme}
                            className="w-9 h-9"
                        >
                            {resolvedTheme === 'dark' ? (
                                <Sun className="h-4 w-4" />
                            ) : (
                                <Moon className="h-4 w-4" />
                            )}
                        </Button>

                        {/* Login Button */}
                        <Button
                            variant="outline"
                            size="sm"
                            asChild
                            className="hidden sm:flex border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white"
                        >
                            <Link href="/login">Login</Link>
                        </Button>

                        {/* Get Started Button */}
                        <Button
                            size="sm"
                            asChild
                            className="hidden sm:flex bg-primary-600 hover:bg-primary-700 text-white"
                        >
                            <Link href="/signup">Get Started</Link>
                        </Button>

                        {/* Mobile Menu Button */}
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden"
                        >
                            {isMenuOpen ? (
                                <X className="h-5 w-5" />
                            ) : (
                                <Menu className="h-5 w-5" />
                            )}
                        </Button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden border-t border-primary-200 dark:border-dark-background-tertiary">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            <Link
                                href="#features"
                                className="block px-3 py-2 text-text-secondary dark:text-dark-text-secondary hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Features
                            </Link>
                            <Link
                                href="#pricing"
                                className="block px-3 py-2 text-text-secondary dark:text-dark-text-secondary hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Pricing
                            </Link>
                            <Link
                                href="#about"
                                className="block px-3 py-2 text-text-secondary dark:text-dark-text-secondary hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                About
                            </Link>
                            <div className="pt-2 space-y-2">
                                <Button
                                    variant="outline"
                                    size="sm"
                                    asChild
                                    className="w-full border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white"
                                >
                                    <Link href="/login">Login</Link>
                                </Button>
                                <Button
                                    size="sm"
                                    asChild
                                    className="w-full bg-primary-600 hover:bg-primary-700 text-white"
                                >
                                    <Link href="/signup">Get Started</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
