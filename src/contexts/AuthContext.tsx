'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { User, Profile } from '@/types';
import { account, databases, DATABASE_ID, COLLECTIONS } from '@/lib/appwrite';
import { identifyUser, resetUser } from '@/lib/posthog';
import { setUser as setSentryUser, clearUser as clearSentryUser } from '@/lib/sentry';
import { toast } from 'react-hot-toast';

interface AuthContextType {
    user: User | null;
    profile: Profile | null;
    isLoading: boolean;
    login: (email: string, password: string) => Promise<void>;
    loginWithMagicLink: (email: string) => Promise<void>;
    loginWithOAuth: (provider: 'github' | 'google') => Promise<void>;
    logout: () => Promise<void>;
    register: (email: string, password: string, name: string) => Promise<void>;
    updateProfile: (data: Partial<Profile>) => Promise<void>;
    refreshProfile: () => Promise<void>;
    refreshAuth: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [user, setUser] = useState<User | null>(null);
    const [profile, setProfile] = useState<Profile | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        checkAuth();
    }, []);

    const checkAuth = async () => {
        try {
            const currentUser = await account.get();
            setUser(currentUser);

            // Get user profile
            try {
                const profileData = await databases.getDocument(
                    DATABASE_ID,
                    COLLECTIONS.PROFILES,
                    currentUser.$id
                );
                setProfile(profileData as unknown as Profile);
            } catch (profileError) {
                console.error('Failed to fetch profile:', profileError);
                // Profile might not exist yet, create one
                await createDefaultProfile(currentUser);
            }

            // Track user in analytics
            identifyUser(currentUser.$id, {
                email: currentUser.email,
                name: currentUser.name,
            });

            // Set user in Sentry
            setSentryUser({
                id: currentUser.$id,
                email: currentUser.email,
                username: currentUser.name,
            });
        } catch (error) {
            // User not authenticated
            setUser(null);
            setProfile(null);
        } finally {
            setIsLoading(false);
        }
    };

    const createDefaultProfile = async (user: User) => {
        try {
            const profileData: Partial<Profile> = {
                userId: user.$id,
                slug: user.email.split('@')[0].toLowerCase().replace(/[^a-z0-9]/g, ''),
                name: user.name,
                bio: '',
                openToWork: false,
                showRevenue: false,
                contactLinks: [],
                theme: 'system',
                isPublic: true,
                analytics: {
                    totalViews: 0,
                    monthlyViews: 0,
                    weeklyViews: 0,
                    dailyViews: 0,
                    topReferrers: [],
                    clicksPerBlock: {},
                },
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
            };

            const newProfile = await databases.createDocument(
                DATABASE_ID,
                COLLECTIONS.PROFILES,
                user.$id,
                profileData
            );
            setProfile(newProfile as unknown as Profile);
        } catch (error) {
            console.error('Failed to create default profile:', error);
        }
    };

    const login = async (email: string, password: string) => {
        try {
            await account.createEmailPasswordSession(email, password);
            await checkAuth();
            toast.success('Successfully logged in!');
        } catch (error: any) {
            toast.error(error.message || 'Login failed');
            throw error;
        }
    };

    const loginWithMagicLink = async (email: string) => {
        try {
            // Use 'unique()' to let Appwrite generate a unique ID
            await account.createMagicURLToken(
                'unique()',
                email,
                `${window.location.origin}/auth/callback`
            );
            toast.success('Magic link sent to your email!');
        } catch (error: any) {
            toast.error(error.message || 'Failed to send magic link');
            throw error;
        }
    };

    const loginWithOAuth = async (provider: 'github' | 'google') => {
        try {
            const redirectUrl = `${window.location.origin}/auth/callback`;
            account.createOAuth2Session(provider as any, redirectUrl, redirectUrl);
        } catch (error: any) {
            toast.error(error.message || 'OAuth login failed');
            throw error;
        }
    };

    const logout = async () => {
        try {
            await account.deleteSession('current');
            setUser(null);
            setProfile(null);
            resetUser();
            clearSentryUser();
            toast.success('Successfully logged out!');
        } catch (error: any) {
            toast.error(error.message || 'Logout failed');
            throw error;
        }
    };

    const register = async (email: string, password: string, name: string) => {
        try {
            // Use Appwrite's built-in ID generation
            const newUser = await account.create('unique()', email, password, name);

            // Create user profile
            await createDefaultProfile(newUser);

            // Send verification email
            await account.createVerification(`${window.location.origin}/auth/verify`);

            toast.success('Account created successfully! Please verify your email.');
        } catch (error: any) {
            toast.error(error.message || 'Registration failed');
            throw error;
        }
    };

    const updateProfile = async (data: Partial<Profile>) => {
        if (!user || !profile) return;

        try {
            const updatedProfile = await databases.updateDocument(
                DATABASE_ID,
                COLLECTIONS.PROFILES,
                user.$id,
                {
                    ...data,
                    updatedAt: new Date().toISOString(),
                }
            );
            setProfile(updatedProfile as unknown as Profile);
            toast.success('Profile updated successfully!');
        } catch (error: any) {
            toast.error(error.message || 'Failed to update profile');
            throw error;
        }
    };

    const refreshProfile = async () => {
        if (!user) return;

        try {
            const profileData = await databases.getDocument(
                DATABASE_ID,
                COLLECTIONS.PROFILES,
                user.$id
            );
            setProfile(profileData as unknown as Profile);
        } catch (error: any) {
            console.error('Failed to refresh profile:', error);
        }
    };

    const refreshAuth = async () => {
        await checkAuth();
    };

    const value = {
        user,
        profile,
        isLoading,
        login,
        loginWithMagicLink,
        loginWithOAuth,
        logout,
        register,
        updateProfile,
        refreshProfile,
        refreshAuth,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
