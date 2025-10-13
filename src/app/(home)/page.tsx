import AuthRoot from "@/core/components/auth_screens/auth.root";
import DefaultLayout from "@/core/layout/default.layout";
import { AuthWrapper } from "@/core/lib/wrappers/auth-wrapper";
import { EAuthPageType } from "@/helpers/auth";
import { Suspense } from "react";

export const dynamic = 'force-dynamic';

export default function HomePage() {
  return (
    <Suspense fallback={<div className="h-screen m-auto">Loading...</div>}>
      <AuthWrapper pageType={EAuthPageType.PUBLIC}>
        <DefaultLayout>
          <AuthRoot />
        </DefaultLayout>
      </AuthWrapper>
    </Suspense>
  );
}
