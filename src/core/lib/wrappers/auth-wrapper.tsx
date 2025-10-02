"use client";
import { FC, useEffect } from "react";
import useSWR from "swr";
import * as EndPoints from "@/core/constants/swr-key";
import AppSpinner from "@/core/components/spinner/app_spinner";
import { useAppRouter } from "@/core/hooks/use.app.router";

type TAuthWrapper = {
  children: React.ReactNode;
};

export const AuthWrapper: FC<TAuthWrapper> = ({ children }) => {
  const router = useAppRouter();
  const { data: user, isLoading, error } = useSWR(EndPoints.getUser);

  console.log("user", user);

  // redirect once user is loaded
  useEffect(() => {
    if (user?.id) {
      if (user.new_user) {
        router.replace("/create-account");
      } else {
        router.replace("/user");
      }
    }
  }, [user, router]);

  // loading spinner
  if (isLoading) {
    return (
      <div className="h-screen w-full flex justify-center items-center">
        <AppSpinner />
      </div>
    );
  }

  // not logged in → show login page
  if (error || !user) {
    return <>{children}</>;
  }

  // prevent flashing children while redirecting
  return null;
};
