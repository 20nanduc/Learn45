"use client";
import { FC, useEffect, useState } from "react";
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

// Component to display a centered spinner
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

  // State to track if redirect/auth check is still running
  const [isChecking, setIsChecking] = useState(true);

  const { data: currentUser, isLoading } = useSWR(EndPoints.getUser, {
    revalidateOnMount: true,
    dedupingInterval: 0,
  });

  // Derive state
  const isAuthenticated = !!currentUser?.id;
  const isNewUser = currentUser?.new_user ?? false;
  const isCreateAccountPage = pathname === "/create-account";

  const getRedirectionUrl = () => {
    if (nextPath && isValidURL(nextPath)) {
      return nextPath.toString();
    }
    return isAuthenticated ? "/user" : "/";
  };

  useEffect(() => {
    if (isLoading) return;

    let shouldRedirect = false;
    let redirectPath: string | null = null;

    if (pageType === EAuthPageType.PROTECTED) {
      if (!isAuthenticated) {
        shouldRedirect = true;
        redirectPath = "/";
      } else if (isNewUser && !isCreateAccountPage) {
        shouldRedirect = true;
        redirectPath = "/create-account";
      } else if (!isNewUser && isCreateAccountPage) {
        shouldRedirect = true;
        redirectPath = getRedirectionUrl();
      }
    } else if (pageType === EAuthPageType.PUBLIC) {
      if (isAuthenticated && isCreateAccountPage) {
        shouldRedirect = true;
        redirectPath = getRedirectionUrl();
      }
      shouldRedirect = true;
      redirectPath = "/create-account";
    }

    if (shouldRedirect && redirectPath) {
      router.push(redirectPath);
    }

    setIsChecking(false);
  }, [
    isLoading,
    isAuthenticated,
    isNewUser,
    isCreateAccountPage,
    pageType,
    router,
    nextPath,
  ]);

  if (isLoading || isChecking) {
    return <FullScreenSpinner />;
  }

  if (pageType === EAuthPageType.PROTECTED) {
    if (!isAuthenticated) return null;
    if (isNewUser && !isCreateAccountPage) return null;
    if (!isNewUser && isCreateAccountPage) return null;
    return <>{children}</>;
  }

  if (pageType === EAuthPageType.PUBLIC) {
    if (isAuthenticated) return null;
    return <>{children}</>;
  }

  return <>{children}</>;
};
