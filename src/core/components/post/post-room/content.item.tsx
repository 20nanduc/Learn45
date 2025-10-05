"use client";

import { Card } from "@/components/ui/card";
import { WaypointsIcon } from "lucide-react";

function ContentItem() {
    return (
        <Card
            className="w-full p-4 flex flex-col gap-2 rounded-lg shadow-md md:flex-row md:items-center md:justify-between transition-transform duration-200 hover:scale-[1.01]"
        >
            <div
                className="flex flex-row items-center gap-3 min-w-0 flex-1 cursor-pointer"
            >
                <WaypointsIcon className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <h6 className="flex-1 text-sm font-semibold break-words">
                    Intro to the world of Developement
                </h6>
            </div>

            <div className="flex flex-row items-center justify-end gap-3 mt-2 md:mt-0 flex-shrink-0">
                <p className="text-xs text-orange-500">4m</p>
            </div>

        </Card>
    )
}

export default ContentItem
