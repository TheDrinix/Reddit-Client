import { Post } from "../models/post";
import { formatPostsResponse } from "../utils/posts";

export const posts = {
    namespaced: true,
    state: {
        subreddit: "",
        posts: [],
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
        async loadPosts({ commit }: any, subredditName: string) {
            const response = await fetch(
                `https://www.reddit.com/${subredditName}.json?raw_json=1`
            );
            const jsonResponse = await response.json();
            commit("loadPosts", jsonResponse);
            commit("saveCurrentSubbreditName", subredditName);
        },
    },
};
