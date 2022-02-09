import { Post } from "../models/post";
import { formatPostsResponse } from "../utils/posts";

export const posts = {
    namespaced: true,
    state: {
        posts: [],
    },
    mutations: {
        loadPosts(state: any, response: any) {
            const posts: Post[] = formatPostsResponse(response)
            state.posts = posts;
        },
    },
    actions: {
        async loadPosts({ commit }: any, subredditName: string) {
            const response = await fetch(`https://www.reddit.com/${subredditName}.json`)
            const jsonResponse = await response.json()
            commit('loadPosts', jsonResponse)
        },
    },
};
