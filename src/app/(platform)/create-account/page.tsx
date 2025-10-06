import AccountForm from "@/core/components/account/account.form";
import FormHeader from "@/core/components/account/account.header";
import { AuthWrapper } from "@/core/lib/wrappers/auth-wrapper";
import { EAuthPageType } from "@/helpers/auth";

export default function CreateAccountPage() {
  return (
    <AuthWrapper pageType={EAuthPageType.CREATE_ACCOUNT}>
      <div className="min-h-screen flex gap-6 flex-col justify-center items-center">
        <FormHeader title="Tell about yourself." subTitle="" />
        <AccountForm />
      </div>
    </AuthWrapper>
  );
}
