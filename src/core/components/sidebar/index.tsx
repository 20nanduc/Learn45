"use client";

import LogoIcon from "../icons/logo-icon";
import SidebarItem from "./sidebar.menu";
import { navList } from "@/core/constants/nav-list";

export default function Sidebar() {
  return (
    <div className="fixed  left-0 top-0 h-full w-20 bg-black shadow-md flex flex-col items-center py-3">
      <div className="my-3">
        <LogoIcon />
      </div>

      {/* Menu Items */}
      <nav className="flex flex-col gap-6 my-6">
        {navList.map((item) => (
          <SidebarItem
            key={item.pathname}
            name={item.name}
            icon={item.icon}
            pathname={item.pathname}
          />
        ))}
      </nav>
    </div>
  );
}
