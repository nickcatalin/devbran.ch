// Export all authentication-related functionality
export * from './auth-context';
export * from './auth-service';
export * from './auth-error';
export * from './types';

// Re-export hooks for convenience
export { useAuthRedirect } from '@/hooks/use-auth-redirect';
export { useAuthForm } from '@/hooks/use-auth-form';