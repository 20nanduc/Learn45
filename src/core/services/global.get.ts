"use client";

import { globalFetcher } from "./server-actions/root.action";




const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:4000/api';

export const fetcher = async (url: string) => {
  const getUrl = `${API_BASE}${url}`
  console.log("fetching from", getUrl);
  const data = await globalFetcher(getUrl);
  return data;
  // return null;
};
