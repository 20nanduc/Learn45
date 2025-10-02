"use client";
import { EAuthHeader } from "@/helpers/auth";

interface IAuthHeader {
    authStep: EAuthHeader;
    email: string;
}

/**
 * A presentational component that displays the header and a message
 * based on the current authentication step.
 */
const AuthHeader = (props: IAuthHeader) => {
    const { authStep, email } = props;

    const isNotStarted = authStep === EAuthHeader.NOT_STARTED;

    const title = isNotStarted ? 'Welcome Back' : 'Check Your Email';

    const subtitle = isNotStarted ? (
        <p className="text-sm sm:text-base">Sign-in to get started</p>
    ) : (
        <p className="text-sm text-muted-foreground">
            We&apos;ve sent a verification link to{" "}
            <span className="text-green-600 font-medium">{email}</span>. <br />
        </p>
    );

    return (
        <div className="flex flex-col justify-start items-start gap-2">
            <h1 className="text-3xl sm:text-4xl font-bold text-center">
                {title}
            </h1>
            {subtitle}
        </div>
    );
};

export default AuthHeader;