<template>
    <div class="user">
        <img :src="user.image.webp" :alt="user.username">
        <strong>{{ user.username }}</strong> 
        <div class="created-at">{{ dateFormator(+createdAt) }}</div>
    </div>
</template>

<script setup>
import { dateFormator } from '@/helpers/formateDate';
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
    margin-right: 1rem;
}

.created-at{
    margin-left: 1.5rem;
}

</style>