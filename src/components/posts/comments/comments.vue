<script setup lang="ts">
import { onMounted, Ref, ref } from 'vue';
import { loadComments } from '../../../utils/posts';
import Comment from './comment.vue';
import { Comment as CommentType } from '../../../models/comment';

const { url } = defineProps<{
    url: string;
}>();

let comments: Ref<CommentType[]> = ref([]);
const saveComments = (url: string) => {
    loadComments(url).then((commentsArray) => {
        comments.value = commentsArray;
    });
};
onMounted(() => {
    saveComments(url);
});
</script>

<template>
    <div style="max-height: 40vh" class="overflow-y-scroll">
        <Comment v-for="comment in comments" :comment="comment" />
    </div>
</template>
