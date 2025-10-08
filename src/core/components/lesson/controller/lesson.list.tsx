"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils"; // shadcn utility to merge class names
import { IPostLessonView } from "@/core/types/post.type";

interface ILessonList {
    lessons: IPostLessonView[];
    activeLessonId: string;
};

export default function LessonList(props: ILessonList) {

    const { lessons, activeLessonId } = props;
    const activeRef = useRef<HTMLDivElement | null>(null);

    // Automatically scroll active item into view
    useEffect(() => {
        if (activeRef.current) {
            activeRef.current.scrollIntoView({
                behavior: "smooth",
                block: "center",
            });
        }
    }, [activeLessonId]);

    return (
        <div className="h-full overflow-y-auto divide-y divide-border bg-muted/30 rounded-md border">
            {lessons.map((item: IPostLessonView, index: number) => {
                const isActive = item?.slug === activeLessonId;
                return (
                    <div
                        key={item.slug}
                        ref={isActive ? activeRef : null}
                        className={cn(
                            "flex items-center gap-3 p-2 cursor-pointer transition-all duration-200",
                            isActive
                                ? "bg-primary/10 border-l-4 border-primary text-primary font-medium"
                                : "hover:bg-muted text-foreground/80"
                        )}
                    >
                        <div className="text-sm font-semibold w-5 flex-none text-center">
                            {index + 1}
                        </div>

                        <div className="truncate text-sm">{item.title}</div>
                    </div>
                );
            })}
        </div>
    );
}
