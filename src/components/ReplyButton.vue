<template>
    <div class="reply" @click="() => reply = true" v-if="!reply">
        <Button btnType="button">
            <img src="/images/icon-reply.svg" alt="reply icon">
        </Button>
        reply
    </div>
    <div class="reply" v-else>
        <Button btnType="button" class="delete"  @click="handleModalOpen">
            <img src="/images/icon-delete.svg" alt="delete icon" :style="{'margin-right':'.3rem'}">
            Delete
        </Button>
        <Button btnType="button" class="edit" @click="onEdit">
            <img src="/images/icon-edit.svg" alt="edit icon" :style="{'margin-right':'.3rem'}">
            Edit
        </Button>
    </div>
    <Modal :toggle="deleteBtn" @selected="() => deleteBtn = false"/>
</template>

<script setup>
import { ref } from 'vue';
import Button from './Button.vue';
import Modal from './Modal.vue'

const reply = ref(false);
const deleteBtn = ref(false);

const emit = defineEmits(['edit']);

const handleModalOpen = () => {
    deleteBtn.value = true;
    reply.value = false;
}

const onEdit = () => {
    emit("edit");
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