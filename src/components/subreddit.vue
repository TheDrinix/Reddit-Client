<script setup lang="ts">
import { useStore } from 'vuex';

const store = useStore();
const props = defineProps<{
    subreddit: {
        name: string;
        imgPath: string;
    };
    index: number;
    isSearchResults?: boolean;
}>();

const handleSubredditMove = () => {
    if (props.isSearchResults) {
        store.commit('subreddits/addSubreddit', props.subreddit);
    } else {
        store.commit('subreddits/removeSubreddit', props.index);
    }

    const toSave = JSON.stringify(store.state.subreddits.subreddits);
    localStorage.setItem('savedSubreddits', toSave);
};
</script>

<template>
    <div class="flex flex-center py-1 w-11/12 lg:w-full">
        <a
            v-on:click.prevent
            class="h-12 p-2 pr-4 w-full rounded-l-md inline-flex items-center cursor-pointer bg-gray-200 dark:bg-neutral-700 hover:bg-gray-300 dark:hover:bg-stone-700 outline outline-0 outline-neutral-200 dark:outline-neutral-600 hover:outline-2 hover:outline-pink-600 dark:hover:outline-pink-600 hover:mr-2px transition-all duration-100"
        >
            <img
                :src="
                    props.subreddit.imgPath
                        ? props.subreddit.imgPath
                        : '/src/assets/logo.png'
                "
                :alt="props.subreddit.name"
                class="h-8 rounded-full inline-block"
            />
            <span class="pl-2 text-lg">{{ props.subreddit.name }}</span>
        </a>
        <a
            @click.prevent="handleSubredditMove"
            class="h-12 w-12 p-2 rounded-r-md inline-flex items-center justify-center cursor-pointer bg-gray-200 dark:bg-neutral-700 hover:bg-gray-300 dark:hover:bg-stone-700 outline outline-0 outline-neutral-200 dark:outline-neutral-600 hover:outline-2 hover:outline-pink-600 dark:hover:outline-pink-600 transition-all duration-100"
        >
            <svg
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="bi bi-x-lg h-4 w-4"
                :class="[props.isSearchResults ? 'rotate-45' : '']"
            >
                <path
                    d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z"
                />
            </svg>
        </a>
    </div>
</template>
