'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { IconSun, IconMoon, IconDeviceDesktop } from '@tabler/icons-react';
import { cn } from '@/lib/utils';

interface ThemeSwitcherProps {
    className?: string;
}

export function ThemeSwitcher({ className }: ThemeSwitcherProps) {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Prevent hydration mismatch by only rendering after mount
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <div className={cn('flex items-center gap-2 rounded-lg border p-1', className)}>
            <button
                onClick={() => setTheme('light')}
                className={cn(
                    'inline-flex items-center justify-center rounded-md p-2 text-sm font-medium transition-colors hover:bg-devbranch-accent-green',
                    theme === 'light' ? 'bg-devbranch-accent-green text-devbranch-primary' : 'text-foreground'
                )}
                aria-label="Light mode"
            >
                <IconSun size={18} />
                <span className="sr-only">Light</span>
            </button>

            <button
                onClick={() => setTheme('dark')}
                className={cn(
                    'inline-flex items-center justify-center rounded-md p-2 text-sm font-medium transition-colors hover:bg-devbranch-primary',
                    theme === 'dark' ? 'bg-devbranch-primary text-devbranch-accent-pink' : 'text-foreground'
                )}
                aria-label="Dark mode"
            >
                <IconMoon size={18} />
                <span className="sr-only">Dark</span>
            </button>

            <button
                onClick={() => setTheme('system')}
                className={cn(
                    'inline-flex items-center justify-center rounded-md p-2 text-sm font-medium transition-colors hover:bg-devbranch-accent-dark-green',
                    theme === 'system' ? 'bg-devbranch-accent-dark-green text-white' : 'text-foreground'
                )}
                aria-label="System preference"
            >
                <IconDeviceDesktop size={18} />
                <span className="sr-only">System</span>
            </button>
        </div>
    );
}