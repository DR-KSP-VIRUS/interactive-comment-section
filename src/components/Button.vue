<template>
    <button :type="btnType" class="btn">
        <slot></slot>
    </button>
</template>

<script setup>
const props = defineProps({
    btnType: {
        type:String,
    },
});

</script>

<style scoped>
    .btn {
        display: flex;
        place-items: center;
        cursor: pointer;
        padding: 0 .7rem;
        background: transparent;
    }

    .btn img{
        width: 6rem;
    }

</style>