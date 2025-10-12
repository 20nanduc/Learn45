"use client";

import useLessonHook from "@/core/hooks/lesson/use.lesson.hook";
import AppSpinner from "../spinner/app_spinner";
import RootContent from "./content/root.content";

function LessonRoot() {
    const { lesson, isLoading, error } = useLessonHook()

    if (isLoading) return <div className="h-screen w-full flex justify-center items-center"><AppSpinner /></div>

    if (error) return <div className="h-screen w-full flex justify-center items-center"><p>Lesson Not Found!</p></div>

    if (lesson) {
        return (
            <RootContent lesson={lesson} />
        )
    }
    return <></>
}

export default LessonRoot
