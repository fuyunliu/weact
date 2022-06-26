export interface User {
    id: number;
    username: string;
    nickname: string;
    avatar: string;
    date_joined: string;
    article_count: number;
    post_count: number;
    following_count: number;
    follower_count: number;
    is_following: boolean;
    is_followed: boolean;
    about_me: string;
}

export interface Category {
    id: number;
    name: string;
    desc: string;
    slug: string;
}

export interface Article {
    id: number;
    author: User;
    excerpt: string;
    content_type: string;
    is_liked: boolean;
    like_count: number;
    comment_count: number;
    collect_count: number;
    title: string;
    body: string;
    body_html: string;
    status: number;
    view_count: number;
    created: string;
    updated: string;
    slug: string;
    category: Category;
    topics: Array<string>;
}
