<template>
    <ul class="comments" v-for="comment in comments" :key="comment.id">
        <CommentItem :comment="comment" />
    </ul>
    <AddComment/>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useCommentStore } from '@/stores/commentStore';
import CommentItem from './CommentItem.vue';
import AddComment from './AddComment.vue';


const commentStore = useCommentStore();
const { comments } = storeToRefs(commentStore);


</script>

<style scoped>
    .comments {
        list-style-type: none;
    }

</style>