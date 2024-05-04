<template>
    <div class="user">
        <img src="/images/avatars/image-amyrobson.webp" alt="amyrobson image">
        <strong>amyrobson</strong> 
        <div class="created-at">1 month ago</div>
    </div>
    <!-- <div class="lg-reply"> -->
        <!-- <ReplyButton /> -->
    <!-- </div> -->
</template>

<script setup>
import ReplyButton from './ReplyButton.vue';

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


.lg-reply{
    display: none;
}

/* @media screen and (min-width:1024px) { */
    /* .lg-reply{ */
        /* display: block; */
        /* justify-self: center; */
        /* align-self: center; */
    /* } */
/* } */
</style>