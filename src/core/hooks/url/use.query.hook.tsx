"use client";
import { useSearchParams } from "next/navigation";


export function useQueryParam(key: string): string | null {
    const searchParams = useSearchParams();
    return searchParams.get(key);
}