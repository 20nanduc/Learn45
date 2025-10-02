"use client";

import { MailCheckIcon } from "lucide-react";

function AuthLinkVerified() {
  return <div className="flex flex-col gap-2 justify-center items-center">
    <MailCheckIcon
      size={90}
      className="text-green-500 mb-2"
      aria-hidden="true"
    />
    <h1 className="text-2xl font-bold">Successfully Verified.</h1>
    <p className="text-center text-sm max-w-2xs sm:max-w-2xl"><strong className="text-yellow-600">Go back</strong>{" "}to the login page you were requested and click{" "}<strong className="text-yellow-600">I have Verified.</strong></p>
  </div>;
}

export default AuthLinkVerified;
