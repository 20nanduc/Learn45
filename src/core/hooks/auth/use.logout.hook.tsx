"use client";

import { getErrorMessage } from "@/core/utils/error";
import { logout } from "@/core/services/server-actions/auth/auth.service";
import { useState } from "react";
import { useRouter } from "@/core/lib/b-progress";
import { mutate } from "swr";
import * as EndPoints from "@/core/constants/swr-key";


function useLogoutHook() {

    const router = useRouter()
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");


    const logoutUser = async () => {
        try {
            setIsLoading(true);
            setError("");

            const res = await logout();
            if (res && !res?.success) {
                throw new Error(res?.error || "Error... Unable to session out from server")
            }

            await mutate(EndPoints.getUser, undefined);

            router.replace('/');

        } catch (err: unknown) {
            setError(getErrorMessage(err) || "Error... Unable to session out from server");

        } finally {
            setIsLoading(false);
        }
    }


    return { isLoading, error, logoutUser }
}

export default useLogoutHook
