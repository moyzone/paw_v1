
// Placeholder URL - will be replaced by user input
export const GOOGLE_SHEETS_WEB_APP_URL = "PLACEHOLDER_URL";

/**
 * Submits form data to the Google Apps Script Web App
 * @param data - The form data object (must contain a 'type' field: 'waitlist' or 'contact')
 * @returns Promise resolving to the response
 */
export async function submitToGoogleSheets(data: Record<string, string>) {
    if (GOOGLE_SHEETS_WEB_APP_URL === "PLACEHOLDER_URL") {
        console.warn("Google Sheets URL not configured");
        return { result: "success", simulated: true };
    }

    try {
        const response = await fetch(GOOGLE_SHEETS_WEB_APP_URL, {
            method: "POST",
            body: JSON.stringify(data),
            // 'no-cors' mode is required for Google Apps Script, 
            // but it means we can't read the response body directly.
            // We assume success if no network error occurs.
            mode: "no-cors",
            headers: {
                "Content-Type": "application/json",
            },
        });

        // In 'no-cors' mode, we won't get a JSON response back to parse.
        // We just return a success signal.
        return { result: "success" };

    } catch (error) {
        console.error("Error submitting to Google Sheets:", error);
        return { result: "error", error };
    }
}
