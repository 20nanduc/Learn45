


// post type for listing
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
};

export type TPaginatedResponse = {
  posts: IPost[];
  lastPost: string | null;
  hasMore: boolean;
};


export interface IPostLessonView {
  slug: string,
  title: string,
  duration: number
};

// post type for post view
export interface IPostView {
  post_slug: string,
  post_title: string,
  post_description: string,
  post_thumbnail_url: string,
  post_duration: number,
  post_published_at: string,
  tutor_slug: string,
  tutor_name: string,
  tutor_profession: string,
  tutor_avatar_url: string,
  tutor_bio: string,
  post_content_list: string[],
  articles: IPostLessonView[]
};

