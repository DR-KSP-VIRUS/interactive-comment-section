<template>
    <div class="form-wrapper">
        <form class="form" @submit.prevent="handleSubmit">
            <img src="/images/avatars/image-juliusomo.webp" alt="juliusomo image'">
            <div class="form-group">
                <textarea class="form-control" name="comment" placeholder="Add comment..." rows="3"
                v-model="comment"
                ></textarea>
            </div>
            <div class="btn-wrapper">
                <Button type="submit" class="btn-send">
                    Send
                </Button>
            </div>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useCommentStore } from '@/stores/commentStore';
import Button from './Button.vue';

const comment = ref('');

const commentStore = useCommentStore();

const handleSubmit = () => {
    let id = Math.floor((Math.random() * 83392) + 1);
    let content = comment.value
    let newComment = {
      id,content, createdAt: `${Date.now()}`,
      score: 0,
      user: {
          image: {
              png: commentStore.currentUser.image.png,
              webp: commentStore.currentUser.image.webp
          },
        username: commentStore.currentUser.username
      },
      replies: []
    }
    if (comment.value != '') {
        commentStore.addComment(newComment);
        comment.value = '';
    }
}


</script>

<style scoped>
.form-wrapper {
    margin: 1rem 0;
    background: var(--white);
    padding: 1rem;
    border-radius: .4rem;
}

.form {
    display: grid; 
    grid-template-columns: repeat(3,1fr);
}

.form-group{
    width: 100%;
    grid-column: span 3;
}


.form-control{
    padding: 1rem 1.2rem;
    border-radius: .4rem;
    width: 100%;
    border:1px solid var(--light-gray);
}

.form img,
.form .btn-wrapper{
    margin-top: .4rem;
    grid-row: 2;
}

.form img {
    width: 2.5rem;
    grid-column: 1;  
}

.form .btn-wrapper {
    grid-column: 3;
    display: flex;
    place-content: end;
    place-items: center;
}

.btn-send{
    color: var(--white);
    background-color: var(--moderate-blue);
    padding: .7rem 1.3rem;
    border-radius: .4rem;
    transition: transform 89ms ease;
}

.btn-send:active {
    transform: scale(0.83);
}

@media screen and (min-width:1024px) {
    .form-wrapper{
        margin: 1rem 1rem 1rem 0;
        max-width: 623px;

    }
    .form{
        display: flex;
        place-items: start;
        place-content: start;
    }

    .form img{
        width: 2.8rem;
    }
    
    .form img,
    .form .btn-wrapper {
        margin-top: 0;
    }

    .form-group{
        margin: 0 1rem;
    }
}

</style>