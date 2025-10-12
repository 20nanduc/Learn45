"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import useLogoutHook from "@/core/hooks/auth/use.logout.hook";

interface LogoutConfirmModalProps {
  open: boolean;
  onClose: () => void;
}

export default function LogoutConfirmModal({ open, onClose }: LogoutConfirmModalProps) {

  const { isLoading, error, logoutUser } = useLogoutHook();



  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-sm"
        onInteractOutside={(e) => e.preventDefault()}
        onEscapeKeyDown={(e) => e.preventDefault()}>
        <DialogHeader>
          <DialogTitle>Sign Out</DialogTitle>
          {
            error ?
              <DialogDescription className="text-red-600">
                {error}
              </DialogDescription> :
              <DialogDescription>
                Are you sure you want to sign out? You&apos;ll need to log in again to continue.
              </DialogDescription>
          }
        </DialogHeader>

        <DialogFooter className="flex justify-end gap-2 mt-4">
          <Button variant="outline" disabled={isLoading} onClick={onClose}>
            Cancel
          </Button>
          <Button variant="destructive" onClick={logoutUser} disabled={isLoading}>
            {isLoading ? "Signing out..." : "Sign Out"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
