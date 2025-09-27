"use client";
import { MailIcon, Loader2Icon, SendIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { EAuthHeader } from "@/core/constants/auth";


interface IAuthFormProps {
    onSetEmail: (email: string) => void;
    onSetAuthStep: (step: EAuthHeader) => void;
}

const AuthForm: React.FC<IAuthFormProps> = ({ onSetEmail, onSetAuthStep }) => {
    const [inputEmail, setInputEmail] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    // 3. Form Submission Handler
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setIsLoading(true);

        try {
            // 1. Save the email to the parent's state
            onSetEmail(inputEmail);

            // 2. Simulate API call for sending login link
            // await new Promise(resolve => setTimeout(resolve, 1500)); 

            // 3. Update the parent's auth step
            onSetAuthStep(EAuthHeader.MAGIC_LINK_AUTH);

        } catch (err) {
            console.error(err);
            setError('Failed to send login link. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center max-w-xl">
            <div className="space-y-4 w-full">
                <p className="text-xs text-muted-foreground">
                    Enter your email address to receive a sign-in link.
                </p>
                <div className="relative">
                    <MailIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input
                        type="email"
                        value={inputEmail}
                        onChange={(e) => setInputEmail(e.target.value)}
                        placeholder="you@example.com"
                        className="pl-10 py-3 sm:py-4 text-sm"
                        required
                        disabled={isLoading}
                        aria-invalid={!!error}
                    />
                </div>
                {error && <p className="text-xs text-red-600 mt-1 ml-1">{error}</p>}

                <Button
                    variant={'default'}
                    size={"lg"}
                    className="w-full"
                    type="submit"
                    disabled={isLoading || !inputEmail.trim()}
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
}

export default AuthForm;