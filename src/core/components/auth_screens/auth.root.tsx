"use client";
import { EAuthHeader } from '@/core/constants/auth';
import AuthForm from './auth.form';
import AuthHeader from './auth.header';
import { useState, useMemo } from 'react'; // Added useMemo for cleaner component rendering
import AuthMagicLinkEntry from './auth.magic.entry';
// import AuthSocialLink from './auth.social';

const AuthRoot: React.FC = () => {

  const [authStep, setAuthStep] = useState<EAuthHeader>(EAuthHeader.NOT_STARTED);
  const [email, setEmail] = useState<string>('');
  // You might also need a state for errors at the root level
  // const [error, setError] = useState<string | null>(null);

  const handleSetEmail = (newEmail: string) => {
    setEmail(newEmail);
  };

  const handleSetAuthStep = (newStep: EAuthHeader) => {
    setAuthStep(newStep);
  };

  // 1. Implemented the core login logic
  const handleMagicLinkLogin = async (forceLogout: boolean): Promise<void> => {
    // setError(null); // Clear root-level errors

    // In a real application, you would check the email, look for a token 
    // in the URL/storage, and send it to your backend here.

    console.log(`Attempting login for: ${email}. Force Logout: ${forceLogout}`);

    try {
      // --- ACTUAL API CALL HERE ---
      // Example: const response = await loginApi(email, token, forceLogout);

      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulated delay

      // 2. On successful login, redirect the user (e.g., using a router)
      // console.log("Login successful! Redirecting..."); 
      // router.push('/dashboard'); 

    } catch (error) {
      // console.error("Login failed:", error);
      // setError("Login failed. Please request a new link.");
      // Reset to the initial form on major failure
      // handleSetAuthStep(EAuthHeader.NOT_STARTED);

      // Re-throw the error so the child component (AuthMagicLinkEntry) 
      // can handle its loading state.
      throw error;
    }
  };



  const AuthPage = useMemo(() => {
    if (authStep === EAuthHeader.NOT_STARTED) {
      return (
        <AuthForm
          onSetEmail={handleSetEmail}
          onSetAuthStep={handleSetAuthStep}
        />
      );
    }
    return (
      <AuthMagicLinkEntry
        onContinue={handleMagicLinkLogin}
      />
    );
  }, [authStep, handleMagicLinkLogin]);

  return (
    <div className='max-w-2xl mx-auto min-h-screen flex justify-center items-center p-4'>
      <div className='flex flex-col gap-9 items-center justify-center w-full'>

        <AuthHeader
          authStep={authStep}
          defaultEmail={email}
        />

        {AuthPage}
        {/* <AuthSocialLink /> */}

      </div>
    </div>
  );
};

export default AuthRoot;