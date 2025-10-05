"use client";

import PostAuthor from "./author.section";
import PostContentRoot from "./post.content.root";
import PostHeader from "./post.header";

function Root() {
    return (
        <div className="flex flex-col gap-3">
            <PostHeader />
            <PostAuthor />
            <PostContentRoot/>
        </div>
    )
}

export default Root
