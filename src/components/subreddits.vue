<script setup lang="ts">
import Subreddit from './subreddit.vue';
const subreddits = [
    {
        name: 'r/pcmasterrace',
        imgPath:
            'https://b.thumbs.redditmedia.com/PN7Sv1axRx971W5-d_e-IC_RMiP2Sso8IqdRGq3UY9Y.png',
    },
    {
        name: 'r/pcmasterrace',
        imgPath:
            'https://b.thumbs.redditmedia.com/PN7Sv1axRx971W5-d_e-IC_RMiP2Sso8IqdRGq3UY9Y.png',
    },
    {
        name: 'r/pcmasterrace',
        imgPath:
            'https://b.thumbs.redditmedia.com/PN7Sv1axRx971W5-d_e-IC_RMiP2Sso8IqdRGq3UY9Y.png',
    },
];
</script>

<template>
    <div
        class="w-full bg-neutral-100 dark:bg-zinc-800 dark:text-white flex flex-col p-4 rounded-lg shadow-xl"
    >
        <h3 class="text-xl">Subreddits</h3>
        <hr class="my-2 dark:border-zinc-900" />
        <Subreddit v-for="subreddit in subreddits" :subreddit="subreddit" />
    </div>
</template>
