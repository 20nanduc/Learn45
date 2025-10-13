"use client";

import { ReactNode, FC } from "react";
import { SWRConfig } from "swr";
import { fetcher } from "@/core/services/global.get";
import dynamic from "next/dynamic";


const ProgressProvider = dynamic(
  () => import("@bprogress/next").then(mod => mod.AppProgressProvider),
  { ssr: false }
);

export interface IAppProvider {
  children: ReactNode;
}

export const AppProvider: FC<IAppProvider> = (props) => {
  const { children } = props;
  return (
    <ProgressProvider
      height="2px"
      color="#3b82f6"
      options={{ showSpinner: false }}
      shallowRouting
    >
      <SWRConfig
        value={{
          fetcher,
          revalidateOnFocus: false,
          revalidateOnReconnect: false,
          revalidateIfStale: false,
          errorRetryCount: 0,
        }}
      >
        {children}
      </SWRConfig>
    </ProgressProvider>
  );
};
