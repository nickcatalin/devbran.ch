'use client';

import { Toaster as SonnerToaster } from 'sonner';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function Toaster() {
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Prevent hydration mismatch
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <SonnerToaster
            position="top-right"
            toastOptions={{
                classNames: {
                    toast: 'group border-border bg-card text-card-foreground shadow-lg rounded-md p-4',
                    title: 'text-sm font-semibold',
                    description: 'text-xs text-muted-foreground',
                    actionButton: 'bg-devbranch-primary text-white px-2 py-1 rounded-md text-xs',
                    cancelButton: 'bg-muted text-muted-foreground px-2 py-1 rounded-md text-xs',
                    success: 'border-l-4 border-l-devbranch-accent-dark-green',
                    error: 'border-l-4 border-l-destructive',
                    warning: 'border-l-4 border-l-devbranch-accent-green',
                    info: 'border-l-4 border-l-devbranch-accent-pink',
                },
                duration: 5000,
            }}
            theme={resolvedTheme === 'dark' ? 'dark' : 'light'}
            closeButton
            richColors
        />
    );
}