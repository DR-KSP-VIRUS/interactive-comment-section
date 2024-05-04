<template>
    <div class="user">
        <img src="/images/avatars/image-amyrobson.webp" alt="amyrobson image">
        <strong>amyrobson</strong> 
        <div class="created-at">1 month ago</div>
    </div>
</template>

<script setup>

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