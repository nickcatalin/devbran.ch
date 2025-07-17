import { Client, Account, Databases, Storage, Functions, Teams, Locale } from 'appwrite';

// Initialize Appwrite client
const client = new Client();

client
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT || '')
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID || '');

// Initialize Appwrite services
export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const functions = new Functions(client);
export const teams = new Teams(client);
export const locale = new Locale(client);

// Database and collection IDs
export const DATABASE_ID = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID || '';
export const COLLECTIONS = {
    USERS: process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_USERS || '',
    PROFILES: process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_PROFILES || '',
    BLOCKS: process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_BLOCKS || '',
    PROJECTS: process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_PROJECTS || '',
    REVIEWS: process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_REVIEWS || '',
    WAITLIST: process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_WAITLIST || '',
    AMA_QUESTIONS: process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_AMA_QUESTIONS || '',
    ANALYTICS: process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ANALYTICS || '',
};

// Storage bucket IDs
export const BUCKETS = {
    PROFILES: process.env.NEXT_PUBLIC_APPWRITE_BUCKET_PROFILES || '',
    RESUMES: process.env.NEXT_PUBLIC_APPWRITE_BUCKET_RESUMES || '',
    PROJECTS: process.env.NEXT_PUBLIC_APPWRITE_BUCKET_PROJECTS || '',
};

// Function IDs
export const FUNCTIONS_IDS = {
    SEND_EMAIL: process.env.NEXT_PUBLIC_APPWRITE_FUNCTION_SEND_EMAIL || '',
    EXPORT_CSV: process.env.NEXT_PUBLIC_APPWRITE_FUNCTION_EXPORT_CSV || '',
    STRIPE_SYNC: process.env.NEXT_PUBLIC_APPWRITE_FUNCTION_STRIPE_SYNC || '',
    ANALYTICS_SYNC: process.env.NEXT_PUBLIC_APPWRITE_FUNCTION_ANALYTICS_SYNC || '',
};

export default client;
