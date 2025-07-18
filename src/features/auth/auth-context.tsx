'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { authService } from './auth-service';
import { AuthContextType, AuthProviderProps, AuthState, User } from './types';
import { posthog } from '@/lib/posthog';

// Create the authentication context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Initial authentication state
const initialState: AuthState = {
    user: null,
    isLoading: true,
    isAuthenticated: false,
    error: null,
};

/**
 * Authentication provider component
 * Manages authentication state and provides auth methods to children
 */
export function AuthProvider({ children }: AuthProviderProps) {
    const [state, setState] = useState<AuthState>(initialState);
    const router = useRouter();

    // Load user on mount
    useEffect(() => {
        const loadUser = async () => {
            try {
                setState((prev) => ({ ...prev, isLoading: true }));
                const user = await authService.getCurrentUser();

                if (user) {
                    // User is authenticated
                    setState({
                        user: user as User,
                        isLoading: false,
                        isAuthenticated: true,
                        error: null,
                    });

                    // Identify user in analytics
                    posthog.identify(user.$id, {
                        email: user.email,
                        name: user.name,
                    });
                } else {
                    // No authenticated user
                    setState({
                        user: null,
                        isLoading: false,
                        isAuthenticated: false,
                        error: null,
                    });
                }
            } catch (error) {
                console.error('Failed to load user:', error);
                setState({
                    user: null,
                    isLoading: false,
                    isAuthenticated: false,
                    error: (error as Error).message,
                });
            }
        };

        loadUser();
    }, []);

    /**
     * Login with magic link
     * @param email User's email address
     * @param redirectUrl Optional redirect URL after successful login
     */
    const login = async (email: string, redirectUrl?: string) => {
        try {
            setState((prev) => ({ ...prev, isLoading: true, error: null }));
            await authService.createMagicLinkSession(email, redirectUrl);

            // We don't update the state here as the user will be redirected
            // to complete the magic link flow
            setState((prev) => ({
                ...prev,
                isLoading: false,
                error: null
            }));

            return;
        } catch (error) {
            setState((prev) => ({
                ...prev,
                isLoading: false,
                error: (error as Error).message,
            }));
            throw error;
        }
    };

    /**
     * Login with OAuth provider
     * @param provider OAuth provider ('google' or 'github')
     * @param redirectUrl Optional redirect URL after successful login
     */
    const loginWithOAuth = async (provider: 'google' | 'github', redirectUrl?: string) => {
        try {
            setState((prev) => ({ ...prev, isLoading: true, error: null }));
            await authService.createOAuthSession(provider, redirectUrl);

            // We don't update the state here as the user will be redirected
            // to the OAuth provider's login page
            return;
        } catch (error) {
            setState((prev) => ({
                ...prev,
                isLoading: false,
                error: (error as Error).message,
            }));
            throw error;
        }
    };

    /**
     * Logout the current user
     */
    const logout = async () => {
        try {
            setState((prev) => ({ ...prev, isLoading: true }));
            await authService.logout();

            setState({
                user: null,
                isLoading: false,
                isAuthenticated: false,
                error: null,
            });

            // Reset analytics identity
            posthog.reset();

            // Redirect to home page after logout
            router.push('/');
        } catch (error) {
            setState((prev) => ({
                ...prev,
                isLoading: false,
                error: (error as Error).message,
            }));
        }
    };

    /**
     * Clear any authentication errors
     */
    const clearError = () => {
        setState((prev) => ({ ...prev, error: null }));
    };

    // Combine state and methods to create the context value
    const contextValue: AuthContextType = {
        ...state,
        login,
        loginWithOAuth,
        logout,
        clearError,
    };

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
}

/**
 * Custom hook to use the authentication context
 * @returns Authentication context value
 * @throws Error if used outside of an AuthProvider
 */
export function useAuth(): AuthContextType {
    const context = useContext(AuthContext);

    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }

    return context;
}