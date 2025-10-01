// src/utils/error.ts
/**
 * Extract a human-readable error message from any thrown value.
 * Works for Error objects, strings, unknown API responses, etc.
 */
export function getErrorMessage(err: unknown, fallback = "Something went wrong"): string {
  if (!err) return fallback;

  // If it's a JS Error object
  if (err instanceof Error) return err.message;

  // If it's a string
  if (typeof err === "string") return err;

  // If it's an object (like Axios or fetch errors)
  if (typeof err === "object" && err !== null) {
    // Check for common API error patterns
    if ("message" in err && typeof (err as any).message === "string") {
      return (err as any).message;
    }
    if ("error" in err && typeof (err as any).error === "string") {
      return (err as any).error;
    }
  }

  // Fallback
  return fallback;
}
