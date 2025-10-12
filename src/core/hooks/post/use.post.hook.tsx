
"use client";

import useSWR from "swr";
import { useParams } from "next/navigation";
import { IPostView } from "@/core/types/post.type";



function usePostHook() {

    const params = useParams<{ postSlug?: string }>();
    const postSlug = params?.postSlug ?? '';

    const { data: post, isLoading, error } = useSWR<IPostView>(`/posts/${postSlug}`)

    return { post, isLoading, error }
}

export default usePostHook;

