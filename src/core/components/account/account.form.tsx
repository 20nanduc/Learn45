"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2Icon, SaveIcon, UserIcon } from "lucide-react";

import InputFieldSkeleton from "../skeletons/input";
import useAccount from "@/core/hooks/auth/use.account.hook";

// used for both edit/create
function AccountForm() {
  const { loadingUser, userName, setUserName, error, isLoading, updateAccount } = useAccount();

  return (
    // Removed max-w-xs to allow the container to be as wide as its parent
    // The bg-red-400 is kept for visibility but can be removed.
    <div className="flex flex-col w-full justify-center items-center">
      {/* Ensure the inner space-y-4 div takes full width for its children */}
      <div className="space-y-4 w-2xs sm:w-xs"> 
        <p className="text-xs text-muted-foreground">Enter Your Name</p>
        <div className="relative">
          <UserIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
          {loadingUser ? (
            <InputFieldSkeleton />
          ) : (
            // Input component naturally takes full width in Tailwind if not constrained
            <Input
              suppressHydrationWarning
              type="username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="John Doe"
              className="pl-10 py-3 sm:py-4 w-full" // Explicitly added w-full for clarity
              required
              maxLength={30}
              disabled={isLoading}
              aria-invalid={!!error}
              autoComplete="off"
            />
          )}
        </div>
        {error && <p className="text-xs text-red-600 mt-1 ml-1">{error}</p>}

        <Button
          variant={"default"}
          size={"lg"}
          className="w-full" // Already correctly set to w-full
          type="button"
          onClick={() => updateAccount()}
          disabled={isLoading || !userName.trim()}
        >
          {isLoading ? (
            <Loader2Icon className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <>
              Save
              <SaveIcon className="ml-2 w-4 h-4" />
            </>
          )}
        </Button>
      </div>
    </div>
  );
}

export default AccountForm;