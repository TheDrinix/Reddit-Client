import { Post } from '../models/post';
import { formatPostsResponse } from '../utils/posts';
import { Subreddit } from './subreddits';

export const posts = {
    namespaced: true,
    state: {
        subreddit: {},
        posts: [],
        isLoading: false,
    },
    mutations: {
        loadPosts(state: any, response: any) {
            const posts: Post[] = formatPostsResponse(response);
            console.log(posts);
            state.posts = posts;
        },
        saveCurrentSubbreditName(state: any, name: string) {
            console.log(name);
            state.subreddit = name;
        },
    },
    actions: {
        async loadPosts({ state, commit }: any, subreddit: Subreddit) {
            state.isLoading = true;
            const response = await fetch(
                `https://www.reddit.com/${subreddit.name}.json?raw_json=1`
            );
            const jsonResponse = await response.json();
            state.isLoading = false;
            commit('loadPosts', jsonResponse);
            commit('saveCurrentSubbreditName', subreddit);
        },
    },
};
