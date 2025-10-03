"use client";
import { FC, useEffect } from "react";
import { FC, useEffect } from "react";
import useSWR from "swr";
import * as EndPoints from "@/core/constants/swr-key";
import AppSpinner from "@/core/components/spinner/app_spinner";
import { useAppRouter } from "@/core/hooks/use.app.router";
import { useSearchParams, usePathname } from "next/navigation";
import { isValidURL } from "@/helpers/auth";

type TAuthWrapper = {
  children: React.ReactNode;
};

export const AuthWrapper: FC<TAuthWrapper> = ({ children }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useAppRouter();

  const nextPath = searchParams.get("next_path");
  const { data: user, isLoading } = useSWR(EndPoints.getUser);

  const isUserHasAccount = user?.new_user ?? false;

  const getRedirectionUrl = () => {
    if (nextPath && isValidURL(nextPath)) {
      return nextPath.toString();
    }
    return "/user"; // default dashboard
  };

  useEffect(() => {
    if (!isLoading) {
      // Case 1: user not logged in
      if (!user) {
        if (pathname !== "/") {
          router.replace("/");
        }
        return;
      }

      // Case 2: user logged in but has no account
      if (user && !isUserHasAccount) {
        if (pathname !== "/create-account") {
          router.replace("/create-account");
        }
        return;
      }

      // Case 3: user logged in and has account
      if (user && isUserHasAccount) {
        if (pathname === "/create-account") {
          router.replace("/user");
        } else if (pathname === "/") {
          router.replace(getRedirectionUrl());
        }
      }
    }
  }, [user, isLoading, pathname, router, nextPath, isUserHasAccount]);

  if (isLoading) {
    return (
      <div className="h-screen w-full flex justify-center items-center">
        <AppSpinner />
      </div>
    );
  }

  return <>{children}</>;
};
