"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/contexts/auth-context";
import { Models } from "appwrite";

export const useOAuthSession = () => {
    const { getCurrentSession, user, loading: authLoading } = useAuth();
    const [session, setSession] = useState<Models.Session | null>(null);
    const [loading, setLoading] = useState(true);
    const [isOAuthProvider, setIsOAuthProvider] = useState(false);

    useEffect(() => {
        // Only fetch session if user is authenticated
        if (!authLoading && user) {
            const fetchSession = async () => {
                try {
                    const currentSession = await getCurrentSession();
                    setSession(currentSession);

                    // Check if this is an OAuth session
                    if (currentSession?.provider) {
                        setIsOAuthProvider(true);
                    } else {
                        setIsOAuthProvider(false);
                    }
                } catch (error) {
                    console.warn("Failed to fetch session:", error);
                    setSession(null);
                    setIsOAuthProvider(false);
                } finally {
                    setLoading(false);
                }
            };

            fetchSession();
        } else if (!authLoading && !user) {
            // Clear session data when user is not authenticated
            setSession(null);
            setIsOAuthProvider(false);
            setLoading(false);
        }
    }, [user, authLoading]); // Remove getCurrentSession from dependencies

    const getProviderDisplayName = (provider: string) => {
        const providers: Record<string, string> = {
            'google': 'Google',
            'github': 'GitHub',
            'facebook': 'Facebook',
            'apple': 'Apple',
            'microsoft': 'Microsoft',
            'discord': 'Discord',
            'spotify': 'Spotify',
            'twitter': 'Twitter',
        };
        return providers[provider.toLowerCase()] || provider;
    };

    const isTokenExpiringSoon = (expiryDate?: string) => {
        if (!expiryDate) return false;

        const expiry = new Date(expiryDate).getTime();
        const now = new Date().getTime();
        const oneHour = 60 * 60 * 1000;

        return (expiry - now) < oneHour;
    };

    return {
        session,
        loading,
        isOAuthProvider,
        providerName: session?.provider ? getProviderDisplayName(session.provider) : null,
        providerUid: session?.providerUid,
        accessToken: session?.providerAccessToken,
        tokenExpiry: session?.providerAccessTokenExpiry,
        isTokenExpiringSoon: isTokenExpiringSoon(session?.providerAccessTokenExpiry),
    };
};
