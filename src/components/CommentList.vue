<template>
    <ul class="comments" v-for="comment in sortedComments()" :key="comment.id">
        <CommentItem :comment="comment" />
    </ul>
    <AddComment/>
</template>

<script setup>
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useCommentStore } from '@/stores/commentStore';
import CommentItem from './CommentItem.vue';
import AddComment from './AddComment.vue';


const commentStore = useCommentStore();
const { comments } = storeToRefs(commentStore);

onMounted(async () => {
    await commentStore.loadComment;
});

const sortedComments = ()=>{
    return comments.value.sort((a, b) => b.score - a.score);

};
</script>

<style scoped>
    .comments {
        list-style-type: none;
    }

</style>