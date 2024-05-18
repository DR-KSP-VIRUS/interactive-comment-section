<template>
    <div class="user">
        <img :src="user.image.webp" :alt="user.username">
        <strong>{{ user.username }}</strong> <span v-if="user.username === currentUser.username" class="current-user"> You </span>
        <div class="created-at">{{ dateFormator(+createdAt) }}</div>
    </div>
</template>

<script setup>
import { dateFormator } from '@/helpers/formateDate';
import { useCommentStore } from '@/stores/commentStore';

const { currentUser } = useCommentStore()

const props = defineProps({
    user: {
        type: Object,
        required: true
    },
    createdAt: {
        type: String,
        required:true,
    }
})
</script>

<style scoped>
.user {
    display: flex;
    place-items: center;
}

.user img{
    width: 4rem;
    margin-right: .5rem;
}

.current-user {
    background-color: var(--moderate-blue);
    color: var(--white);
    padding: .2rem .5rem;
    margin-left: .5rem;
    border-radius: .44rem;
}

.created-at{
    margin-left: .7rem;
}

</style>