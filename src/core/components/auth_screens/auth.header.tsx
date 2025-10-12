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
        <p className="text-center sm:text-start">Sign-in to start learning.</p>
    ) : (
        <p className="text-center sm:text-start">
            We&apos;ve sent a verification link to{" "}
            <span className="text-green-600">{email}</span>. <br />
        </p>
    );

    return (
        <div className="flex flex-col items-center sm:items-start max-w-xs">
            <h1 className="text-3xl sm:text-4xl text-center sm:text-start font-bold">
                {title}
            </h1>
            {subtitle}
        </div>
    );
};

export default AuthHeader;