// session storage service

import { ATTEMPT_TOKEN_STORAGE_KEY, EMAIL_STORAGE_KEY } from "../constants";

interface ICacheUserLoginAttempt {
  attemptToken: string;
  email: string;
}

export const cacheUserLoginAttempt = ({
  attemptToken,
  email,
}: ICacheUserLoginAttempt): void => {
  sessionStorage.setItem(ATTEMPT_TOKEN_STORAGE_KEY, attemptToken);
  sessionStorage.setItem(EMAIL_STORAGE_KEY, email);
};

export const getCachedUserLoginAttempt = (): ICacheUserLoginAttempt | null => {
  const attemptToken = sessionStorage.getItem(ATTEMPT_TOKEN_STORAGE_KEY);
  const email = sessionStorage.getItem(EMAIL_STORAGE_KEY);

  if (attemptToken === null || email === null) {
    return null;
  }

  return { attemptToken, email };
};
