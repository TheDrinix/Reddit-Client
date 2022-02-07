<script setup lang="ts">
const props = defineProps<{
    subreddit: {
        name: string;
        imgPath: string;
    };
}>();
</script>

<template>
    <div class="py-1 w-11/12 lg:w-full">
        <a
            v-on:click.prevent
            class="h-12 p-2 rounded-md flex items-center cursor-pointer bg-gray-200 dark:bg-neutral-700 hover:bg-gray-300 dark:hover:bg-stone-700 outline outline-0 outline-neutral-200 dark:outline-neutral-600 hover:outline-2 hover:outline-pink-600 dark:hover:outline-pink-600 transition-all duration-100"
        >
            <img
                :src="props.subreddit.imgPath"
                :alt="props.subreddit.name"
                class="h-8 rounded-full inline-block"
            />
            <span class="pl-2 text-lg">{{ props.subreddit.name }}</span>
        </a>
    </div>
</template>
