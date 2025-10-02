import { COOKIE_SESSION_KEY } from "@/core/constants";
import { NextRequest, NextResponse } from "next/server";

/**
 * @description Handles direct page visit without cookie,
 * or redirects unauthenticated users to login.
 */
export function handleProtectedPageVisit(req: NextRequest): NextResponse | null {
  const token = req.cookies.get(COOKIE_SESSION_KEY)?.value;
  const pathname = req.nextUrl.pathname;

  console.log("middleware token", token);
  console.log("pathname", pathname);

  // If no token and user tries to access protected page → redirect to /
  if (!token) {
    if (pathname.startsWith("/user")) {
      const url = new URL("/", req.url);
      url.searchParams.set("next-path", pathname); // store intended path
      return NextResponse.redirect(url);
    }
    return NextResponse.next();
  }
  return NextResponse.next();
}
