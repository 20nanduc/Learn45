"use client";

import { getFingerprint } from "@/core/lib/fingerprintjs";
import { isValidEmail } from "@/core/utils/auth";
import { useState } from "react";
import { EAuthHeader } from "@/helpers/auth";
import { getErrorMessage } from "@/core/utils/error";
import {
  completeMagicLinkSignin,
  requestMagicLink,
} from "@/core/services/server-actions/auth/magic.signin.service";
import {
  cacheUserLoginAttempt,
  getCachedUserLoginAttempt,
} from "@/core/store/local.store";
import { sendMagicLink } from "../../lib/firebase/firebase.auth";
import { SESSION_EXIST_STATUS_CODE } from "@/core/constants";
import { useAppRouter } from "../use.app.router";
import { mutate } from "swr";
import * as EndPoints from "@/core/constants/swr-key";

export const useAuth = () => {
  const router = useAppRouter();

  const [authStep, setAuthStep] = useState<EAuthHeader>(
    EAuthHeader.NOT_STARTED
  );
  const [email, setEmail] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [showLogoutWarning, setLogoutWarning] = useState<boolean>(false);

  const switchToLinkVerificationPage = () =>
    setAuthStep(EAuthHeader.MAGIC_LINK_AUTH);

  const signInWithMagicLink = async (forcedLogin: boolean = false) => {
    try {
      setIsLoading(true);
      setError("");

      //replace with cookies later
      const cachedEmailAndToken = getCachedUserLoginAttempt();
      if (!cachedEmailAndToken)
        throw new Error("Device denied to access saved information.");

      const { email, attemptToken } = cachedEmailAndToken;
      const deviceId = await getFingerprint();

      const res = await completeMagicLinkSignin({
        email,
        attemptToken,
        forcedLogin: true, // later add session out
        deviceId,
      });

      if (res && res?.status === SESSION_EXIST_STATUS_CODE) {
        setLogoutWarning(true);
        throw new Error(
          res?.error || "Found Existing login. Logout to continue"
        );
      }

      if (!res || !res?.success)
        throw new Error(res?.error || "Error... Unable to login, try again!.");

      await mutate(EndPoints.getUser, { revalidate: true });
      
      if (res.data?.newUser) {
        router.push("/create-account");
        return;
      }
      router.push("/home");
      return;
    } catch (err: unknown) {
      setError(getErrorMessage(err));
    } finally {
      setIsLoading(false);
    }
  };

  const getMagicLink = async (email: string) => {
    try {
      setIsLoading(true);
      setError("");
      const deviceId = await getFingerprint();
      if (!isValidEmail(email)) throw new Error("Invalid Email");

      const response = await requestMagicLink({
        email,
        deviceId,
      });

      const magicLinkData = response.success ? response.data : null;
      const errorMessage = !response.success ? response.error : null;

      if (!magicLinkData)
        throw new Error(
          errorMessage || "Unable to send link.Please try again!."
        );

      if (!(await sendMagicLink(email, magicLinkData.action_url)))
        throw new Error("Unable to send login link, try again!.");

      cacheUserLoginAttempt({
        email,
        attemptToken: magicLinkData?.attempt_token,
      });
      switchToLinkVerificationPage();
    } catch (err: unknown) {
      setError(getErrorMessage(err));
    } finally {
      setIsLoading(false);
    }
  };

  return {
    authStep,
    setAuthStep,
    email,
    error,
    setEmail,
    isLoading,
    showLogoutWarning,
    signInWithMagicLink,
    getMagicLink,
  };
};
