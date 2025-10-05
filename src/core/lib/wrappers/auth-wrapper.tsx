"use client";
import { FC, useEffect, useState } from "react";
import useSWR from "swr";
// Assuming these imports are correct based on your project structure
import * as EndPoints from "@/core/constants/swr-key";
import AppSpinner from "@/core/components/spinner/app_spinner";
import { useAppRouter } from "@/core/hooks/use.app.router";
import { useSearchParams, usePathname } from "next/navigation";
import { EAuthPageType, isValidURL } from "@/helpers/auth";

type TAuthWrapper = {
  /** Defines the access type: PROTECTED (requires login) or PUBLIC (doesn't require login). */
  pageType?: EAuthPageType;
  children: React.ReactNode;
};

const FullScreenSpinner = () => (
  <div className="h-screen w-full flex justify-center items-center">
    <AppSpinner />
  </div>
);

export const AuthWrapper: FC<TAuthWrapper> = ({
  pageType = EAuthPageType.PROTECTED,
  children,
}) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useAppRouter();
  const nextPath = searchParams.get("next_path");


  const { data: currentUser, isLoading } = useSWR(EndPoints.getUser);

  const redirectUser = () => {
    const redirectTo = currentUser?.new_user ? '/create-account' : '/home';
    router.push(redirectTo);
    return null;
  }  

  // 1. Always show the spinner while data is being fetched.
  if (isLoading) {
    return <FullScreenSpinner />;
  }


  if (pageType == EAuthPageType.PROTECTED) {

  }

  if (pageType == EAuthPageType.PUBLIC) {
    if (!currentUser) return <>{children}</>
    redirectUser()
  }


};