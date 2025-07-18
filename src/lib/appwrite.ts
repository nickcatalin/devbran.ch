import { Account, Avatars, Client, Databases, Storage } from 'appwrite';

/**
 * Appwrite SDK client configuration
 * Initializes the Appwrite client with environment variables
 */
const client = new Client();

// Initialize the client with environment variables
client
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT || '')
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID || '');

// Export initialized services
export const account = new Account(client);
export const avatars = new Avatars(client);
export const databases = new Databases(client);
export const storage = new Storage(client);

// Re-export the client for direct access if needed
export { client };

/**
 * Utility function to check if the Appwrite client is properly configured
 * @returns boolean indicating if the client has required configuration
 */
export function isAppwriteConfigured(): boolean {
    return Boolean(
        process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT &&
        process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID
    );
}