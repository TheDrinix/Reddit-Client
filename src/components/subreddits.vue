<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from 'vuex';
import Subreddit from './subreddit.vue';

const store = useStore();

const subreddits = computed(() => {
    return store.state.subreddits.subreddits;
});
</script>

<template>
    <div
        class="w-full bg-neutral-100 dark:bg-zinc-800 dark:text-white flex flex-col p-4 rounded-lg shadow-xl"
    >
        <h3 class="text-xl">Subreddits</h3>
        <hr class="my-2 dark:border-zinc-900" />
        <Subreddit
            v-for="(subreddit, index) in subreddits"
            :subreddit="subreddit"
            :index="index"
        />
    </div>
</template>
