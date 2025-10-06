"use client";

import { IPost, TPaginatedResponse } from '@/core/types/post.type';
import useSWRInfinite, { SWRInfiniteKeyLoader } from 'swr/infinite';



const getKey: SWRInfiniteKeyLoader = (pageIndex, previousPageData) => {
    if (previousPageData && !previousPageData.hasMore) return null;
    const lastPost = previousPageData?.lastPost;
    const param = lastPost ? `?lastPost=${lastPost}` : "";
    return `/posts/list${param}`;
};


const useInfinitePosts = () => {
    const { data, size, setSize, isValidating } = useSWRInfinite<TPaginatedResponse>(getKey);

    // Flattening the data safely
    const posts : IPost[]= data ? data.flatMap(page => page.posts) : [];
    const hasMore = data ? data[data.length - 1]?.hasMore : true;

    const loadMore = () => {
        if (!isValidating && hasMore) setSize(size + 1);
    };


    console.log("paginated post swr response", posts);

    return { isValidating, hasMore, posts, loadMore };
};

export default useInfinitePosts;