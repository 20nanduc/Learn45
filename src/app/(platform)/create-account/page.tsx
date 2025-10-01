import AccountForm from "@/core/components/account/form";
import FormHeader from "@/core/components/account/form.header";

export default function CreateAccountPage() {
  return (
    <div className="min-h-screen flex gap-6 flex-col justify-center items-center">
      <FormHeader
        title="You Will Never Miss."
        subTitle="Introduce Yourself with us."
      />
      <AccountForm />
    </div>
  );
}
