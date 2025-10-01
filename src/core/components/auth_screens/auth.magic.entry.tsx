import { Button } from "@/components/ui/button";
import { Loader2Icon, LogInIcon, MailCheckIcon } from "lucide-react";

interface IAuthMagicLinkEntryProps {
  email: string;
  isLoading: boolean;
  error: string;
  showLogoutWarning: boolean;
  registerUser: () => void;
}

const AuthMagicLinkEntry = (props: IAuthMagicLinkEntryProps) => {
  const { showLogoutWarning, isLoading, registerUser } = props;

  // 4. Conditional text content for cleaner JSX
  const buttonText = showLogoutWarning
    ? "Logout All - Continue"
    : "I've Verified - Continue";

  const paragraphContent = showLogoutWarning ? (
    <p className="text-xs text-center text-muted-foreground max-w-md">
      <span className="font-semibold text-red-500">
        Do you want to logout and continue?
      </span>{" "}
      Found session already active.
    </p>
  ) : (
    <p className="text-xs text-center text-muted-foreground max-w-md">
      <span className="font-semibold text-foreground">
        Once you've verified your email,
      </span>{" "}
      click the button below to continue.
    </p>
  );

  return (
    <div className="flex flex-col justify-center items-center gap-4 p-4">
      <MailCheckIcon
        size={96}
        className="text-green-500 mb-2"
        aria-hidden="true"
      />

      {paragraphContent}

      <Button
        type="button"
        variant="default"
        disabled={isLoading}
        onClick={registerUser}
        size="lg"
        className="w-full max-w-sm font-semibold transition-all duration-300"
      >
        {isLoading ? (
          <>
            <Loader2Icon className="animate-spin w-4 h-4 mr-2" />
            Processing...
          </>
        ) : (
          <>
            <LogInIcon className="w-4 h-4 mr-2" />
            {/* 6. Cleaned up button text span structure */}
            {buttonText}
          </>
        )}
      </Button>

      {/* Optional: Add a button to switch back to the main login method if the user is stuck */}
      <Button
        variant="link"
        className={"text-xs text-muted-foreground"}
        onClick={() => null}
      >
        Try anothor Email
      </Button>
    </div>
  );
};

export default AuthMagicLinkEntry;
