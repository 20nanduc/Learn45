"use server";

import { COOKIE_SESSION_KEY } from "@/core/constants";
import { getBrowserCookie } from "@/core/utils/cookie";

const X_CLIENT_PLATFORM = "WEB";

export const globalFetcher = async (url: string) => {

  const storedCookie = await getBrowserCookie();

  if (!storedCookie) throw new Error("User session ended!!.")

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "X-Client-Platform": "WEB",
      Cookie: `SESSION_COOKIE=${storedCookie}`
    },
  });

  if (!response.ok) throw new Error(`status: ${response.status}`);
  const userData = (await response.json())?.data;
  return userData;
};
