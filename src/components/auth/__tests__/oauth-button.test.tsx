import { render, screen, fireEvent } from '@testing-library/react';
import { OAuthButton } from '../oauth-button';

describe('OAuthButton', () => {
    const mockOnClick = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('renders GitHub button correctly', () => {
        render(<OAuthButton provider="github" onClick={mockOnClick} />);

        const button = screen.getByRole('button', { name: /sign in with github/i });
        expect(button).toBeInTheDocument();
        expect(screen.getByText('GitHub')).toBeInTheDocument();
    });

    it('renders Google button correctly', () => {
        render(<OAuthButton provider="google" onClick={mockOnClick} />);

        const button = screen.getByRole('button', { name: /sign in with google/i });
        expect(button).toBeInTheDocument();
        expect(screen.getByText('Google')).toBeInTheDocument();
    });

    it('calls onClick handler when clicked', async () => {
        render(<OAuthButton provider="github" onClick={mockOnClick} />);

        const button = screen.getByRole('button', { name: /sign in with github/i });
        fireEvent.click(button);

        expect(mockOnClick).toHaveBeenCalledTimes(1);
    });

    it('disables the button when disabled prop is true', () => {
        render(<OAuthButton provider="github" onClick={mockOnClick} disabled={true} />);

        const button = screen.getByRole('button', { name: /sign in with github/i });
        expect(button).toBeDisabled();

        fireEvent.click(button);
        expect(mockOnClick).not.toHaveBeenCalled();
    });

    it('applies custom className when provided', () => {
        const customClass = 'custom-class';
        render(<OAuthButton provider="github" onClick={mockOnClick} className={customClass} />);

        const button = screen.getByRole('button', { name: /sign in with github/i });
        expect(button).toHaveClass(customClass);
    });
});