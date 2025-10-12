"use client";
import { EAuthHeader } from "@/helpers/auth";
import AuthForm from "./auth.form";
import AuthHeader from "./auth.header";
import AuthMagicLinkEntry from "./auth.magic.entry";
import { useAuth } from "@/core/hooks/auth/use.auth.hook";

const AuthRoot: React.FC = () => {
  const auth = useAuth();

  const AuthPage =
    auth.authStep === EAuthHeader.NOT_STARTED ? (
      <AuthForm {...auth} />
    ) : (
      <AuthMagicLinkEntry {...auth} />
    );

  return (
    <div className="max-w-xl mx-auto min-h-screen flex flex-col justify-center items-center p-8">
      <div className="flex flex-col gap-5 max-w-xs">
        <AuthHeader {...auth} />

        {AuthPage}
      </div>
    </div>
  );
};

export default AuthRoot;
