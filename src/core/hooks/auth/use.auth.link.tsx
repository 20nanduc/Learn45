"use client";

import { getCachedUserLoginAttempt } from "@/core/store/local.store";
import { isValidEmail } from "@/core/utils/auth";
import { getErrorMessage } from "@/core/utils/error";
import React, { useEffect, useState, useCallback } from "react";
import { isValidMagicLink, registerUser } from "../../lib/firebase/firebase.auth";
import { markUserEmailVerified } from "@/core/services/server-actions/auth/magic.signin.service";
import { useWindowUrl } from "../url/use.window.url.hook";
import { useQueryParam } from "../url/use.query.hook";
import { ATTEMPT_TOKEN_QUERY_PARAM_KEY } from "@/core/constants";

/* 
@description: handles magic link click states.
*/

function useAuthMagicLink() {
  const [isVerifying, setIsVerifying] = useState(false);
  const [isEmailFound, setIsEmailFound] = useState(true);
  const [error, setError] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  const magicUrl = useWindowUrl();
  const attemptToken = useQueryParam(ATTEMPT_TOKEN_QUERY_PARAM_KEY);

  const registerUserWithFirebase = useCallback(
    async (email: string) => {
      try {
        setIsVerifying(true);
        setError("");

        if (!isValidEmail(email)) throw new Error("Invalid Email!!.");
        if (!magicUrl || !attemptToken) throw new Error("Client Hydration Error");
        if (!isValidMagicLink(magicUrl)) throw new Error("Invalid magic link!!.");

        const firebaseUserCredential = await registerUser(email, magicUrl);
        if (!firebaseUserCredential) throw new Error("Auth Provider Error. Try again with a new link!!.");

        const { idToken } = firebaseUserCredential;

        const status = await markUserEmailVerified({ idToken, attemptToken });
        if (!status.success) throw new Error("Unable to register your email. Try again with new link!!.");

        setIsSuccess(true);
        setIsEmailFound(true);

      } catch (err: unknown) {
        setError(getErrorMessage(err));
      } finally {
        setIsVerifying(false);
      }
    },
    [magicUrl, attemptToken]
  );

  useEffect(() => {
    const requestedUser = getCachedUserLoginAttempt();
    if (!requestedUser) {
      setIsEmailFound(false);
      return;
    }
    registerUserWithFirebase(requestedUser.email);
  }, [registerUserWithFirebase]);

  return {
    registerUserWithFirebase,
    isVerifying,
    isEmailFound,
    error,
    isSuccess,
    userEmail,
    setUserEmail,
  };
}

export default useAuthMagicLink;
