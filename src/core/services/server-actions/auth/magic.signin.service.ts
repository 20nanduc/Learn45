"use server";

import * as Constant from "@/core/constants";
import { IGetMagicLinkResponse, TApiResult } from "@/core/types/auth.types";
import { saveCookieToBrowser } from "@/core/utils/cookie";
import { getErrorMessage } from "@/core/utils/error";

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export interface IRequestMagicLinkPayload {
  email: string;
  deviceId: string;
}

export async function requestMagicLink({
  email,
  deviceId,
}: IRequestMagicLinkPayload): Promise<TApiResult<IGetMagicLinkResponse>> {
  try {
    const res = await fetch(`${baseUrl}/reader/auth/request-link`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-client-platform": `${Constant.X_CLIENT_PLATFORM}`,
      },
      body: JSON.stringify({ email, device_id: deviceId }),
    });

    const data = (await res.json())?.data;

    if (!res.ok) {
      return {
        success: false,
        error: data?.message || "Error... Failed to request magic link!!.",
        status: res.status,
      };
    }

    return { success: true, data };
  } catch (err: unknown) {
    return { success: false, error: getErrorMessage(err), status: 500 }
  }
}


export interface IMarkUserEmailVerified {
  idToken: string;
  attemptToken: string;
}


export async function markUserEmailVerified({ idToken, attemptToken }: IMarkUserEmailVerified) {

  try {

    console.log("attempt token: ", attemptToken);

    const res = await fetch(`${baseUrl}/reader/auth/verify-link`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "x-client-platform": `${Constant.X_CLIENT_PLATFORM}`,
      },
      body: JSON.stringify({ idToken, attempt_token: attemptToken }),
    });

    const data = (await res.json())?.data;
    console.log("mark email verified res", res);
    if (!res.ok) {
      return {
        success: false,
        error: data?.message || "Error.. Email verification failed!!.",
        status: res.status,
      };
    }
    return { success: true, data };

  } catch (err: unknown) {
    console.log("error", err);
    return { success: false, error: getErrorMessage(err), status: 500 }
  }

}


export interface ICompleteMagicLinkSignin {
  email: string;
  attemptToken: string;
  forcedLogin: boolean 
  deviceId: string 
}


export async function completeMagicLinkSignin({ email, attemptToken, forcedLogin, deviceId }: ICompleteMagicLinkSignin) {
  try {
    const res = await fetch(`${baseUrl}/reader/auth/complete-signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-client-platform": `${Constant.X_CLIENT_PLATFORM}`,
      },
      body: JSON.stringify({ email, attempt_token: attemptToken, force: forcedLogin, deviceId }),
    });

    console.log("complete sign in res", res);
    const data = (await res.json())?.data;

    if (!res.ok) {
      return {
        success: false,
        error: data?.message || "Error... try login again!!.",
        status: res.status,
      };
    }
    await saveCookieToBrowser(res);
    return { success: true, data };

  } catch (err: unknown) {
    return { success: false, error: getErrorMessage(err), status: 500 }
  }
}


