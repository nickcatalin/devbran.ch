'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';
import { IconSun, IconMoon } from '@tabler/icons-react';
import { Button } from './button';

export function ThemeToggle() {
    const { setTheme, theme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    // Prevent hydration mismatch
    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            aria-label="Toggle theme"
        >
            {theme === 'light' ? (
                <IconMoon size={18} />
            ) : (
                <IconSun size={18} />
            )}
            <span className="sr-only">Toggle theme</span>
        </Button>
    );
}