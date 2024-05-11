<template>
    <div :class="toggle ? 'wrapper show-modal':' wrapper hide-modal' " >
        <div class="modal">
            <h1 class="title">Delete Comment</h1>
            <p class="content">
                Are you sure you want to delete this comment? This will remove the  comment and can't be undone.
            </p>
            <div class="modal-footer">
                <Button btnType="button" class="no-delete" @click="onNoDelete">
                    No, Cancel
                </Button>
                <Button btnType="button" class="delete" @click="onDelete">
                    Yes, Delete
                </Button>
            </div>
        </div>
    </div>
</template>

<script setup>
import Button from './Button.vue';
const emit = defineEmits(["deleteComment","noDeleteComment"]);

const props = defineProps({
    toggle: {
        type: Boolean,
        required: true
    },
    id: {
        type: Number,
        required: true
    }
});

const onDelete = () => {
    emit("deleteComment", props.id);
}

const onNoDelete = () => {
    emit("noDeleteComment");
}
</script>

<style scoped>
.wrapper {
    background-color: rgba(0, 0, 0, 0.6);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 0 2rem;
}

.modal {
    display: block;
    background-color: var(--white);
    padding: 2rem 2rem;
    border-radius: .4rem;
}

.title {
    font-size: 2rem;
}

.content {
    padding: 1rem 0;
    font-size: 1.5rem;
}

.modal-footer {
    display: flex;
    justify-content: space-between;
}

.no-delete{
    background-color: var(--grayish-blue);
    padding: .9rem 1rem;
    text-transform: uppercase;
    color: var(--white);
    display: flex;
    place-items: center;
    border-radius: .4rem;
}

.delete {
    background-color: var(--soft-red);
    padding: .9rem 1rem;
    text-transform: uppercase;
    color: var(--white);
    border-radius: .4rem;
    align-self: end;
}

.show-modal {
    display: flex;
    place-content: center;
    place-items: center;
}

.hide-modal{
    display: none;
}

@media screen and (min-width:1024px) {
    .modal{
        max-width: 520px;
    }
}
</style>