
"use client";

import useSWR from "swr";
import { IPostView } from "@/core/types/post.type";

function usePostLessonHook(postSlug: string) {
    const { data: post, isLoading, error } = useSWR<IPostView>(`/posts/${postSlug}`)

    return { post, isLoading, error }
}

export default usePostLessonHook;

