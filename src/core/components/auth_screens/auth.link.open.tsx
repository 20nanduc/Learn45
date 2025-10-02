"use client";

import useAuthMagicLink from "@/core/hooks/auth/use.auth.link";
import AuthFallbackEmail from "./auth.fallback.email";
import AuthLinkVerified from "./auth.link.verified";

function AuthLinkOpen() {
  const authLink = useAuthMagicLink();

  let content;

  if (!authLink.isEmailFound) {
    content = <AuthFallbackEmail {...authLink} />;
  } else if (authLink.isSuccess) {
    content = <AuthLinkVerified />;
  } else {
    content = (
      <p className="text-base font-normal">
        Verifying...
      </p>
    );
  }

  return <div>{content}</div>;
}

export default AuthLinkOpen;
