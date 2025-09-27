import { Button } from "@/components/ui/button";
import { Loader2Icon, LogInIcon, MailCheckIcon } from "lucide-react";
import { useState, useCallback } from "react";


interface IAuthMagicLinkEntryProps {
    onContinue: (forceLogout: boolean) => Promise<void>;
}

const AuthMagicLinkEntry: React.FC<IAuthMagicLinkEntryProps> = ({ onContinue }) => {

    // 2. State management for loading and the session warning
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [showLogoutWarning, setShowLogoutWarning] = useState<boolean>(false); // In a real app, this would be checked via an API call

    // 3. Robust Click Handler
    const handleContinue = useCallback(async () => {
        if (isLoading) return;

        setIsLoading(true);
        const forceLogout = showLogoutWarning;

        try {
            // Call the handler passed from the parent component (e.g., AuthRoot)
            await onContinue(forceLogout);

            // On success, the parent/router should redirect the user.

        } catch (error) {
            // Log error, display a user-friendly message, and stop loading.
            console.error("Magic link entry failed:", error);
            setIsLoading(false);
            // Optional: You might want to unset the warning if the attempt failed
            // setShowLogoutWarning(false); 
        }
        // Note: setIsLoading(false) is typically omitted on success because a page redirect occurs.
    }, [isLoading, showLogoutWarning, onContinue]);


    // 4. Conditional text content for cleaner JSX
    const buttonText = showLogoutWarning
        ? "Logout All - Continue"
        : "I've Verified - Continue";

    const paragraphContent = showLogoutWarning ? (
        <p className="text-xs text-center text-muted-foreground max-w-md">
            <span className="font-semibold text-red-500">Do you want to logout and continue?</span> Found session already active.
        </p>
    ) : (
        <p className="text-xs text-center text-muted-foreground max-w-md">
            <span className="font-semibold text-foreground">Once you've verified your email,</span> click the button below to continue.
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
                onClick={handleContinue}
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
            <Button variant="link" className={"text-xs text-muted-foreground"} onClick={() => null} >
                Try anothor Email
            </Button>

        </div >
    );
}

export default AuthMagicLinkEntry;