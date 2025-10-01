import React, { useState } from "react";

/* 
@description:  handles magic link click states.
*/
function useAuthMagicLink() {
  const [isVerifying, setIsVerifying] = useState<boolean>(true);
  const [isEmailFound, setIsEmailFound] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  return {
    isVerifying,
    isEmailFound,
    isError,
    isSuccess,
  };
}

export default useAuthMagicLink;
