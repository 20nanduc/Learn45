"use client";

import { useState } from "react";
import * as EndPoints from "@/core/constants/swr-key";
import useSWR from "swr";

function useAccount() {
  const { data: currentUser, isLoading: loadingUser } = useSWR(
    EndPoints.getUser
  );
  const [userName, setUserName] = useState<string>(currentUser?.name ?? "");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const updateAccount = () => {
    try {
      setIsLoading(true);
      setError("");

      


    } catch (err: unknown) {
      console.log(err);
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
  };
}

export default useAccount;
