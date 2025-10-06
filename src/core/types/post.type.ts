


export interface IPost {
  id: string;
  author_id: string;
  category_id: string;
  description: string,
  duration: number,
  created_at: string,
  published_at: string,
  slug: string,
  thumbnail_url: string,
  title: string,
  content_list: string[],
}

export type TPaginatedResponse = {
  posts: IPost[];
  lastPost: string | null;
  hasMore: boolean;
}

