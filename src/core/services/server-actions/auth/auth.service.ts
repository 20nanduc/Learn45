"use server";

import * as Constant from "@/core/constants";
import { TApiResult } from "@/core/types/auth.types";
import { getBrowserCookie, saveCookieToBrowser } from "@/core/utils/cookie";
import { getErrorMessage } from "@/core/utils/error";


const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;


export async function logout(): Promise<TApiResult<null>> {
    try {

        const storedCookie = await getBrowserCookie();
        if (!storedCookie) throw new Error("User session ended!!.");


        const res = await fetch(`${baseUrl}/reader/auth/logout`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "x-client-platform": `${Constant.X_CLIENT_PLATFORM}`,
                Cookie: `SESSION_COOKIE=${storedCookie}`
            },
            body: null,
        });

        if (!res.ok) {
            return {
                success: false,
                error: "Error... Failed to logout from server!!.",
                status: res.status,
            };
        }

        // seting cleared cookie
        await saveCookieToBrowser(res);
        return { success: true, data: null };

    } catch (err: unknown) {
        console.log("error", err);
        return { success: false, error: getErrorMessage(err), status: 500 }
    }

}
