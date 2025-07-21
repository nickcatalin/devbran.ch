"use client";

import { createContext, useContext, useEffect, useState, useRef } from "react";
import { Models, OAuthProvider, ID } from "appwrite";
import { account } from "@/lib/appwrite";

interface AuthContextType {
    user: Models.User<Models.Preferences> | null;
    loading: boolean;
    login: (email: string, password: string) => Promise<void>;
    register: (email: string, password: string, name: string) => Promise<void>;
    logout: () => Promise<void>;
    forgotPassword: (email: string) => Promise<void>;
    updatePassword: (password: string, oldPassword: string) => Promise<void>;
    loginWithGoogle: () => Promise<void>;
    loginWithGithub: () => Promise<void>;
    sendEmailVerification: () => Promise<void>;
    verifyEmail: (userId: string, secret: string) => Promise<void>;
    getCurrentSession: () => Promise<Models.Session | null>;
    refreshOAuthSession: (sessionId?: string) => Promise<void>;
    sendMagicURL: (email: string) => Promise<void>;
    loginWithMagicURL: (userId: string, secret: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};

interface AuthProviderProps {
    children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [user, setUser] = useState<Models.User<Models.Preferences> | null>(null);
    const [loading, setLoading] = useState(true);
    const [isLoggingOut, setIsLoggingOut] = useState(false);
    const isMountedRef = useRef(true);

    useEffect(() => {
        if (!isLoggingOut) {
            checkAuthState();
        }

        // Cleanup function to prevent state updates after unmount
        return () => {
            isMountedRef.current = false;
        };
    }, [isLoggingOut]);

    // Helper function to detect authentication errors
    const isAuthError = (error: any): boolean => {
        return error?.code === 401 ||
            error?.type === 'user_unauthorized' ||
            error?.type === 'general_unauthorized_scope' ||
            (error?.message && (
                error.message.includes('missing scope') ||
                error.message.includes('unauthorized') ||
                error.message.includes('User (role: guests)')
            ));
    };

    // Helper function to check if auth operations are safe to perform
    const canPerformAuthOperation = (): boolean => {
        return !isLoggingOut && !loading;
    };

    const checkAuthState = async () => {
        if (!isMountedRef.current || isLoggingOut) return;

        try {
            const currentUser = await account.get();
            if (isMountedRef.current && !isLoggingOut) {
                setUser(currentUser);
            }
        } catch (error: any) {
            if (!isMountedRef.current || isLoggingOut) return;

            // Check if it's an authentication error
            if (isAuthError(error)) {
                // User is not authenticated or session expired
                setUser(null);
            } else {
                // For other errors, log them but still set user to null
                console.warn("Auth state check failed:", error);
                setUser(null);
            }
        } finally {
            if (isMountedRef.current && !isLoggingOut) {
                setLoading(false);
            }
        }
    };

    const login = async (email: string, password: string) => {
        try {
            await account.createEmailPasswordSession(email, password);
            const currentUser = await account.get();
            setUser(currentUser);
        } catch (error: any) {
            console.error("Login error:", error);
            throw error;
        }
    };

    const register = async (email: string, password: string, name: string) => {
        try {
            await account.create("unique()", email, password, name);
            await account.createEmailPasswordSession(email, password);
            const currentUser = await account.get();
            setUser(currentUser);

            // Automatically send email verification after successful registration
            try {
                await account.createVerification(
                    `${window.location.origin}/verify-email`
                );
            } catch (verificationError) {
                // Don't fail registration if verification email fails
                console.warn("Failed to send verification email:", verificationError);
            }
        } catch (error: any) {
            console.error("Registration error:", error);
            throw error;
        }
    };

    const logout = async () => {
        setIsLoggingOut(true);
        try {
            // Clear user state immediately to prevent other calls
            setUser(null);
            await account.deleteSession("current");
        } catch (error: any) {
            // Even if logout fails, ensure user state is cleared
            console.warn("Logout error:", error);
            setUser(null);
        } finally {
            // Keep isLoggingOut true for a short time to prevent race conditions
            setTimeout(() => setIsLoggingOut(false), 100);
        }
    };

