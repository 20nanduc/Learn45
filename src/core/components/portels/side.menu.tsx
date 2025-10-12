"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import Link from "next/link";
import { XIcon } from "lucide-react";
import { navList } from "@/core/constants/nav-list";


interface SideMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function SideMenu({ open, onClose }: SideMenuProps) {


  const [portalRoot, setPortalRoot] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setPortalRoot(document.getElementById("portal-root"));
  }, []);

  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  if (!open || !portalRoot) return null;

  return createPortal(
    <div className="fixed inset-0 z-[200] flex">

      <div className="fixed inset-0 bg-black/50" onClick={onClose} />

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
              <li key={item.pathname} className="hover:text-blue-500 cursor-pointer">
                <Link href={item.pathname}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>,
    portalRoot
  );
}
