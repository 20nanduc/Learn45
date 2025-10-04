"use client";

import { useState } from "react";
import * as EndPoints from "@/core/constants/swr-key";
import useSWR, { mutate } from "swr";
import { validateUsername } from "@/helpers/auth";
import { getErrorMessage } from "@/core/utils/error";
import { updateUserName } from "@/core/services/server-actions/user/user.service";
import { useAppRouter } from "../use.app.router";
import { IUSer } from "@/core/types/user.type";

function useAccount() {

  const router = useAppRouter();
  const { data: currentUser, isLoading: loadingUser } = useSWR<IUSer>(
    EndPoints.getUser
  );
  const [userName, setUserName] = useState<string>(currentUser?.name ?? "");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const updateAccount = async () => {
    try {
      setIsLoading(true);
      setError("");
      validateUsername(userName); // raises exception if not valid.

      const res = await updateUserName(userName.trim())

      if (!res || !res.success) throw new Error(res?.error || "Error... Failed to update name!!.")

      router.replace('/user');

    } catch (err: unknown) {
      setError(getErrorMessage(err));
    } finally {
      setIsLoading(false);
    }
  };

  return {
    loadingUser,
    userName,
    setUserName,
    error,
    isLoading,
    updateAccount
  };
}

export default useAccount;
