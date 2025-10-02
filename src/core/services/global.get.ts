"use client";

import { globalFetcher } from "./server-actions/root.action";

export const fetcher = async (url: string) => {
  console.log("fetching data", url);
  const data = await globalFetcher(url);
  console.log("SWR Global Fetch", data);
  return data;
  // return null;
};
