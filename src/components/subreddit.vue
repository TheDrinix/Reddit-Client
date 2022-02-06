<script setup lang="ts">
const props = defineProps<{
    subreddit: {
        name: string;
        imgPath: string;
    };
}>();
</script>

<template>
    <div class="py-1">
        <a
            v-on:click.prevent
            class="h-12 p-2 rounded-md flex items-center cursor-pointer bg-gray-200 dark:bg-neutral-700 hover:bg-gray-300 hover:border-2 hover:border-zinc-800 hover:border-solid transition-all"
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
