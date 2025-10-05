"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { UserIcon } from "lucide-react";

function PostAuthor() {
    return (
        <div className="w-screen px-5 py-5 flex flex-col gap-2 items-center justify-center md:flex-row md:px-10 ">
            <h5 className="text-xs text-muted-foreground">Authered by:</h5>
            <Avatar className="w-13 h-13">
                <AvatarImage
                    src={"https://cdn.learn45.com/thumbnails/posts/740ad60c-df9d-4375-b9f9-94786a5260dd/thumbnail.jpg"}
                    loading="lazy"
                    className="w-full h-full object-cover object-center"
                />
                <AvatarFallback className="text-xs">
                    <UserIcon className="w-5 h-5" />
                </AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-1">
                <h5 className="text-sm font-semibold">Sachin Dev</h5>
                <h5 className="text-xs text-muted-foreground">
                    Software Specialist
                </h5>
            </div>
        </div>
    )
}

export default PostAuthor
