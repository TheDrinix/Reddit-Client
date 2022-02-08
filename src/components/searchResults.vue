<script setup lang="ts">
import { computed, ComputedRef } from 'vue';
import { useStore } from 'vuex';
import { Subreddit as SubredditType } from '../store/subreddits';
import Subreddit from './subreddit.vue';

const emit = defineEmits<{
    (e: 'toggle-show'): void;
}>();

const store = useStore();

const searchResults: ComputedRef<SubredditType[]> = computed(() => {
    return store.state.subreddits.searchResults;
});

const searchResultsLoading = computed(() => {
    return store.state.subreddits.searchResultsLoading;
});
</script>

<template>
    <div
        class="fixed z-40 top-16 w-screen h-screen flex items-start justify-center bg-gray-700 dark:bg-opacity-10 bg-opacity-30 i backdrop-blur dark:backdrop-blur-xl overflow-y-scroll"
    >
        <div
            class="flex flex-col items-center justify-center w-5/6 md:w-2/3 p-4 mt-4 dark:text-white bg-neutral-100 dark:bg-neutral-900 rounded-md scrollbar"
        >
            <h2 class="text-xl">Search Results</h2>
            <button
                class="absolute h-4 w-4 top-8 self-end"
                @click="emit('toggle-show')"
            >
                <svg
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="bi bi-x-lg h-4 w-4 hover:fill-pink-600 transition-colors duration-75"
                >
                    <path
                        d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z"
                    />
                </svg>
            </button>
            <hr class="py-2" />
            <Subreddit
                v-for="(subreddit, index) in searchResults"
                v-if="!searchResultsLoading"
                :subreddit="subreddit"
                :index="index"
                :isSearchResults="true"
            />
            <div
                class="loader border-neutral-700 border-t-pink-600 dark:border-t-pink-600 dark:border-zinc-300"
                v-else
            ></div>
        </div>
    </div>
</template>

<style lang="scss">
.scrollbar::-webkit-scrollbar {
    width: 0.5rem;
}

/* Track */
.scrollbar::-webkit-scrollbar-track {
    background: #f1f1f1;
}

/* Handle */
.scrollbar::-webkit-scrollbar-thumb {
    background: #888;
}

.loader {
    border: 16px solid #f3f3f3; /* Light grey */
    border-top: 16px solid #3498db; /* Blue */
    border-radius: 50%;
    width: 120px;
    height: 120px;
    animation: spin 2s linear infinite;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>