    const forgotPassword = async (email: string) => {
        try {
            await account.createRecovery(
                email,
                `${window.location.origin}/reset-password`
            );
        } catch (error: any) {
            console.error("Password recovery error:", error);
            throw error;
        }
    };

    const updatePassword = async (password: string, oldPassword: string) => {
        try {
            await account.updatePassword(password, oldPassword);
        } catch (error: any) {
            console.error("Password update error:", error);
            throw error;
        }
    };

    const loginWithGoogle = async () => {
        try {
            await account.createOAuth2Session(
                OAuthProvider.Google,
                `${window.location.origin}/dashboard`,
                `${window.location.origin}/login?error=oauth_error`,
                ['openid', 'profile', 'email'] // Request standard Google scopes
            );
        } catch (error: any) {
            console.error("Google OAuth error:", error);
            throw error;
        }
    };

    const loginWithGithub = async () => {
        try {
            await account.createOAuth2Session(
                OAuthProvider.Github,
                `${window.location.origin}/dashboard`,
                `${window.location.origin}/login?error=oauth_error`,
                ['user:email'] // Request GitHub user email scope
            );
        } catch (error: any) {
            console.error("GitHub OAuth error:", error);
            throw error;
        }
    };

    const sendEmailVerification = async () => {
        // Don't attempt verification if no user is authenticated
        if (!user) {
            throw new Error("User must be authenticated to send verification email");
        }

        try {
            await account.createVerification(
                `${window.location.origin}/verify-email`
            );
        } catch (error: any) {
            console.error("Email verification error:", error);
            throw error;
        }
    };

    const verifyEmail = async (userId: string, secret: string) => {
        try {
            await account.updateVerification(userId, secret);
            // Refresh user data to get updated verification status
            const currentUser = await account.get();
            setUser(currentUser);
        } catch (error: any) {
            console.error("Email verification completion error:", error);
            throw error;
        }
    };

    const sendMagicURL = async (email: string) => {
        try {
            await account.createMagicURLToken(
                ID.unique(),
                email,
                `${window.location.origin}/magic-login` // Redirect URL after clicking magic link
            );
        } catch (error: any) {
            console.error("Magic URL creation error:", error);
            throw error;
        }
    };

    const loginWithMagicURL = async (userId: string, secret: string) => {
        try {
            await account.createSession(userId, secret);
            const currentUser = await account.get();
            setUser(currentUser);
        } catch (error: any) {
            console.error("Magic URL login error:", error);
            throw error;
        }
    };

    const getCurrentSession = async (): Promise<Models.Session | null> => {
        // Don't attempt to get session if we're in an unsafe state
        if (!canPerformAuthOperation() || !user || !isMountedRef.current) {
            return null;
        }

        try {
            const session = await account.getSession('current');
            return session;
        } catch (error: any) {
            // Handle authentication errors gracefully
            if (isAuthError(error)) {
                return null;
            }
            console.warn("Failed to get current session:", error);
            return null;
        }
    };

    const refreshOAuthSession = async (sessionId: string = 'current') => {
        // Don't attempt to refresh if we're in an unsafe state or no user
        if (!canPerformAuthOperation() || !user || !isMountedRef.current) {
            return;
        }

        try {
            await account.updateSession(sessionId);
            // Optionally refresh user data after session update
            if (isMountedRef.current && !isLoggingOut) {
                const currentUser = await account.get();
                setUser(currentUser);
            }
        } catch (error: any) {
            if (!isMountedRef.current || isLoggingOut) return;

            // Handle auth errors gracefully
            if (isAuthError(error)) {
                console.warn("OAuth session refresh failed - user not authenticated");
                setUser(null);
                return;
            }
            console.error("Failed to refresh OAuth session:", error);
            throw error;
        }
    };

    const value: AuthContextType = {
        user,
        loading,
        login,
        register,
        logout,
        forgotPassword,
        updatePassword,
        loginWithGoogle,
        loginWithGithub,
        sendEmailVerification,
        verifyEmail,
        getCurrentSession,
        refreshOAuthSession,
        sendMagicURL,
        loginWithMagicURL,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
