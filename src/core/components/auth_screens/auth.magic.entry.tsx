"use client";

import { Button } from "@/components/ui/button";
import { EAuthHeader, EAuthPageType } from "@/helpers/auth";
import { Loader2Icon, LogInIcon, MailCheckIcon } from "lucide-react";

interface IAuthMagicLinkEntryProps {
  email: string;
  isLoading: boolean;
  error: string;
  showLogoutWarning: boolean;
  setAuthStep: React.Dispatch<React.SetStateAction<EAuthHeader>>;
  signInWithMagicLink: (forcedLogin: boolean) => void;
}

const AuthMagicLinkEntry = (props: IAuthMagicLinkEntryProps) => {
  const { showLogoutWarning, error, isLoading, setAuthStep, signInWithMagicLink } = props;


  const buttonText = showLogoutWarning
    ? "Logout All - Continue"
    : "I've Verified - Continue";

  const paragraphContent = showLogoutWarning ? (
    <p className="text-center text-muted-foreground">
      <span className="font-semibold text-red-500">
        Do you want to logout and continue?
      </span>{" "}
      Found session already active.
    </p>
  ) : (
    <p className=" text-sm text-center text-muted-foreground">
      <span className="font-semibold text-foreground">
        Once you&apos;ve verified your email,
      </span>{" "}
      click the button below to continue.
    </p>
  );

  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <MailCheckIcon
        size={90}
        className="text-green-500 mb-2"
        aria-hidden="true"  
      />

      {paragraphContent}

      <Button
        type="button"
        variant="default"
        disabled={isLoading}
        onClick={() => signInWithMagicLink(showLogoutWarning)}
        size="lg"
        className="w-full max-w-sm font-semibold transition-all duration-300"
      >
        {isLoading ? (
          <>
            Login....
            <Loader2Icon className="animate-spin w-4 h-4 mr-2" />
          </>
        ) : (
          <>
            {buttonText}
            <LogInIcon className="w-4 h-4 mr-2" />
          </>
        )}
      </Button>
      {error && <p className="text-xs text-red-600 mt-1 ml-1">{error}</p>}

      <Button
        variant="link"
        className={"font-normal text-blue-500 underline"}
        onClick={() => setAuthStep(EAuthHeader.NOT_STARTED)}
      >
        Try anothor Email
      </Button>
    </div>
  );
};

export default AuthMagicLinkEntry;
