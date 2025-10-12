"use client";

import useLessonHook from "@/core/hooks/lesson/use.lesson.hook";
import AppSpinner from "../spinner/app_spinner";
import RootContent from "./content/root.content";

function LessonRoot() {
    const { lesson, isLoading, error } = useLessonHook()

    if (isLoading) return <AppSpinner />

    if (error) return <p>Lesson Not Found!</p>

    if (lesson) {
        return (
            <RootContent lesson={lesson} />
        )
    }
    return <></>
}

export default LessonRoot
