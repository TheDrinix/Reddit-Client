<script setup lang="ts">
import { computed, ComputedRef } from 'vue';
import { useStore } from 'vuex';
import { Subreddit as SubredditInt } from '../../store/subreddits';
import Subreddit from './subreddit.vue';

const store = useStore();

const subreddits = computed(() => {
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
        class="flex flex-col items-center py-4 absolute w-full bg-zinc-100 dark:bg-neutral-800 dark:text-white z-50"
    >
        <p class="text-left w-11/12">Current subreddit:</p>
        <Subreddit
            :subreddit="currentSubreddit"
            :index="0"
            :isSearchResults="isCurrentSaved"
            :hideRemove="!isCurrentSaved"
        />
        <hr class="my-2 border-gray-200 dark:border-zinc-900" />
        <h3 class="text-xl text-left w-11/12">Saved subreddits:</h3>
        <Subreddit
            v-for="(subreddit, index) in subreddits"
            :subreddit="subreddit"
            :index="index"
        />
    </div>
</template>
