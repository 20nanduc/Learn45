"use client";

import { ZapIcon } from "lucide-react";

interface MinimalistDividerProps {
  /** Text displayed in the center of the divider */
  text?: string;
  /** Optional Lucide icon component */
  Icon?: React.ElementType;
}

export default function ElegantMinimalistDivider({
  text = "Learn 3 Minutes",
  Icon = ZapIcon,
}: MinimalistDividerProps) {
  return (
    <div className="flex items-center justify-center w-full mx-auto max-w-xl mt-12">
      {/* Left Gradient Line */}
      <div className="flex-grow h-px bg-gradient-to-r from-transparent via-gray-600/50 to-transparent transition-opacity duration-300 hover:opacity-80" />

      {/* Center Section */}
      <div
        className="flex items-center mx-6 px-4 py-1 text-xs tracking-[0.15em] 
        font-semibold uppercase transition-transform duration-300 
        hover:scale-[1.02] cursor-default"
      >
        <span
          className="flex items-center px-3 py-1.5 rounded-sm text-chart-3"
        >
          {Icon && (
            <Icon
              className="w-3 h-3 mr-2 text-chart-3  transition-colors duration-200"
              aria-hidden="true"
            />
          )}
          <span className="text-chart-2 italic">{text}</span>
        </span>
      </div>

      {/* Right Gradient Line */}
      <div className="flex-grow h-px bg-gradient-to-r from-transparent via-gray-600/50 to-transparent transition-opacity duration-300 hover:opacity-80" />
    </div>
  );
}
