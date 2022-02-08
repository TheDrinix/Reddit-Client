export const posts = {
    namespaced: true,
    state: {
        posts: [],
    },
    mutations: {
        loadPosts() {},
    },
    actions: {
        loadPosts({ commit }: any, name: string) {},
    },
};
