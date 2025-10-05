"use server";

import * as Constant from "@/core/constants";
import { TApiResult } from "@/core/types/auth.types";
import { getBrowserCookie } from "@/core/utils/cookie";
import { getErrorMessage } from "@/core/utils/error";

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;



export const getPosts = async (last_post: string | null): Promise<TApiResult<[]>> => {
    try {

        const storedCookie = await getBrowserCookie();
        if (!storedCookie) throw new Error("User session ended!!.");

        const res = await fetch(`${baseUrl}/posts/list?last_post=${last_post}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "x-client-platform": `${Constant.X_CLIENT_PLATFORM}`,
                Cookie: `SESSION_COOKIE=${storedCookie}`
            },
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

        return { success: true, data };


    } catch (err: unknown) {
        return { success: false, error: getErrorMessage(err), status: 500 }
    }
}