"use client";
import { FC } from "react";
import useSWR from "swr";
import * as EndPoints from "@/core/constants/endpoints";
import AppSpinner from "@/core/components/spinner/app_spinner";

type TAuthWrapper = {
  children: React.ReactNode;
};

export const AuthWrapper: FC<TAuthWrapper> = (props) => {
  const { children } = props;
  const { data: user, isLoading, error } = useSWR(EndPoints.getUser);

  if (isLoading) return <AppSpinner />;

  // login page
  if (error || !user) return <>{children}</>;

  if (user) {
    return (
      // conditional redirection to dashboard or on board.
      <div>
        <p>User found</p>
      </div>
    );
  }

  return null;
};
