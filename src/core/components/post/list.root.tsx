"use client";

import useInfinitePosts from "@/core/hooks/post/use.infinite.hook";
import PostItem from "./post.item";
import { Virtuoso } from "react-virtuoso";
import React, { forwardRef } from "react";
import { IPost } from "@/core/types/post.type";
import { Loader2 } from "lucide-react";

function PostList() {
    const { isValidating, hasMore, loadMore, posts } = useInfinitePosts();

    const gridComponent = {
        List: forwardRef<HTMLDivElement, { children?: React.ReactNode }>(
            ({ children }, ref) => (
                <div
                    ref={ref}
                    className="flex flex-col flex-wrap justify-center items-center gap-3 sm:flex-row"
                >
                    {children}
                </div>
            )
        ),
        Footer: () => {
            if (isValidating && hasMore) {
                return (
                    <div className="flex justify-center items-center w-full py-5 text-gray-600">
                        <Loader2 className="animate-spin mr-2" size={20} />
                        Loading more...
                    </div>
                );
            }

            if (!hasMore && posts.length > 0) {
                return (
                    <div className="flex flex-col gap-1  justify-center items-center py-5 text-gray-500" >
                        <p className="text-xs text-center w-full ">Our content creators working for more.</p>
                        <p className="text-base text-gray-500 text-center mt-10">
                            Made with <span className="text-red-500">&hearts;</span> by the Learn45 Team. All rights reserved.
                        </p>
                        <p>&copy;2025 Learn45.com</p>
                    </div>
                );
            }

            return null;
        },
    };
    gridComponent.List.displayName = "GridList";


    if (!isValidating && posts.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center h-[80vh] text-center text-gray-500">
                <h2 className="text-2xl font-semibold mb-2">No Posts Available</h2>
                <p className="text-center text-base">Check back later for fresh updates from our community!</p>
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-3 mt-3 items-center w-full">
            <h1 className="text-3xl font-bold">Top Feeds For You</h1>
            <p className="text-gray-500 mb-5">
                Discover trending posts across our community.
            </p>

            <div className="w-full h-[100vh]">
                <Virtuoso<IPost>
                    useWindowScroll
                    totalCount={posts.length}
                    endReached={() => {
                        if (hasMore && !isValidating) loadMore();
                    }}
                    overscan={100}
                    components={gridComponent}
                    itemContent={(index) => {
                        const post = posts[index];
                        if (!post) return null;
                        return (
                            <div className="py-2 w-full">
                                <PostItem key={index} post={post} />
                            </div>
                        );
                    }}
                />
            </div>
        </div>
    );
}

export default PostList;
