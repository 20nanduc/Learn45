// session storage service

import { ATTEMPT_TOKEN_STORAGE_KEY, EMAIL_STORAGE_KEY } from "../constants";

interface ICacheUserLoginAttempt {
  attempt_token: string;
  email: string;
}

export const cacheUserLoginAttempt = ({
  attempt_token,
  email,
}: ICacheUserLoginAttempt): void => {
  sessionStorage.setItem(ATTEMPT_TOKEN_STORAGE_KEY, attempt_token);
  sessionStorage.setItem(EMAIL_STORAGE_KEY, email);
};

export const getCachedUserLoginAttempt = () => {
  const attempt_token = sessionStorage.getItem(ATTEMPT_TOKEN_STORAGE_KEY);
  const email = sessionStorage.getItem(EMAIL_STORAGE_KEY);

  if (attempt_token === null || email === null) {
    return null;
  }

  return { attempt_token, email };
};
