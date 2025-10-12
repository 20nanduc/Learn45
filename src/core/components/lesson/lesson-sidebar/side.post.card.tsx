"use client";

import {
    Card,
    CardContent,
    CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import LessonList from "./lesson.list";
import { IPostView } from "@/core/types/post.type";


interface IPostSideCard {
    post: IPostView;
}


export default function PostSideCard(props: IPostSideCard) {
    const { post } = props;
    return (
        <Card className="flex w-full min-h-fit max-h-[80vh] flex-col shadow-none py-0 gap-0">
            <CardHeader className="flex flex-col max-h-[30vh] justify-start p-5">

                {/* 2. Main Title */}
                <h2 className="text-md font-bold">
                    {post.post_title}
                </h2>

                <div className="flex flex-row mt-4 px-2">
                    <div className="flex items-center gap-3">
                        <Image
                            src={post?.tutor_avatar_url}
                            className="h-9 w-9 rounded-full bg-indigo-100 object-cover border-2 border-white shadow-sm"
                            alt={post?.tutor_name || 'Author'}
                            height={36}
                            width={36}
                        />
                        <div className="flex flex-col gap-1">
                            <h6 className="text-base leading-none font-semibold capitalize">
                                {post?.tutor_name}
                            </h6>
                            <span className="text-xs text-muted-foreground font-medium">
                                Published <span className="text-indigo-500 font-medium">{post?.post_published_at}</span>
                            </span>
                        </div>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="p-0">
                {/* replace with list */}
                <LessonList lessons={post?.articles} />

            </CardContent>
            {/* <CardFooter className="flex px-2 pb-0 py-2!">
                <Button variant="ghost" className="grow shrink-0 text-muted-foreground">
                    <CircleChevronLeftIcon />
                    <span className="hidden sm:inline">Previous</span>
                </Button>
                <Button variant="ghost" className="grow shrink-0 text-muted-foreground">
                    <span className="hidden sm:inline">Next</span>
                    <CircleChevronRightIcon />
                </Button>
                <Button variant="ghost" className="grow shrink-0 text-muted-foreground">
                    <ShareIcon /> <span className="hidden sm:inline">Share</span>
                </Button>
            </CardFooter> */}
        </Card>
    );
}
