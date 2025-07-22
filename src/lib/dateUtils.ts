/**
 * Date utility functions to ensure consistent formatting
 * between server and client rendering (prevents hydration errors)
 */

export const formatDate = (dateString: string): string => {
    // Always use en-US locale and specific options to ensure consistency
    return new Date(dateString).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: "UTC", // Use UTC to prevent timezone differences
    });
};

export const formatDateShort = (dateString: string): string => {
    return new Date(dateString).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
        timeZone: "UTC",
    });
}; 