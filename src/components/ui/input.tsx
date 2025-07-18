'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { Label } from './label';
import { cva, type VariantProps } from 'class-variance-authority';

const inputVariants = cva(
    'flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
    {
        variants: {
            variant: {
                default: '',
                error: 'border-destructive focus-visible:ring-destructive',
            },
        },
        defaultVariants: {
            variant: 'default',
        },
    }
);

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
    label?: string;
    error?: string;
    description?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, label, id, error, description, variant, ...props }, ref) => {
        const inputId = id || React.useId();
        const descriptionId = description ? `${inputId}-description` : undefined;
        const errorId = error ? `${inputId}-error` : undefined;

        return (
            <div className="w-full space-y-2">
                {label && (
                    <Label
                        htmlFor={inputId}
                        className="text-sm font-medium"
                    >
                        {label}
                    </Label>
                )}
                <input
                    type={type}
                    id={inputId}
                    className={cn(inputVariants({ variant: error ? 'error' : variant, className }))}
                    ref={ref}
                    aria-invalid={!!error}
                    aria-describedby={cn(descriptionId, errorId)}
                    {...props}
                />
                {description && !error && (
                    <p
                        id={descriptionId}
                        className="text-sm text-muted-foreground"
                    >
                        {description}
                    </p>
                )}
                {error && (
                    <p
                        id={errorId}
                        className="text-sm text-destructive"
                    >
                        {error}
                    </p>
                )}
            </div>
        );
    }
);
Input.displayName = 'Input';

export { Input };