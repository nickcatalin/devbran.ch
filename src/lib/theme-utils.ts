import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines multiple class names using clsx and tailwind-merge
 * @param inputs Class names to combine
 * @returns Combined class name string
 */
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

/**
 * DevBran.ch brand colors
 */
export const brandColors = {
    primary: '#565264',
    accentPink: '#E8C7DE',
    accentGreen: '#E7EBC5',
    accentDarkGreen: '#56876D',
    text: '#0C0C0C',
};

/**
 * Get color with proper contrast for accessibility
 * @param bgColor Background color to check against
 * @param lightColor Color to use on dark backgrounds
 * @param darkColor Color to use on light backgrounds
 * @returns Color with proper contrast
 */
export function getContrastColor(
    bgColor: string = brandColors.primary,
    lightColor: string = '#FFFFFF',
    darkColor: string = brandColors.text
): string {
    // Simple contrast check - could be enhanced with proper luminance calculation
    const isLight = ['#E8C7DE', '#E7EBC5', '#FFFFFF'].includes(bgColor);
    return isLight ? darkColor : lightColor;
}

/**
 * Theme variants for components
 */
export const themeVariants = {
    primary: 'bg-devbranch-primary text-white hover:bg-devbranch-primary/90',
    secondary: 'bg-devbranch-accent-green text-devbranch-text hover:bg-devbranch-accent-green/90',
    accent: 'bg-devbranch-accent-pink text-devbranch-text hover:bg-devbranch-accent-pink/90',
    outline: 'border border-devbranch-primary bg-transparent hover:bg-devbranch-primary/10',
    ghost: 'hover:bg-devbranch-accent-green/20 hover:text-devbranch-primary',
};