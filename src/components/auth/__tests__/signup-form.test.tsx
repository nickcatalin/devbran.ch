import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { SignupForm } from '../signup-form';
import { useAuth } from '@/features/auth/auth-context';
import { toast } from '@/components/ui/toast';
import { useAnalytics } from '@/lib/posthog';

// Mock dependencies
jest.mock('@/features/auth/auth-context');
jest.mock('@/components/ui/toast');
jest.mock('@/lib/posthog');

describe('SignupForm', () => {
    // Setup mocks
    const mockLogin = jest.fn();
    const mockLoginWithOAuth = jest.fn();
    const mockClearError = jest.fn();
    const mockTrackEvent = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();

        // Mock auth context
        (useAuth as jest.Mock).mockReturnValue({
            login: mockLogin,
            loginWithOAuth: mockLoginWithOAuth,
            isLoading: false,
            error: null,
            clearError: mockClearError,
        });

        // Mock analytics
        (useAnalytics as jest.Mock).mockReturnValue({
            trackEvent: mockTrackEvent,
        });
    });

    it('renders the signup form correctly', () => {
        render(<SignupForm />);

        // Check if form elements are rendered
        expect(screen.getByText('Create an Account')).toBeInTheDocument();
        expect(screen.getByLabelText('Email')).toBeInTheDocument();
        expect(screen.getByText('Create Account')).toBeInTheDocument();
        expect(screen.getByText('GitHub')).toBeInTheDocument();
        expect(screen.getByText('Google')).toBeInTheDocument();
    });

    it('submits the form with valid email', async () => {
        render(<SignupForm />);

        // Fill in the email field
        const emailInput = screen.getByLabelText('Email');
        fireEvent.change(emailInput, { target: { value: 'test@example.com' } });

        // Submit the form
        const submitButton = screen.getByText('Create Account');
        fireEvent.click(submitButton);

        // Check if login function was called with correct email
        await waitFor(() => {
            expect(mockLogin).toHaveBeenCalledWith('test@example.com', undefined);
            expect(mockTrackEvent).toHaveBeenCalledWith('auth_signup_requested', { success: true });
            expect(toast.success).toHaveBeenCalledWith('Magic link sent!', expect.any(Object));
        });
    });

    it('shows validation error for invalid email', async () => {
        render(<SignupForm />);

        // Fill in invalid email
        const emailInput = screen.getByLabelText('Email');
        fireEvent.change(emailInput, { target: { value: 'invalid-email' } });

        // Submit the form
        const submitButton = screen.getByText('Create Account');
        fireEvent.click(submitButton);

        // Check if validation error is shown
        await waitFor(() => {
            expect(screen.getByText('Please enter a valid email address')).toBeInTheDocument();
            expect(mockLogin).not.toHaveBeenCalled();
        });
    });

    it('handles OAuth signup with GitHub', async () => {
        render(<SignupForm />);

        // Click GitHub button
        const githubButton = screen.getByText('GitHub');
        fireEvent.click(githubButton);

        // Check if loginWithOAuth was called with 'github'
        await waitFor(() => {
            expect(mockLoginWithOAuth).toHaveBeenCalledWith('github', undefined);
            expect(mockTrackEvent).toHaveBeenCalledWith('auth_oauth_signup_initiated', { provider: 'github' });
        });
    });

    it('handles OAuth signup with Google', async () => {
        render(<SignupForm />);

        // Click Google button
        const googleButton = screen.getByText('Google');
        fireEvent.click(googleButton);

        // Check if loginWithOAuth was called with 'google'
        await waitFor(() => {
            expect(mockLoginWithOAuth).toHaveBeenCalledWith('google', undefined);
            expect(mockTrackEvent).toHaveBeenCalledWith('auth_oauth_signup_initiated', { provider: 'google' });
        });
    });

    it('shows success state after sending magic link', async () => {
        render(<SignupForm />);

        // Fill in the email field
        const emailInput = screen.getByLabelText('Email');
        fireEvent.change(emailInput, { target: { value: 'test@example.com' } });

        // Submit the form
        const submitButton = screen.getByText('Create Account');
        fireEvent.click(submitButton);

        // Check if success state is shown
        await waitFor(() => {
            expect(screen.getByText('Magic link sent! Check your email to complete your signup.')).toBeInTheDocument();
            expect(screen.getByText('Use a different email')).toBeInTheDocument();
        });
    });

    it('handles signup errors correctly', async () => {
        // Mock login to throw an error
        mockLogin.mockRejectedValueOnce(new Error('Signup failed'));

        render(<SignupForm />);

        // Fill in the email field
        const emailInput = screen.getByLabelText('Email');
        fireEvent.change(emailInput, { target: { value: 'test@example.com' } });

        // Submit the form
        const submitButton = screen.getByText('Create Account');
        fireEvent.click(submitButton);

        // Check if error toast was shown
        await waitFor(() => {
            expect(toast.error).toHaveBeenCalledWith('Signup failed', expect.any(Object));
            expect(mockTrackEvent).toHaveBeenCalledWith('auth_signup_failed', expect.any(Object));
        });
    });
});