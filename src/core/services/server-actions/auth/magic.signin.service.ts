"use server";

import * as Constant from "@/core/constants";
import { IGetMagicLinkResponse, TApiResult } from "@/core/types/auth.types";

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export interface IRequestMagicLinkPayload {
  email: string;
  device_id: string;
}

export async function requestMagicLink({
  email,
  device_id,
}: IRequestMagicLinkPayload): Promise<TApiResult<IGetMagicLinkResponse>> {
  const res = await fetch(`${baseUrl}/reader/auth/request-link`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-client-platform": `${Constant.X_CLIENT_PLATFORM}`,
    },
    body: JSON.stringify({ email, device_id }),
  });
  
  const data = (await res.json())?.data;

  if (!res.ok) {
    return {
      success: false,
      error: data?.message || "Failed to request magic link",
      status: res.status,
    };
  }

  return { success: true, data };
}

export async function registerUserToFirebase() {
  // register user to firebase.
}

export async function authenticateMagicLinkOpen() {
  // verify opened link
}

export async function registerUserInDb() {
  // register user to firebase.  move to auth.
}
