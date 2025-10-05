// Example in a custom hook or component file

import { IPost, IPostsListResponse } from '@/core/types/post.type';
import useSWRInfinite, { SWRInfiniteKeyLoader } from 'swr/infinite';


const PAGE_SIZE = 10;


const getKey: SWRInfiniteKeyLoader<IPostsListResponse> = (pageIndex, previousPageData) => {
    if (previousPageData && !previousPageData.pagination.hasMore) return null;

    const limit = 10;
    const offset = pageIndex * limit;
    return `/api/posts/list?limit=${limit}&offset=${offset}`;
};


const useInfinitePosts = () => {
    const { data, size, setSize, isValidating } = useSWRInfinite<IPostsListResponse>(getKey);

    // Flattening the data safely
    const posts: IPost[] = data ? data.flatMap(page => page.data) : [];
    const hasMore = data ? data[data.length - 1]?.pagination.hasMore : true;

    return { posts, size, setSize, hasMore, isValidating };
};