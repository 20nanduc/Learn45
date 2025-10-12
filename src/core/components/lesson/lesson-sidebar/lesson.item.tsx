"use client";

import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { IPostLessonView } from "@/core/types/post.type";
import Link from "next/link";

export interface LessonItemProps {
    item: IPostLessonView;
    index: number;
    isActive: boolean;
}

const LessonItem = forwardRef<HTMLDivElement, LessonItemProps>(
    ({ item, index, isActive }, ref) => {

        return (
            <Link href={`/lesson/${item.slug}`} replace={true} prefetch={true}>
                <div
                    ref={ref}
                    className={cn(
                        "flex items-center m-1 rounded-sm  gap-3 p-4 cursor-pointer transition-all duration-200",
                        isActive
                            ? "bg-primary/10 border-l-4 border-primary text-primary font-medium"
                            : "hover:bg-muted text-foreground/80 border-2 border-primary-foreground"
                    )}
                >
                    <div className="text-2xl font-semibold w-5 flex-none text-center">
                        {index + 1}
                    </div>

                    <div className="truncate text-sm">{item.title}</div>
                </div>
            </Link>
        );
    }
);

LessonItem.displayName = "LessonItem";
export default LessonItem;
