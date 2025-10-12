"use client";
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { IPost } from "@/core/types/post.type"
import { Clock3Icon, ClockArrowDownIcon, GraduationCapIcon, WaypointsIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link";


interface IPostItem {
    post: IPost
}


function PostItem(props: IPostItem) {
    const { post } = props;
    return (
        <Link href={`/learn/${post?.slug}`} prefetch={true}>
            <Card className="h-full max-w-xl flex flex-col p-4 border-r-0  shadow-md cursor-pointer hover:shadow-lg transition-transform duration-200 hover:scale-[1.01]">
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="relative w-full md:w-[300px] aspect-[4/3] overflow-hidden rounded-md bg-gray-500 flex-shrink-0">
                        <Image
                            src={post?.thumbnail_url}
                            alt={post?.title}
                            loading="lazy"
                            fill
                            sizes="(max-width: 768px) 100vw, 160px"
                            className="object-cover"
                        />
                    </div>
                    {/* Content */}
                    <div className="flex flex-col gap-2 flex-1 min-w-0">

                        {/* Title */}
                        <h3 className="text-base max-h-20 font-normal line-clamp-3 min-w-0">
                            {post?.title}
                        </h3>



                        {/* meta data */}
                        <div className="flex flex-col gap-3  flex-1 min-w-0">

                            <p className="text-muted-foreground m-0 text-xs text-justify font-medium leading-snug line-clamp-2 break-words min-w-0">
                                {post?.description}
                            </p>

                            <div className="flex flex-wrap gap-3 min-w-0">
                                <div className="flex gap-1 min-w-0">
                                    <WaypointsIcon className="w-4 h-4 text-[#f08121]" />
                                    <span className="text-xs text-[#f08121] truncate">{post?.content_list.length} Materials</span>
                                </div>

                                <div className="flex gap-1 min-w-0">
                                    <GraduationCapIcon className="w-4 h-4 text-[#f08121]" />
                                    <span className="text-xs text-[#f08121] whitespace-nowrap">{post?.duration} {" "} Min Read</span>
                                </div>

                                <div className="flex gap-1 min-w-0">
                                    <Clock3Icon className="w-4 h-4 text-[#f08121]" />
                                    <span className="text-xs text-[#f08121] whitespace-nowrap">{post?.published_at}</span>
                                </div>
                            </div>

                            <div className="mt-auto">
                                <Button
                                    variant="default"
                                    aria-label={`Read Post`}
                                    className="flex items-center justify-center w-full"
                                >
                                    <span className="text-sm font-bold text-center">{post?.duration}m Learn</span>
                                    <ClockArrowDownIcon className="w-4 h-4 font-bold" />
                                </Button>
                            </div>

                        </div>
                    </div>

                </div>
            </Card>
        </Link>
    )
}

export default PostItem
