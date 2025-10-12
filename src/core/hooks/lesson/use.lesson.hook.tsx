"use client";

import useSWR from "swr";
import { useParams } from "next/navigation";
import { ILesson } from "@/core/types/lesson.type";



function useLessonHook() {

    const params = useParams<{ lessonSlug?: string }>();
    const lesson_slug = params?.lessonSlug ?? '';

    const { data: lesson, isLoading, error } = useSWR<ILesson>(`/posts/lesson/${lesson_slug}`)

    console.log("lesson", lesson);

    return { lesson, isLoading, error }
}

export default useLessonHook
