<template>
    <div class="reply" @click="onReply">
        <Button btnType="button">
            <img src="/images/icon-reply.svg" alt="reply icon">
        </Button>
        reply
    </div>
</template>

<script setup>
// import { ref } from 'vue';
import Button from './Button.vue';

// const reply = ref(false);

const emit = defineEmits(['reply']);


const onReply = () => {
    emit("reply");
}

</script>

<style scoped>
.reply {
    display: flex;
    place-items: center;
    color: var(--moderate-blue);
    cursor: pointer;
    font-weight: 900;
}

.delete {
    color: var(--soft-red)
}

.edit {
    color: var(--moderate-blue)
}

</style>