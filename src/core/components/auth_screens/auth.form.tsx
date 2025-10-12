"use client";

import { MailIcon, Loader2Icon, SendIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { EAuthHeader } from "@/helpers/auth";

interface IAuthFormProps {
  email: string;
  isLoading: boolean;
  error: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setAuthStep: React.Dispatch<React.SetStateAction<EAuthHeader>>;
  getMagicLink: (email: string) => Promise<void>;
}

const AuthForm = (props: IAuthFormProps) => {
  const { email, setEmail, isLoading, error, getMagicLink } = props;

  return (
    <div
      className="flex flex-col justify-center items-center"
    >
      <div className="space-y-4 w-full">
        <p className="text-xs text-center text-muted-foreground">
          Enter your email address to receive a sign-in link.
        </p>
        <div className="relative">
          <MailIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            suppressHydrationWarning
            type="email"
            defaultValue={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="pl-10 py-3 sm:py-4 text-sm"
            required
            disabled={isLoading}
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
          onClick={() => getMagicLink(email)}
          disabled={isLoading || !email.trim()}
        >
          {isLoading ? (
            <Loader2Icon className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <>
              Send Login Link
              <SendIcon className="ml-2 w-4 h-4" />
            </>
          )}
        </Button>
      </div>
    </div>
  );
};

export default AuthForm;
