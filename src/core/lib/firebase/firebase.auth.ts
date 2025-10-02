"use client";

import { isSignInWithEmailLink, sendSignInLinkToEmail, signInWithEmailLink } from "firebase/auth";
import { firebaseAuth } from "@/core/lib/firebase";




export async function sendMagicLink(email: string, actionUrl: string) {
  try {
    const actionCodeSettings = {
      url: actionUrl,
      handleCodeInApp: true,
    };
    await sendSignInLinkToEmail(firebaseAuth, email, actionCodeSettings);
    return true;
  } catch (err) {
    console.log("error", err);
    return false;
  }
}



export type TRegisterUserResponse =
  | { idToken: string }
  | false;


export async function registerUser(email: string, magicUrl: string): Promise<TRegisterUserResponse> {
  try {
    const firebaseUser = await signInWithEmailLink(firebaseAuth, email, magicUrl);
    const user = firebaseUser?.user;

    if (!user) throw new Error("Authentication provider denied. try again!!.");

    const idToken = await user.getIdToken();

    if (!idToken) {
      throw new Error("Authentication provider unable to verify you. try again!!.");
    }

    return { idToken };

  } catch (err) {
    console.log("error while verifying", err);
    return false;
  }
}


export const isValidMagicLink = (url: string) => {

  return isSignInWithEmailLink(firebaseAuth, url)

}
