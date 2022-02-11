<script setup lang="ts">
import { Comment } from '../../../models/comment';

const { comment } = defineProps<{
    comment: Comment;
}>();
</script>

<template>
    <div class="p-2 my-4 bg-gray-200 dark:bg-neutral-900 rounded-md">
        <h3 class="font-semibold text-pink-600">
            {{ comment.author }}
        </h3>
        <hr class="border-gray-300 dark:border-neutral-800" />
        <div v-html="comment.content"></div>
        <!-- <p>{{ comment.upvotes }}</p> -->
    </div>
</template>
