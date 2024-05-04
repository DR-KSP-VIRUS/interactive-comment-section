<template>
    <ul class="comments">
        <CommentItem />
    </ul>
    <AddComment />
</template>

<script setup>
import CommentItem from './CommentItem.vue';
import AddComment from './AddComment.vue';
</script>

<style scoped>
    .comments {
        background-color: var(--white);
        list-style-type: none;
        padding: 1rem;
        border-radius: .4rem;
    }

</style>