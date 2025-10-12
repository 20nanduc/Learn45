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
                    className="flex flex-col flex-wrap justify-center items-stretch gap-3 sm:flex-row"
                >
                    {children}
                </div>
            )
        ),
        Footer: () => {
            if (isValidating && hasMore) {
                return (
                    <div className="flex justify-center mt-2 items-center w-full text-gray-600">
                        <Loader2 className="animate-spin mr-2" size={20} />
                        Loading more...
                    </div>
                );
            }

            if (!hasMore && posts.length > 0) {
                return (
                    <div className="flex flex-col gap-1 mt-2 justify-center items-center text-gray-500" >
                        <p className="text-xs text-center">Our content creators working for more</p>

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
        <div className="flex flex-col gap-2 py-8 items-center w-full">
            <h1 className="text-3xl sm:text-4xl font-bold text-center">Learn 45 Minutes Daily</h1>
            <p className="max-w-xs text-center">
                Discover trending topics
            </p>

            <div className="w-full p-8 h-[100vh] scroll-hide">
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
                            <PostItem key={index} post={post} />
                        );
                    }}
                />
            </div>
        </div>
    );
}

export default PostList;
