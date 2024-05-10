<template>
    <div class="vote">
    <Button btnType="button" @click="count++" class="plus">
        <img src="/images/icon-plus.svg" alt="plus icon">
    </Button>
    {{ countValueFormat(count) }}
    <Button btnType="button" class="minus" @click="count>=1 ? count-- :0">
        <img src="/images/icon-minus.svg" alt="minus icon">
    </Button>
</div>
</template>

<script setup>
import { ref } from 'vue';
import { countValueFormat } from '@/helpers/counterFormat';
import Button from './Button.vue';

const count = ref(0);

</script>


<style scoped>
.vote {
    display: flex;
    place-items: center;
    cursor: pointer;
    background-color: var(--light-gray);
    border-radius: .4rem;
    font-weight: 900;
    color: var(--moderate-blue);
    padding: .3rem;
}

.plus,
.minus{
    padding: .4rem .6rem;
}

@media screen and (min-width:1024px) {
    .vote{
        flex-direction: column;
    }

    .vote .btn{
        padding: 1.4rem 1rem;
    }
}
</style>