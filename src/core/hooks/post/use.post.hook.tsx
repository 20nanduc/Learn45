
"use client";

import useSWR from "swr";
import { useParams } from "next/navigation";
import { IPostView } from "@/core/types/post.type";



function usePostHook() {

    const params = useParams();
    const post_slug = params?.post_slug ?? '';

    const { data: post, isLoading, error } = useSWR<IPostView>(`/posts/${post_slug}`)

    return { post, isLoading, error }
}

export default usePostHook;

