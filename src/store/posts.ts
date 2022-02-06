export const posts = {
    namespaced: true,
    state: {
        number: 20,
    },
    mutations: {
        increment(state: any) {
            state.number++;
        },
    },
    actions: {},
};
