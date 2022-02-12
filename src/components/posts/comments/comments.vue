<script setup lang="ts">
import { onMounted, Ref, ref } from 'vue';
import { loadComments } from '../../../utils/posts';
import Comment from './comment.vue';
import { Comment as CommentType } from '../../../models/comment';

const { url } = defineProps<{
    url: string;
}>();

let comments: Ref<CommentType[]> = ref([]);
let commentsLoading = ref(false);
const saveComments = (url: string) => {
    commentsLoading.value = true;
    loadComments(url).then((commentsArray) => {
        commentsLoading.value = false;
        comments.value = commentsArray;
    });
};
onMounted(() => {
    saveComments(url);
});
</script>

<template>
    <div v-if="commentsLoading">
        <Comment
            v-for="i in [1, 2, 3, 4]"
            :comment="{ author: '', content: '', upvotes: 0 }"
            :isLoading="commentsLoading"
        />
    </div>
    <div v-else style="max-height: 40vh" class="overflow-y-scroll">
        <Comment v-for="comment in comments" :comment="comment" />
    </div>
</template>
