import { COOKIE_SESSION_KEY } from "@/core/constants";
import { NextRequest, NextResponse } from "next/server";

/**
 * @description Handles direct page visit without cookie,
 * or redirects unauthenticated users to login.
 */
export function handleProtectedPageVisit(
  req: NextRequest
): NextResponse | null {
  const token = req.cookies.get(COOKIE_SESSION_KEY)?.value;
  const pathname = req.nextUrl.pathname;

  if (!token) {
    const url = new URL("/", req.url);
    if (pathname.startsWith("/home")) {
      return NextResponse.redirect(url);
    }
     if (pathname.startsWith("/learn")) {
      return NextResponse.redirect(url);
    }
    if (pathname.startsWith("/create-account")) {
      return NextResponse.redirect(url);
    }
  }
  return null;
}
