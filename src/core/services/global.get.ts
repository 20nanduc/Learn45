"use client";

import { globalFetcher } from "./server-actions/root.action";

export const fetcher = async (url: string) => {
  const data = await globalFetcher(url);
  return data;
};
