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
        <div className="w-screen p-8 flex flex-col gap-2 items-center justify-center sm:flex-row">
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
            <div className="flex flex-col gap-1 justify-center items-center sm:items-start ">
                <h5 className="max-w-xs uppercase line-clamp-2">{post.tutor_name}</h5>
                <p className="m-0 max-w-xs text-muted-foreground line-clamp-2">
                    {post?.tutor_profession}
                </p>
            </div>
        </div>
    )
}

export default PostAuthor
