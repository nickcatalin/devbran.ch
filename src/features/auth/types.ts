import { Models } from 'appwrite';

/**
 * User type extending Appwrite's User model
 */
export interface User extends Models.User<Models.Preferences> {
    // Add any additional user properties here
}

/**
 * Authentication state interface
 */
export interface AuthState {
    user: User | null;
    isLoading: boolean;
    isAuthenticated: boolean;
    error: string | null;
}

/**
 * Authentication context interface
 */
export interface AuthContextType extends AuthState {
    login: (email: string, redirectUrl?: string) => Promise<void>;
    loginWithOAuth: (provider: 'google' | 'github', redirectUrl?: string) => Promise<void>;
    logout: () => Promise<void>;
    clearError: () => void;
}

/**
 * Authentication provider props
 */
export interface AuthProviderProps {
    children: React.ReactNode;
}