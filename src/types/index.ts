// User and Authentication types
export interface User {
    $id: string;
    email: string;
    name: string;
    emailVerification: boolean;
    prefs: Record<string, any>;
    registration: string;
    status: boolean;
}

export interface Profile {
    $id: string;
    userId: string;
    slug: string;
    name: string;
    bio: string;
    avatar?: string;
    location?: string;
    currentRole?: string;
    openToWork: boolean;
    showRevenue: boolean;
    contactLinks: ContactLink[];
    theme: 'light' | 'dark' | 'system';
    isPublic: boolean;
    customDomain?: string;
    analytics: ProfileAnalytics;
    createdAt: string;
    updatedAt: string;
}

export interface ContactLink {
    id: string;
    type: 'email' | 'twitter' | 'linkedin' | 'github' | 'website' | 'phone';
    value: string;
    label: string;
    isVisible: boolean;
}

export interface ProfileAnalytics {
    totalViews: number;
    monthlyViews: number;
    weeklyViews: number;
    dailyViews: number;
    topReferrers: { source: string; count: number }[];
    clicksPerBlock: Record<string, number>;
}

// Block types
export type BlockType =
    | 'profile'
    | 'waitlist'
    | 'projects'
    | 'resume'
    | 'reviews'
    | 'discord'
    | 'donation'
    | 'ama'
    | 'claim-link';

export interface Block {
    $id: string;
    userId: string;
    type: BlockType;
    title: string;
    isVisible: boolean;
    order: number;
    config: BlockConfig;
    createdAt: string;
    updatedAt: string;
}

export type BlockConfig =
    | ProfileBlockConfig
    | WaitlistBlockConfig
    | ProjectsBlockConfig
    | ResumeBlockConfig
    | ReviewsBlockConfig
    | DiscordBlockConfig
    | DonationBlockConfig
    | AMABlockConfig
    | ClaimLinkBlockConfig;

export interface ProfileBlockConfig {
    showRevenue: boolean;
    showLocation: boolean;
    showCurrentRole: boolean;
    showOpenToWork: boolean;
    showContactLinks: boolean;
    revenueAmount?: number;
    revenueSource?: 'manual' | 'stripe';
}

export interface WaitlistBlockConfig {
    title: string;
    description: string;
    buttonText: string;
    successMessage: string;
    collectName: boolean;
    collectCompany: boolean;
    customFields: CustomField[];
}

export interface ProjectsBlockConfig {
    showRevenue: boolean;
    groupByCategory: boolean;
    showStatus: boolean;
    maxVisible: number;
}

export interface ResumeBlockConfig {
    title: string;
    description: string;
    buttonText: string;
    fileUrl: string;
    fileName: string;
}

export interface ReviewsBlockConfig {
    title: string;
    showRating: boolean;
    maxVisible: number;
    autoRotate: boolean;
    rotationInterval: number;
}

export interface DiscordBlockConfig {
    title: string;
    description: string;
    inviteUrl: string;
    buttonText: string;
    showMemberCount: boolean;
}

export interface DonationBlockConfig {
    title: string;
    description: string;
    platforms: DonationPlatform[];
}

export interface AMABlockConfig {
    title: string;
    description: string;
    buttonText: string;
    allowAnonymous: boolean;
    requireEmail: boolean;
    moderationEnabled: boolean;
}

export interface ClaimLinkBlockConfig {
    title: string;
    description: string;
    buttonText: string;
    referralCode: string;
}

// Supporting types
export interface CustomField {
    id: string;
    name: string;
    type: 'text' | 'email' | 'number' | 'select' | 'textarea';
    label: string;
    placeholder?: string;
    required: boolean;
    options?: string[];
}

export interface DonationPlatform {
    id: string;
    name: 'buymeacoffee' | 'kofi' | 'patreon' | 'paypal' | 'stripe';
    url: string;
    buttonText: string;
    isVisible: boolean;
}

// Project types
export interface Project {
    $id: string;
    userId: string;
    name: string;
    description: string;
    url: string;
    imageUrl?: string;
    category: string;
    status: 'active' | 'completed' | 'archived' | 'coming-soon';
    revenue?: number;
    revenueSource?: 'manual' | 'stripe';
    technologies: string[];
    isVisible: boolean;
    order: number;
    createdAt: string;
    updatedAt: string;
}

// Review types
export interface Review {
    $id: string;
    userId: string;
    authorName: string;
    authorRole: string;
    authorCompany?: string;
    authorImage?: string;
    content: string;
    rating?: number;
    isVisible: boolean;
    order: number;
    createdAt: string;
    updatedAt: string;
}

// Waitlist types
export interface WaitlistEntry {
    $id: string;
    userId: string;
    email: string;
    name?: string;
    company?: string;
    customData: Record<string, any>;
    referrer?: string;
    createdAt: string;
}

// AMA types
export interface AMAQuestion {
    $id: string;
    userId: string;
    question: string;
    askerName?: string;
    askerEmail?: string;
    isAnonymous: boolean;
    answer?: string;
    status: 'pending' | 'answered' | 'archived';
    isVisible: boolean;
    createdAt: string;
    updatedAt: string;
}

// Analytics types
export interface AnalyticsData {
    date: string;
    views: number;
    clicks: number;
    referrers: Record<string, number>;
    blockClicks: Record<string, number>;
    devices: Record<string, number>;
    countries: Record<string, number>;
}

export interface AnalyticsFilter {
    dateRange: {
        start: string;
        end: string;
    };
    groupBy: 'day' | 'week' | 'month';
    metrics: ('views' | 'clicks' | 'referrers' | 'devices' | 'countries')[];
}

// Form types
export interface FormError {
    field: string;
    message: string;
}

export interface FormState {
    isSubmitting: boolean;
    errors: FormError[];
    successMessage?: string;
}

// API response types
export interface ApiResponse<T = any> {
    data?: T;
    error?: string;
    message?: string;
    success: boolean;
}

// Theme types
export interface ThemeConfig {
    primaryColor: string;
    accentColor: string;
    backgroundColor: string;
    textColor: string;
    borderRadius: number;
    fontFamily: string;
    customCSS?: string;
}

// File upload types
export interface FileUpload {
    file: File;
    url?: string;
    uploadProgress: number;
    error?: string;
    isUploading: boolean;
}

// Notification types
export interface Notification {
    id: string;
    type: 'success' | 'error' | 'warning' | 'info';
    title: string;
    message: string;
    duration?: number;
    action?: {
        label: string;
        onClick: () => void;
    };
}

// Device mockup types
export interface DeviceMockup {
    type: 'iphone' | 'android' | 'desktop';
    width: number;
    height: number;
    scale: number;
}

// Export utilities
export interface ExportOptions {
    format: 'csv' | 'json' | 'xlsx';
    dateRange?: {
        start: string;
        end: string;
    };
    fields?: string[];
}

// SEO types
export interface SEOData {
    title: string;
    description: string;
    keywords: string[];
    ogImage?: string;
    ogTitle?: string;
    ogDescription?: string;
    twitterCard?: 'summary' | 'summary_large_image';
    twitterTitle?: string;
    twitterDescription?: string;
    twitterImage?: string;
    canonicalUrl?: string;
    noIndex?: boolean;
    noFollow?: boolean;
}
