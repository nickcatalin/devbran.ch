'use client';

import { useTheme } from 'next-themes';
import { ThemeSwitcher } from '../theme-switcher';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

interface ThemeDemoProps {
    className?: string;
}

export function ThemeDemo({ className }: ThemeDemoProps) {
    const { theme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Prevent hydration mismatch
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className={cn('space-y-6 p-6 rounded-lg border', className)} />;
    }

    const isDark = resolvedTheme === 'dark';

    return (
        <div className={cn('space-y-6 p-6 rounded-lg border', className)}>
            <div className="space-y-2">
                <h2 className="text-2xl font-bold">DevBran.ch Theme System</h2>
                <p className="text-muted-foreground">
                    Current theme: <span className="font-medium">{theme}</span>
                    {theme === 'system' && (
                        <span className="ml-1">
                            (resolved to <span className="font-medium">{isDark ? 'dark' : 'light'}</span>)
                        </span>
                    )}
                </p>
            </div>

            <div className="grid gap-4">
                <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
                    <div className="flex h-20 items-center justify-center rounded-md bg-devbranch-primary p-2 text-white">
                        Primary
                    </div>
                    <div className="flex h-20 items-center justify-center rounded-md bg-devbranch-accent-pink p-2 text-devbranch-text">
                        Accent Pink
                    </div>
                    <div className="flex h-20 items-center justify-center rounded-md bg-devbranch-accent-green p-2 text-devbranch-text">
                        Accent Green
                    </div>
                    <div className="flex h-20 items-center justify-center rounded-md bg-devbranch-accent-dark-green p-2 text-white">
                        Dark Green
                    </div>
                    <div className="flex h-20 items-center justify-center rounded-md bg-white border p-2 text-devbranch-text dark:bg-devbranch-text dark:text-white">
                        Text
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
                <div className="flex-1 space-y-2">
                    <h3 className="font-medium">Theme Switcher</h3>
                    <ThemeSwitcher />
                </div>

                <div className="flex-1 space-y-2">
                    <h3 className="font-medium">Button Examples</h3>
                    <div className="flex flex-wrap gap-2">
                        <button className="rounded-md bg-devbranch-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-devbranch-primary/90">
                            Primary
                        </button>
                        <button className="rounded-md bg-devbranch-accent-pink px-4 py-2 text-sm font-medium text-devbranch-text transition-colors hover:bg-devbranch-accent-pink/90">
                            Accent
                        </button>
                        <button className="rounded-md bg-devbranch-accent-green px-4 py-2 text-sm font-medium text-devbranch-text transition-colors hover:bg-devbranch-accent-green/90">
                            Secondary
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}