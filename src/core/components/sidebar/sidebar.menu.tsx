"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

interface SidebarItemProps {
  name: string;
  icon: React.ElementType;
  pathname: string;
  // onClick?: () => void;
}

export default function SidebarItem({
  name,
  icon: Icon,
  pathname,
  // onClick,
}: SidebarItemProps) {

  const currentPath = usePathname();
  const active = currentPath === pathname;

  return (
    <Link
      href={pathname}
      // onClick={onClick}
      className={clsx(
        "flex flex-col items-center justify-center gap-1 p-3 rounded-lg transition-colors",
        active
          ? "bg-black text-white"
          : "text-gray-600 hover:text-black hover:bg-gray-100 dark:hover:bg-gray-800"
      )}
    >
      <Icon className="w-5 h-5" />
      <span className="text-xs">{name}</span>
    </Link>
  );
}
