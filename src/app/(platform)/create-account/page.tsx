import AccountForm from "@/core/components/account/account.form";
import FormHeader from "@/core/components/account/account.header";
import DefaultLayout from "@/core/layout/default.layout";
import { AuthWrapper } from "@/core/lib/wrappers/auth-wrapper";
import { EAuthPageType } from "@/helpers/auth";
import { Suspense } from "react";

export const dynamic = 'force-dynamic';

export default function CreateAccountPage() {
  return (
    <Suspense fallback={<div className="h-screen m-auto">Loading...</div>}>
      <AuthWrapper pageType={EAuthPageType.CREATE_ACCOUNT}>
        <DefaultLayout>
          <div className="min-h-screen w-full flex gap-5 flex-col justify-center items-center">
            <FormHeader title="Tell about yourself" subTitle="Create Account" />
            <AccountForm />
          </div>
        </DefaultLayout>
      </AuthWrapper>
    </Suspense>
  );
}
