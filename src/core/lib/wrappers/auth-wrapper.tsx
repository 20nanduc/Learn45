"use client";

import { FC, useEffect } from "react";
import useSWR from "swr";
import * as EndPoints from "@/core/constants/swr-key";
import AppSpinner from "@/core/components/spinner/app_spinner";
import { useAppRouter } from "@/core/hooks/use.app.router";
import { useSearchParams, usePathname } from "next/navigation";
import { EAuthPageType, isValidURL } from "@/helpers/auth";


type TAuthWrapper = {
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

  const { data: currentUser, isLoading } = useSWR(EndPoints.getUser, {
    revalidateOnFocus: false,
    shouldRetryOnError: false,
  });

  const isUserOnboard = currentUser ? !currentUser.new_user : false;

  const getRedirectionUrl = () => {
    if (nextPath && isValidURL(nextPath.toString())) {
      return nextPath.toString();
    }
    return "/home";
  };


  useEffect(() => {
    if (isLoading) return;

    // Handle CREATE_ACCOUNT route
    if (pageType === EAuthPageType.CREATE_ACCOUNT) {
      if (!currentUser?.id) {
        router.push("/");
        return;
      }
      if (currentUser?.id && isUserOnboard) {
        router.push(getRedirectionUrl());
        return;
      }
    }

    // Handle PROTECTED route
    if (pageType === EAuthPageType.PROTECTED) {
      if (!currentUser?.id) {
        router.push(`/${pathname ? `?next_path=${pathname}` : ``}`);
        return;
      }
      if (currentUser?.id && !isUserOnboard) {
        router.push("/create-account");
        return;
      }
    }

    // Handle PUBLIC route
    if (pageType === EAuthPageType.PUBLIC) {
      if (currentUser?.id && isUserOnboard) {
        router.push(getRedirectionUrl());
        return;
      }
      if (currentUser?.id && !isUserOnboard) {
        router.push("/create-account");
        return;
      }
    }
  }, [isLoading, currentUser, isUserOnboard, router, pageType, pathname, nextPath]);


  if (isLoading && !currentUser?.id) {
    return <FullScreenSpinner />;
  }


  if (!isLoading && pageType === EAuthPageType.CREATE_ACCOUNT) {
    if (!currentUser?.id || (currentUser?.id && isUserOnboard)) return <></>;
  }

  if (!isLoading && pageType === EAuthPageType.PROTECTED) {
    if (!currentUser?.id || (currentUser?.id && !isUserOnboard)) return <></>;
  }

  if (!isLoading && pageType === EAuthPageType.PUBLIC) {
    if (currentUser?.id) return <></>;
  }


  return <>{children}</>;
};
