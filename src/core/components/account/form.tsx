"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2Icon, SaveIcon, UserIcon } from "lucide-react";
import React, { useState } from "react";

//used for both edit/create
function AccountForm() {
  const [userName, setUserName] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  return (
    <form
      onSubmit={() => null}
      className="flex flex-col justify-center items-center max-w-2xl"
    >
      <div className="space-y-2 w-full">
        <p className="text-xs text-muted-foreground">Enter Your user name.</p>
        <div className="relative">
          <UserIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            type="username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="John Doe"
            className="pl-10 py-3 sm:py-4 text-sm"
            required
            disabled={isLoading}
            aria-invalid={!!error}
          />
        </div>
        {error && <p className="text-xs text-red-600 mt-1 ml-1">{error}</p>}

        <Button
          variant={"default"}
          size={"lg"}
          className="w-full mt-2"
          type="submit"
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
    </form>
  );
}

export default AccountForm;
