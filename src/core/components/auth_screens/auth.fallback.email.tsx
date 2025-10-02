"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCheckIcon, Loader2Icon, MailIcon } from "lucide-react";


interface IAuthFallbackEmail {
  userEmail: string;
  setUserEmail: React.Dispatch<React.SetStateAction<string>>;
  isVerifying: boolean;
  error: string;
  registerUserWithFirebase: (email: string) => void;
}

function AuthFallbackEmail(props: IAuthFallbackEmail) {

  const { userEmail, setUserEmail, isVerifying, error, registerUserWithFirebase } = props;

  return <div
    className="flex flex-col justify-center items-center max-w-xl"
  >
    <div className="space-y-4 w-full">
      <h1 className="text-xl">Almost there!, One more Step</h1>
      <p className="text-base text-muted-foreground">
        Re-type Your email once again here.
      </p>
      <div className="relative">
        <MailIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input
          suppressHydrationWarning
          type="email"
          defaultValue={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
          placeholder="you@example.com"
          className="pl-10 py-3 sm:py-4 text-sm"
          required
          disabled={isVerifying}
          aria-invalid={!!error}
          autoComplete="off"
        />
      </div>
      {error && <p className="text-xs text-red-600 mt-1 ml-1">{error}</p>}

      <Button
        variant={"default"}
        size={"lg"}
        className="w-full"
        type="button"
        onClick={() => registerUserWithFirebase(userEmail)}
        disabled={isVerifying || !userEmail.trim()}
      >
        {isVerifying ? (
          <Loader2Icon className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <>
            Complete Verification
            <CheckCheckIcon className="ml-2 w-4 h-4" />
          </>
        )}
      </Button>
    </div>
  </div>;
}

export default AuthFallbackEmail;
