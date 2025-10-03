import AccountForm from "@/core/components/account/form";
import FormHeader from "@/core/components/account/form.header";
import { AuthWrapper } from "@/core/lib/wrappers/auth-wrapper";

export default function CreateAccountPage() {
  return (
    <AuthWrapper>
      <div className="min-h-screen flex gap-6 flex-col justify-center items-center">
        <FormHeader
          title="You Will Never Miss."
          subTitle="Introduce Yourself with us."
        />
        <AccountForm />
      </div>
    </AuthWrapper>
  );
}
