'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { useTheme as useNextTheme } from 'next-themes';

type Theme = 'light' | 'dark' | 'system';

interface ThemeContextType {
    theme: Theme;
    setTheme: (theme: Theme) => void;
    isDark: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function DevBranchThemeProvider({ children }: { children: React.ReactNode }) {
    const { theme, setTheme, resolvedTheme } = useNextTheme();
    const [isDark, setIsDark] = useState(false);

    // Update isDark state based on the resolved theme
    useEffect(() => {
        setIsDark(resolvedTheme === 'dark');
    }, [resolvedTheme]);

    // Prevent theme flash during initial render
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);

    const value = {
        theme: (theme as Theme) || 'system',
        setTheme,
        isDark,
    };

    // Don't render anything until mounted to prevent hydration mismatch
    if (!mounted) {
        return <>{children}</>;
    }

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useDevBranchTheme() {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useDevBranchTheme must be used within a DevBranchThemeProvider');
    }
    return context;
}