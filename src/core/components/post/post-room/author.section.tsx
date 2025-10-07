"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { IPostView } from "@/core/types/post.type";
import { UserIcon } from "lucide-react";

interface IPostAuthor {
    post: IPostView
}

function PostAuthor(props: IPostAuthor) {

    const { post } = props;

    return (
        <div className="w-screen px-5 py-5 flex flex-col gap-2 items-center justify-center md:flex-row">
            <h5 className="text-xs text-muted-foreground">Authered by:</h5>
            <Avatar className="w-16 h-16">
                <AvatarImage
                    src={post?.tutor_avatar_url}
                    loading="lazy"
                    className="w-full h-full object-cover object-center"
                />
                <AvatarFallback className="text-xs">
                    <UserIcon className="w-5 h-5" />
                </AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-1">
                <h5 className="text-sm font-semibold uppercase">{post.tutor_name}</h5>
                <h5 className="text-xs text-muted-foreground">
                    {post?.tutor_profession}
                </h5>
            </div>
        </div>
    )
}

export default PostAuthor
