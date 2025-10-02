"use client";
import { usePathname, useSearchParams } from "next/navigation";


export function useWindowUrl() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  return `${pathname}?${searchParams.toString()}`;
}
