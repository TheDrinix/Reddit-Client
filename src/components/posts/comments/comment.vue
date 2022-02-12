<script setup lang="ts">
import { Comment } from '../../../models/comment';

const { comment, isLoading } = defineProps<{
    comment: Comment;
    isLoading?: boolean;
}>();
</script>

<template>
    <div class="p-2 my-4 mx-2 bg-gray-200 dark:bg-neutral-900 rounded-md">
        <div>
            <img src="" alt="" />
            <h3
                class="font-semibold text-pink-600 text-sm"
                :class="[
                    isLoading
                        ? [
                              'h-4',
                              'w-1/6',
                              'bg-gray-300',
                              'dark:bg-zinc-700',
                              'rounded',
                          ]
                        : '',
                ]"
            >
                {{ comment.author }}
            </h3>
        </div>
        <hr
            class="border-gray-300 dark:border-neutral-800"
            :class="{ 'my-1': isLoading }"
        />
        <div
            v-html="comment.content"
            class="p-2 overflow-hidden"
            :class="[
                isLoading
                    ? ['h-4', 'bg-gray-300', 'dark:bg-zinc-700', 'rounded']
                    : '',
            ]"
        ></div>
        <!-- <p>{{ comment.upvotes }}</p> -->
    </div>
</template>
