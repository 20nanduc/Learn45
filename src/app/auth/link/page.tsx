import AuthLinkOpen from "@/core/components/auth_screens/auth.link.open";
import { Suspense } from "react";


export const dynamic = 'force-dynamic';

function MagicLinkValidation() {
  return (
    <Suspense fallback={<div className="h-screen m-auto">Loading...</div>}>
      <div className="max-w-xl mx-auto min-h-screen flex flex-col justify-center items-center p-8">
        <div className="flex flex-col gap-5 max-w-xs">
          <AuthLinkOpen />
        </div>
      </div>
    </Suspense >
  );

}

export default MagicLinkValidation;
