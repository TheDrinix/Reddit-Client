<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { useStore } from 'vuex';
import Header from './components/header.vue';
import Post from './components/post.vue';
import Subreddits from './components/subreddits.vue';
import SubredditsPhone from './components/subredditsPhone.vue';
import SearchResults from './components/searchResults.vue';
import { formatPostsResponse } from './utils/posts'

const store = useStore();

onMounted(() => {
    const loadedTheme = localStorage.getItem('theme');
    if (loadedTheme) {
        if (loadedTheme === 'dark') {
            toggleTheme();
        }
    } else {
        const isDark = window.matchMedia(
            '(prefers-color-scheme: dark)'
        ).matches;
        if (isDark) toggleTheme();
    }

    store.commit('subreddits/loadSavedSubreddits');
    store.dispatch('posts/loadPosts', 'r/popular')
});

let currentTheme = ref('light');
const toggleTheme = () => {
    document.body.className = currentTheme.value === 'dark' ? '' : 'dark';
    currentTheme.value = currentTheme.value === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', currentTheme.value);
};

let mobileMenuOpened = ref(false);
const toggleMobileMenu = () => {
    mobileMenuOpened.value = !mobileMenuOpened.value;
};

let searchResultsShown = ref(false);
const toggleSearchResults = () => {
    searchResultsShown.value = !searchResultsShown.value;
};

const posts = computed(() => {
    return store.state.posts.posts
})

</script>

<template>
    <div class="bg-stone-200 dark:bg-zinc-900 transition-colors min-h-screen">
        <Header
            :mobileMenuOpened="mobileMenuOpened"
            @toggleMobileMenu="toggleMobileMenu"
            @search="toggleSearchResults"
        />
        <transition name="fade">
            <SubredditsPhone v-if="mobileMenuOpened" />
        </transition>
        <main
            class="grid grid-cols-12 gap-4 w-11/12 lg:w-10/12 2xl:w-8/12 mt-4 mx-auto font-sans"
        >
            <div class="col-span-12 lg:col-span-8">
                <Post v-for="post in posts" :data="post" />
            </div>
            <div class="hidden lg:block lg:col-span-4">
                <Subreddits />
            </div>
        </main>
        <div class="">
            <img
                src="./assets/cloudy-svgrepo-com.svg"
                alt="theme-toggle"
                class="h-16 fixed bottom-4 right-4 z-50 cursor-pointer rounded-full"
                v-on:click="toggleTheme"
                v-if="currentTheme === 'dark'"
            />
            <img
                src="./assets/moon-svgrepo-com.svg"
                alt="theme-toggle"
                class="h-16 fixed bottom-4 right-4 z-50 cursor-pointer rounded-full -rotate-45"
                v-on:click="toggleTheme"
                v-else
            />
        </div>
        <SearchResults
            v-if="searchResultsShown"
            @toggle-show="toggleSearchResults"
        />
    </div>
</template>

<style lang="scss">
body {
    background-color: #e2e2e2;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.35s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
