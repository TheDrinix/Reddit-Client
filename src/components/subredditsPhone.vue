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
        class="flex flex-col items-center py-4 fixed w-full bg-zinc-100 dark:bg-neutral-800 dark:text-white z-50"
    >
        <Subreddit v-for="subreddit in subreddits" :subreddit="subreddit" />
    </div>
</template>
