"use client";

import useLessonHook from "@/core/hooks/lesson/use.lesson.hook";
import { useEffect, useState } from "react";
import usePostLessonHook from "@/core/hooks/post/use.post.lesson.hook";
import SidePostCard from "@/core/components/lesson/lesson-sidebar/side.post.card.root";
import AppSpinner from "@/core/components/spinner/app_spinner";

export default function LessonLayout({ children }: { children: React.ReactNode }) {

    const { lesson, isLoading: lessonLoading } = useLessonHook();

    const [postSlug, setPostSlug] = useState<string>("");


    useEffect(() => {
        if (lesson?.post_slug) setPostSlug(lesson.post_slug);
    }, [lesson]);

    const { post} = usePostLessonHook(postSlug);

    return (
        <div className="h-[calc(100vh-3rem)] flex overflow-hidden">
            <main className="flex-1 overflow-y-auto scrollbar-hide pb-10 transform transition-transform duration-300 ease-in flex flex-col">
                {
                    lessonLoading ? <AppSpinner /> : <div className="flex-1">{children}</div>
                }
            </main>
            <aside className="hidden p-6 border-l-2 w-full max-w-3xs lg:max-w-xl transform transition-transform duration-300 ease-in sm:block ">

                <SidePostCard post={post} />
            </aside>

        </div>
    );
}
