<script setup lang="ts">
import { computed, ComputedRef } from 'vue';
import { useStore } from 'vuex';
import { Subreddit as SubredditInt } from '../../store/subreddits';
import Subreddit from './subreddit.vue';

const store = useStore();

const subreddits: ComputedRef<SubredditInt[]> = computed(() => {
    return store.state.subreddits.subreddits;
});

const currentSubreddit: ComputedRef<SubredditInt> = computed(() => {
    return store.state.posts.subreddit;
});

const isCurrentSaved: ComputedRef<boolean> = computed(() => {
    const index = subreddits.value.findIndex((subreddit: SubredditInt) => {
        return subreddit.name === currentSubreddit.value.name;
    });
    if (index === -1) {
        return true;
    } else {
        return false;
    }
});
</script>

<template>
    <div
        class="w-full bg-neutral-100 dark:bg-zinc-800 dark:text-white flex flex-col p-4 rounded-lg shadow-xl"
    >
        <h3 class="text-xl">Subreddits</h3>
        <hr class="my-2 border-gray-200 dark:border-zinc-900" />
        <p>Current subreddit:</p>
        <Subreddit
            :subreddit="currentSubreddit"
            :index="0"
            :isSearchResults="isCurrentSaved"
            :hideRemove="!isCurrentSaved"
        />
        <hr class="my-2 border-gray-200 dark:border-zinc-900" />
        <Subreddit
            v-for="(subreddit, index) in subreddits"
            :subreddit="subreddit"
            :index="index"
        />
    </div>
</template>
