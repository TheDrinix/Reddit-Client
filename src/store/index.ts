import { createStore } from 'vuex';
import { posts } from './posts';
import { subreddits } from './subreddits';

export default createStore({
    state: {
        searchTerm: '',
    },
    mutations: {
        updateSearchTerm(state, searchTerm: string) {
            state.searchTerm = searchTerm;
        },
    },
    actions: {},
    modules: {
        posts,
        subreddits,
    },
});
