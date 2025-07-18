'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const loadingVariants = cva(
    'animate-spin rounded-full border-current border-t-transparent',
    {
        variants: {
            size: {
                default: 'h-6 w-6 border-2',
                sm: 'h-4 w-4 border-2',
                lg: 'h-8 w-8 border-3',
                xl: 'h-12 w-12 border-4',
            },
            variant: {
                default: 'text-devbranch-primary',
                primary: 'text-devbranch-primary',
                secondary: 'text-devbranch-accent-green',
                accent: 'text-devbranch-accent-pink',
                green: 'text-devbranch-accent-dark-green',
                white: 'text-white',
            },
        },
        defaultVariants: {
            size: 'default',
            variant: 'default',
        },
    }
);

export interface LoadingProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof loadingVariants> {
    label?: string;
}

const Loading = React.forwardRef<HTMLDivElement, LoadingProps>(
    ({ className, size, variant, label, ...props }, ref) => {
        const id = React.useId();
        const labelId = label ? `${id}-label` : undefined;

        return (
            <div
                ref={ref}
                className={cn('flex flex-col items-center justify-center gap-2', className)}
                role="status"
                aria-labelledby={labelId}
                {...props}
            >
                <div className={cn(loadingVariants({ size, variant }))} />
                {label && (
                    <p
                        id={labelId}
                        className="text-sm font-medium"
                    >
                        {label}
                    </p>
                )}
                <span className="sr-only">Loading</span>
            </div>
        );
    }
);
Loading.displayName = 'Loading';

export { Loading };