import { sendSignInLinkToEmail } from "firebase/auth";
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
    return false;
  }
}
