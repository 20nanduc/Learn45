
export interface IPost {
  post_id: number;
  title: string;
  author: string;
  summary: string;
  read_time: string;
}

export interface IPagination {
  totalCount: number;
  nextOffset: number;
  hasMore: boolean;
}

export interface IPostsListResponse {
  data: IPost[];
  pagination: IPagination;
}