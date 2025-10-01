"use server";

import { cookies } from "next/headers";

const X_CLIENT_PLATFORM = "WEB";

export const globalFetcher= async (url: string) => {

  const cookie_store = cookies();
  const session_cookie = (await cookie_store).get("SESSION");

  if (!session_cookie) throw new Error("Authentication cookie not found.");
  

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "X-Client-Platform": `${X_CLIENT_PLATFORM}`,
      Cookie: `SESSION=${session_cookie.value}`,
    },
    cache: "default",
  });

  if (!response.ok) throw new Error(`status: ${response.status}`);
  const data = await response.json();
  return { data };
};
