"use client";

import { MenuIcon } from "lucide-react";
import { useState } from "react";
import SideMenu from "@/core/components/portels/side.menu";
import UserProfileMenu from "../account/user.profile.menu";

function Appbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="fixed bg-gray-800/50 shrink-0 h-12 top-0 z-100 left-0 sm:left-20 right-0 px-6 sm:px-10 flex justify-between items-center gap-2">
        <div className="flex gap-2 items-center">
          {/* Hamburger */}
          <button className="sm:hidden" onClick={() => setOpen(true)}>
            <MenuIcon className="w-6 h-6" />
          </button>

          <h4 className="font-semibold">Learn45</h4>
        </div>

        <UserProfileMenu />
      </div>

      {/* Sidebar Portal */}
      <SideMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}

export default Appbar;
