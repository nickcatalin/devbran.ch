'use client';

import { cn } from '@/lib/utils';

interface LogoProps {
    className?: string;
    size?: 'sm' | 'md' | 'lg';
}

export function Logo({ className, size = 'md' }: LogoProps) {
    const sizeClasses = {
        sm: 'h-6',
        md: 'h-8',
        lg: 'h-12',
    };

    return (
        <div className={cn('flex items-center', className)}>
            <svg
                className={cn(sizeClasses[size], 'text-devbranch-primary')}
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
            >
                <path
                    d="M16 2C8.268 2 2 8.268 2 16C2 23.732 8.268 30 16 30C23.732 30 30 23.732 30 16C30 8.268 23.732 2 16 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M16 8V24"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M10 14L16 8L22 14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
            <span className={cn('ml-2 font-bold', {
                'text-lg': size === 'sm',
                'text-xl': size === 'md',
                'text-2xl': size === 'lg',
            })}>DevBran.ch</span>
        </div>
    );
}