"use client";

import { ReactNode, FC } from "react";
import { SWRConfig } from "swr";
import { AppProgressProvider as ProgressProvider } from "@bprogress/next";
import { fetcher } from "@/core/services/global.get";

export interface IAppProvider {
  children: ReactNode;
}

export const AppProvider: FC<IAppProvider> = (props) => {
  const { children } = props;
  return (
    <ProgressProvider
      height="4px"
      color="rgb(var(--color-primary-100))"
      options={{ showSpinner: false }}
      shallowRouting
    >
      <SWRConfig
        value={{
          fetcher,
          revalidateOnFocus: false,
          dedupingInterval: 2000,
        }}
      >
        {children}
      </SWRConfig>
    </ProgressProvider>
  );
};
