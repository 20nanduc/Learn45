
export enum EAuthPageType {
  PROTECTED = "PROTECTED",
  PUBLIC = "PUBLIC",
}

export enum EAuthHeader {
  NOT_STARTED = "NOT_STARTED",
  MAGIC_LINK_AUTH = "MAGIC_LINk",
}


export const isValidURL = (url: string): boolean => {
  try {
    if (url.startsWith("/") || url.startsWith("./") || url.startsWith("../")) {
      return true;
    }
    const parsed = new URL(url, process.env.NEXT_PUBLIC_WEB_BASE_URL);
    return parsed.protocol === "http:" || parsed.protocol === "https:";
  } catch {
    return false;
  }
};


export const validateUsername = (
  username: string,
): boolean => {

  const minLength = 3;
  const maxLength = 30;

  // 1. Check for Minimum Length
  if (username.length < minLength) {
    throw new Error(`Username must be at least ${minLength} characters long. Found ${username.length}.`);
  }

  // 2. Check for Maximum Length
  if (username.length > maxLength) {
    throw new Error(`Username cannot exceed ${maxLength} characters. Found ${username.length}.`);
  }

  // 3. (Optional but good practice): Check for unwanted characters
  // Example: Only allow letters, numbers, hyphens, and underscores
  const validPattern = /^[a-zA-Z0-9_-]+$/;
  if (!validPattern.test(username)) {
    throw new Error("Username contains invalid characters. Only letters, numbers, hyphens, and underscores are allowed.");
  }

  // If all checks pass
  return true;
}