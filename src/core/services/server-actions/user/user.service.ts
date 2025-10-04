"use server";

import * as Constant from "@/core/constants";
import { TApiResult } from "@/core/types/auth.types";
import { IUSer } from "@/core/types/user.type";
import { getBrowserCookie, saveCookieToBrowser } from "@/core/utils/cookie";
import { getErrorMessage } from "@/core/utils/error";

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;



export const updateUserName = async (name: string): Promise<TApiResult<IUSer>> => {
    try {

        const storedCookie = await getBrowserCookie();
        if (!storedCookie) throw new Error("User session ended!!.");

        const res = await fetch(`${baseUrl}/reader/auth/user-account`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "x-client-platform": `${Constant.X_CLIENT_PLATFORM}`,
                Cookie: `SESSION_COOKIE=${storedCookie}`
            },
            body: JSON.stringify({ name }),
            credentials: "include",
        });

        const data = (await res.json())?.data;

        if (!res.ok) {
            return {
                success: false,
                error: "Error... Failed to update name!!.",
                status: res.status,
            };
        }

        await saveCookieToBrowser(res);

        return { success: true, data };


    } catch (err: unknown) {
        return { success: false, error: getErrorMessage(err), status: 500 }
    }
}