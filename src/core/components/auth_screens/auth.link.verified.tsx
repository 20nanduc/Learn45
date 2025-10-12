"use client";

import { MailCheckIcon } from "lucide-react";

function AuthLinkVerified() {
  return <div className="flex flex-col gap-5 justify-center items-center max-w-xl">
    <MailCheckIcon
      size={90}
      className="text-green-500 mb-2"
      aria-hidden="true"
    />
    <h1 className="text-3xl sm:text-4xl font-bold text-center">Successfully Verified</h1>
    <p className="text-center text-sm"><strong className="text-yellow-600 font-bold">Go back</strong>{" "}to the login page you were requested and click{" "}<strong className="text-yellow-600 font-bold">I have Verified.</strong></p>
  </div>;
}

export default AuthLinkVerified;
