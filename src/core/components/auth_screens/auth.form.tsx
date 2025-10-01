"use client";
import { MailIcon, Loader2Icon, SendIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { EAuthHeader } from "@/helpers/auth";

interface IAuthFormProps {
  email: string;
  isLoading: boolean;
  error: string;
  setEmail: (email: string) => void;
  setAuthStep: (step: EAuthHeader) => void;
  getMagicLink: (email: string) => void;
}

const AuthForm = (props: IAuthFormProps) => {
  const { email, setEmail, isLoading, error, getMagicLink } = props;

  return (
    <form
      onSubmit={() => null}
      className="flex flex-col justify-center items-center max-w-xl"
    >
      <div className="space-y-4 w-full">
        <p className="text-xs text-muted-foreground">
          Enter your email address to receive a sign-in link.
        </p>
        <div className="relative">
          <MailIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="pl-10 py-3 sm:py-4 text-sm"
            required
            disabled={isLoading}
            aria-invalid={!!error}
          />
        </div>
        {error && <p className="text-xs text-red-600 mt-1 ml-1">{error}</p>}

        <Button
          variant={"default"}
          size={"lg"}
          className="w-full"
          type="submit"
          onClick={() => getMagicLink(email)}
          disabled={isLoading || !email.trim()}
        >
          {isLoading ? (
            <Loader2Icon className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <>
              Login
              <SendIcon className="ml-2 w-4 h-4" />
            </>
          )}
        </Button>
      </div>
    </form>
  );
};

export default AuthForm;
