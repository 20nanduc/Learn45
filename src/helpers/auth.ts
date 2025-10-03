
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

