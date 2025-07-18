/**
 * Utility function to retry an async operation with exponential backoff
 * @param operation The async operation to retry
 * @param maxRetries Maximum number of retry attempts
 * @param baseDelay Base delay in milliseconds between retries
 * @param shouldRetry Function to determine if a retry should be attempted based on the error
 * @returns Promise resolving to the operation result
 */
export async function retryWithBackoff<T>(
    operation: () => Promise<T>,
    maxRetries: number = 3,
    baseDelay: number = 1000,
    shouldRetry: (error: unknown) => boolean = () => true
): Promise<T> {
    let lastError: unknown;

    for (let attempt = 0; attempt <= maxRetries; attempt++) {
        try {
            return await operation();
        } catch (error) {
            lastError = error;

            // Check if we should retry based on the error
            if (attempt >= maxRetries || !shouldRetry(error)) {
                throw error;
            }

            // Calculate delay with exponential backoff
            const delay = baseDelay * Math.pow(2, attempt);

            // Add some randomness to prevent all clients retrying at the same time
            const jitter = Math.random() * 200;

            // Wait before next retry
            await new Promise(resolve => setTimeout(resolve, delay + jitter));
        }
    }

    // This should never be reached due to the throw in the loop
    throw lastError;
}