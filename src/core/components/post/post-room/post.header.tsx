"use client"

import { Calendar1Icon, EyeIcon, GraduationCapIcon } from "lucide-react"
import Image from "next/image"

function PostHeader() {
    return (
        <div className="w-screen px-5 py-6  flex flex-col gap-4 items-end md:flex-row md:px-10">
            <div className="aspect-[4/3] w-full max-w-[300px] relative">
                <Image
                    src={"https://cdn.learn45.com/thumbnails/posts/740ad60c-df9d-4375-b9f9-94786a5260dd/thumbnail.jpg"}
                    alt="Cover Image"
                    fill
                    sizes="(max-width: 768px) 100vw, 300px"
                    className="object-cover rounded-lg shadow-2xl"
                />
            </div>

            <div className="flex flex-col gap-2 pb-4">
                <h1 className="text-xl font-semibold md:text-4xl tracking-wider">
                    Python Basics For Developer
                </h1>
                <h5 className="text-sm text-muted-foreground">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil porro, perspiciatis est quas, quam laudantium tempore harum, ad consectetur atque exercitationem commodi consequuntur adipisci? Voluptas ex natus saepe ipsum alias.
                </h5>
                <div className="flex flex-row flex-wrap items-center gap-4 whitespace-nowrap mt-2">
                    <div className="flex items-center gap-1">
                        <EyeIcon className="w-4 h-4 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">
                            not available
                        </span>
                    </div>
                    <div className="flex items-center gap-1">
                        <GraduationCapIcon className="w-3 h-3 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">
                            10 minute learn
                        </span>
                    </div>

                    <div className="flex items-center gap-1">
                        <Calendar1Icon className="w-3 h-3 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">
                            18hrs ago
                        </span>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default PostHeader
