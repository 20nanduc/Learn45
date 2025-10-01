"use client";
import { EAuthHeader } from "@/helpers/auth";
import AuthForm from "./auth.form";
import AuthHeader from "./auth.header";
import AuthMagicLinkEntry from "./auth.magic.entry";
import { useAuth } from "@/core/hooks/auth/use.auth.hook";
// import AuthSocialLink from './auth.social';

const AuthRoot: React.FC = () => {
  const auth = useAuth();

  const AuthPage =
    auth.authStep === EAuthHeader.NOT_STARTED ? (
      <AuthForm {...auth} />
    ) : (
      <AuthMagicLinkEntry {...auth} />
    );

  return (
    <div className="max-w-2xl mx-auto min-h-screen flex justify-center items-center p-4">
      <div className="flex flex-col gap-9 items-center justify-center w-full">
        <AuthHeader {...auth} />

        {AuthPage}
        {/* <AuthSocialLink /> */}
      </div>
    </div>
  );
};

export default AuthRoot;
