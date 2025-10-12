"use client";

import usePostHook from "@/core/hooks/post/use.post.hook";
import PostAuthor from "./author.section";
import PostContentRoot from "./post.content.root";
import PostHeader from "./post.header";
import AppSpinner from "../../spinner/app_spinner";

function Root() {

    const { post, isLoading, error } = usePostHook()


    if (isLoading) return <div className="h-screen w-full flex justify-center items-center"><AppSpinner /></div>

    if (error) return <div className="h-screen w-full flex justify-center items-center"><h3 className="text-lg text-center">Post Not Found!.</h3> </div>

    if (post) {
        return (
            <div className="flex flex-col gap-3 justify-center items-center">
                <PostHeader post={post} />
                <PostAuthor post={post} />
                <PostContentRoot materials={post?.articles} />
            </div>
        )
    }
}

export default Root
