'use client';

interface FormDividerProps {
    text: string;
}

/**
 * Form divider component with text
 * Creates a horizontal line with centered text
 */
export function FormDivider({ text }: FormDividerProps) {
    return (
        <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-card px-2 text-muted-foreground">
                    {text}
                </span>
            </div>
        </div>
    );
}