"use client";

import { useEffect, useRef } from "react";
import { useParams } from "next/navigation";

function useSideLessonListController() {

    const parms = useParams<{ lessonSlug?: string }>()
    const activeLessonId: string = parms.lessonSlug ?? "";
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


    return { activeLessonId, activeRef }
}

export default useSideLessonListController
