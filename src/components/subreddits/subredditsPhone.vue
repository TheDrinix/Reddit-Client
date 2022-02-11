<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from 'vuex';
import Subreddit from '../subreddits/subreddit.vue';

const store = useStore();

const subreddits = computed(() => {
    return store.state.subreddits.subreddits;
});
</script>

<template>
    <div
        class="flex flex-col items-center py-4 fixed w-full bg-zinc-100 dark:bg-neutral-800 dark:text-white z-50"
    >
        <Subreddit
            v-for="(subreddit, index) in subreddits"
            :subreddit="subreddit"
            :index="index"
        />
    </div>
</template>
