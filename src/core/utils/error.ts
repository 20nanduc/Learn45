// src/utils/error.ts
/**
 * Extract a human-readable error message from any thrown value.
 * Works for Error objects, strings, unknown API responses, etc.
 */
export function getErrorMessage(err: unknown, fallback = "Something went wrong"): string {
  if (!err) return fallback;

  // Case 1: Native JS Error
  if (err instanceof Error) {
    return err.message || fallback;
  }

  // Case 2: Plain string
  if (typeof err === "string") {
    return err;
  }

  // Case 3: Object with message or error key
  if (typeof err === "object" && err !== null) {
    // Narrow type to a Record<string, unknown> safely
    const e = err as Record<string, unknown>;

    if (typeof e.message === "string") {
      return e.message;
    }

    if (typeof e.error === "string") {
      return e.error;
    }

    // Handle API error pattern: err.response.data.message
    if (
      typeof e.response === "object" &&
      e.response !== null &&
      typeof (e.response as Record<string, unknown>).data === "object"
    ) {
      const data = (e.response as Record<string, unknown>).data as Record<string, unknown>;
      if (typeof data.message === "string") {
        return data.message;
      }
    }
  }

  return fallback;
}


