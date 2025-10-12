"use client"

import { IPostView } from "@/core/types/post.type"
import { Calendar1Icon, GraduationCapIcon, WaypointsIcon } from "lucide-react"
import Image from "next/image"


interface IPostHeader {
    post: IPostView
}

function PostHeader(props: IPostHeader) {
    const { post } = props;
    return (
        <div className="w-screen px-5 py-6 flex flex-col gap-4 items-end sm:flex-row">
            <div className="aspect-[4/3] w-full max-w-[300px] relative">
                <Image
                    src={post?.post_thumbnail_url}
                    alt="Cover Image"
                    fill
                    sizes="(max-width: 768px) 100vw, 300px"
                    className="object-cover rounded-lg shadow-2xl"
                />
            </div>

            <div className="flex flex-col justify-center flex-1 gap-2 pb-4">
                <h1 className="text-xl font-semibold md:text-4xl tracking-wider">
                    {post?.post_title}
                </h1>
                <h5 className="text-sm text-muted-foreground">
                    {post?.post_description}
                </h5>
                <div className="flex flex-row flex-wrap items-center gap-4 whitespace-nowrap mt-2">
                    <div className="flex items-center gap-1">
                        <WaypointsIcon className="w-4 h-4 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">
                            {post?.post_content_list?.length} Materials
                        </span>
                    </div>
                    <div className="flex items-center gap-1">
                        <GraduationCapIcon className="w-3 h-3 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">
                            {post?.post_duration}.min Learn
                        </span>
                    </div>

                    <div className="flex items-center gap-1">
                        <Calendar1Icon className="w-3 h-3 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">
                            {post?.post_published_at}
                        </span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default PostHeader
