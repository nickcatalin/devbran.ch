import { render, screen } from '@testing-library/react';
import { FormDivider } from '../form-divider';

describe('FormDivider', () => {
    it('renders with the provided text', () => {
        const dividerText = 'Test Divider Text';
        render(<FormDivider text={dividerText} />);

        expect(screen.getByText(dividerText)).toBeInTheDocument();
    });

    it('renders with the correct styling', () => {
        render(<FormDivider text="Test" />);

        // Check for the divider line
        const divider = screen.getByText('Test').parentElement?.parentElement;
        expect(divider).toHaveClass('relative');

        // Check for the text container
        const textContainer = screen.getByText('Test').parentElement;
        expect(textContainer).toHaveClass('relative flex justify-center text-xs uppercase');

        // Check for the text styling
        const text = screen.getByText('Test');
        expect(text).toHaveClass('bg-card px-2 text-muted-foreground');
    });
});