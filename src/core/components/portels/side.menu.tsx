"use client";

import { navList } from "@/core/constants/nav-list";
import { XIcon } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
import { createPortal } from "react-dom";

interface SideMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function SideMenu({ open, onClose }: SideMenuProps) {
  // Prevent scrolling when sidebar is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [open]);

  if (!open) return null;

  return createPortal(
    <div className="fixed inset-0 z-[200] flex ">
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />

      {/* Sidebar panel */}
      <div className="relative z-[201] w-64 bg-white dark:bg-gray-900 h-full shadow-xl transform transition-transform duration-300 ease-in-out">
        <button
          className="absolute top-4 right-4 text-gray-700 dark:text-gray-300"
          onClick={onClose}
        >
          <XIcon className="w-6 h-6" />
        </button>
        <div className="p-4">
          <h2 className="text-lg font-semibold">Menu</h2>
          <ul className="mt-4 space-y-2">
            {navList.map((item) => (
              <li className="hover:text-blue-500 cursor-pointer">
                <Link href={item.pathname}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>,
    document.getElementById("portal-root") as HTMLElement
  );
}
