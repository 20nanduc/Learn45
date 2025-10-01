import { getFingerprint } from "@/core/lib/fingerprint";
import { isValidEmail } from "@/core/utils/auth";
import { useState } from "react";
import { EAuthHeader } from "@/helpers/auth";
import { getErrorMessage } from "@/core/utils/error";
import { requestMagicLink } from "@/core/services/server-actions/auth/magic.signin.service";
import { IGetMagicLinkResponse, TApiResult } from "@/core/types/auth.types";
import { cacheUserLoginAttempt } from "@/core/store/local.store";
import { sendMagicLink } from "./firebase.auth";


export const useAuth = () => {
  const [authStep, setAuthStep] = useState<EAuthHeader>(
    EAuthHeader.NOT_STARTED
  );
  const [email, setEmail] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [showLogoutWarning, setLogoutWarning] = useState<boolean>(false);

  const switchToLinkVerificationPage = () =>
    setAuthStep(EAuthHeader.MAGIC_LINK_AUTH);

  const registerUser = async () => {
    console.log("email", email);
  };

  const getMagicLink = async (email: string) => {
    try {
      setIsLoading(true);
      setError("");
      const device_id = await getFingerprint();
      if (!isValidEmail(email)) throw new Error("Invalid Email");

      const response = await requestMagicLink({
        email,
        device_id,
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
        attempt_token: magicLinkData?.attempt_token,
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
    registerUser,
    getMagicLink,
  };
};
