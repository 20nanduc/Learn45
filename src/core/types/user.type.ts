

export interface IUSer {
    id: string;
    user_id: string;
    name: string;
    avatar_url: string | null,
    last_updated: string,
    is_verfied: boolean,
    new_user: boolean,
    slug: string | null
}