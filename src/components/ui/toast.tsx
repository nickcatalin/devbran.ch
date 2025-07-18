'use client';

import { toast as sonnerToast } from 'sonner';

type ToastVariant = 'default' | 'success' | 'error' | 'warning' | 'info';

interface ToastOptions {
    description?: string;
    action?: {
        label: string;
        onClick: () => void;
    };
    duration?: number;
    variant?: ToastVariant;
    position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'top-center' | 'bottom-center';
}

// Custom toast function with DevBran.ch styling
const toast = {
    // Default toast
    default: (title: string, options?: Omit<ToastOptions, 'variant'>) => {
        return sonnerToast(title, {
            ...options,
            className: 'devbranch-toast',
        });
    },

    // Success toast
    success: (title: string, options?: Omit<ToastOptions, 'variant'>) => {
        return sonnerToast.success(title, {
            ...options,
            className: 'devbranch-toast-success',
        });
    },

    // Error toast
    error: (title: string, options?: Omit<ToastOptions, 'variant'>) => {
        return sonnerToast.error(title, {
            ...options,
            className: 'devbranch-toast-error',
        });
    },

    // Warning toast
    warning: (title: string, options?: Omit<ToastOptions, 'variant'>) => {
        return sonnerToast.warning(title, {
            ...options,
            className: 'devbranch-toast-warning',
        });
    },

    // Info toast
    info: (title: string, options?: Omit<ToastOptions, 'variant'>) => {
        return sonnerToast.info(title, {
            ...options,
            className: 'devbranch-toast-info',
        });
    },

    // Promise toast
    promise: <T,>(
        promise: Promise<T>,
        {
            loading,
            success,
            error,
        }: {
            loading: string;
            success: string | ((data: T) => string);
            error: string | ((error: unknown) => string);
        },
        options?: Omit<ToastOptions, 'variant'>
    ) => {
        return sonnerToast.promise(promise, {
            loading,
            success,
            error,
            ...options,
            className: 'devbranch-toast-promise',
        });
    },

    // Custom toast with variant
    custom: (title: string, options: ToastOptions) => {
        const { variant = 'default', ...rest } = options;

        switch (variant) {
            case 'success':
                return toast.success(title, rest);
            case 'error':
                return toast.error(title, rest);
            case 'warning':
                return toast.warning(title, rest);
            case 'info':
                return toast.info(title, rest);
            default:
                return toast.default(title, rest);
        }
    },

    // Dismiss all toasts
    dismiss: sonnerToast.dismiss,

    // Dismiss a specific toast by ID
    dismissById: sonnerToast.dismiss,
};

export { toast };