"use client"

import { IPostView } from "@/core/types/post.type"
import { Calendar1Icon, GraduationCapIcon, WaypointsIcon } from "lucide-react"
import Image from "next/image"
import RelativeTime from "../../relative-time"


interface IPostHeader {
    post: IPostView
}

function PostHeader(props: IPostHeader) {
    const { post } = props;
    return (
        <div className="w-full p-8 flex flex-col gap-4 sm:flex-row">
            <div className="aspect-[4/3] w-full max-w-[300px] relative">
                <Image
                    src={post?.post_thumbnail_url}
                    alt="Cover Image"
                    fill
                    sizes="(max-width: 768px) 100vw, 300px"
                    className="object-cover rounded-lg shadow-2xl"
                />
            </div>

            <div className="flex flex-col justify-end pb-2 flex-1 gap-2">
                <h1 className="text-2xl font-extrabold sm:text-4xl tracking-wider">
                    {post?.post_title}
                </h1>
                <p className="m-0">
                    {post?.post_description}
                </p>
                <div className="flex flex-row flex-wrap items-center gap-4 whitespace-nowrap mt-2">
                    <div className="flex items-center gap-1">
                        <WaypointsIcon className="w-4 h-4 text-chart-3" />
                        <span className="text-xs text-chart-3">
                            {post?.post_content_list?.length} Materials
                        </span>
                    </div>
                    <div className="flex items-center gap-1">
                        <GraduationCapIcon className="w-3 h-3 text-chart-3" />
                        <span className="text-xs text-chart-3">
                            {post?.post_duration}.min Learn
                        </span>
                    </div>

                    <div className="flex items-center gap-1">
                        <Calendar1Icon className="w-3 h-3 text-chart-3" />
                        <span className="text-xs text-chart-3">
                           <RelativeTime date= {post?.post_published_at}/>
                        </span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default PostHeader
