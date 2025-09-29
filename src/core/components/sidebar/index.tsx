"use client";

import SidebarItem from "./sidebar.menu";
import { navList } from "@/core/constants/nav-list";

export default function Sidebar() {
  return (
    <div className="fixed left-0 top-0 h-full w-20 bg-gray-800/50 shadow-md flex flex-col items-center py-3">
      <div className="mb-5">
        <span className="text-xl font-bold">🚀</span>
      </div>

      {/* Menu Items */}
      <nav className="flex flex-col gap-6">
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
