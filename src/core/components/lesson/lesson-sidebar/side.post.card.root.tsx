"use client";

import React from "react";
import PostSideCard from "./side.post.card";
import { IPostView } from "@/core/types/post.type";

interface ISidePostCard {
    post: IPostView | undefined
}


const SidePostCard = (props: ISidePostCard) => {
    const { post } = props
    if (post) {
        return (
            < div className="h-[85vh] w-full flex flex-col gap-4 justify-start" >
                <PostSideCard post={post} />
            </div >
        )
    }
    return <></>

};

export default SidePostCard;
