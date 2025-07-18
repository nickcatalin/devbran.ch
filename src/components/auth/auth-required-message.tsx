'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { toast } from 'sonner';

/**
 * Component that displays a toast message when authentication is required
 * Uses URL search parameters to determine if the message should be shown
 */
export function AuthRequiredMessage() {
    const searchParams = useSearchParams();
    const authRequired = searchParams.get('authRequired');

    useEffect(() => {
        // Show a toast message if the authRequired parameter is present
        if (authRequired === 'true') {
            toast.error('Authentication required', {
                description: 'You need to be logged in to access that page.',
                duration: 5000,
            });
        }
    }, [authRequired]);

    // This component doesn't render anything visible
    return null;
}