<template>
    <li class="comment">
        <div class="user-section">
            <User />
        </div>
        <div class="comment-section">
            <p class="comment-text" v-if="!editing">
                Impressive! Though it seems the drag feature could be 
                improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.  
            </p>
            <div class="editing" v-else>
                <textarea name="comment" id="id_comment" class="input-control" cols="100" rows="5" v-model="editingComment"></textarea>
            </div>
        </div>
        <div class="vote-btn">
            <VoteButton />
        </div>
        <div class="reply-btn" v-if="!editing">
            <ReplyButton @edit="() => editing = true"/>
        </div>
        <div class="update" v-else>
            <Button btnType="button" class="update-btn" @click="() => editing = false">Update</Button>
        </div>
    </li>
</template>

<script setup>
import { ref } from 'vue';
import User from './User.vue';
import VoteButton from './VoteButton.vue';
import ReplyButton from './ReplyButton.vue';
import Button from './Button.vue';


const editing = ref(false);
const editingComment = ref(`Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.  `);


</script>

<style scoped>
.comment {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
}

.user-section{
    grid-row: 1;
    grid-column: span 2;
}

.comment-section {
    grid-row: 2;
    grid-column: span 2;
    padding: .5rem 0;
}

.editing{
    grid-row: 2;
    grid-column: span 2;
}

.vote-btn{
    grid-row: 3;
    grid-column: 1;
    display: flex;
}


.reply-btn, 
.update {
    grid-row: 3;
    grid-column: 2;
    display: flex;
    justify-self: end;
}

.update-btn{
    color: var(--white);
    background-color: var(--moderate-blue);
    padding: .7rem 1.3rem;
    border-radius: .4rem;
    cursor: pointer;
}

.input-control{
    padding: 1rem 1.2rem;
    border-radius: .4rem;
    width: 100%;
    border:1px solid var(--light-gray);
    font-size: large;
}



@media screen and (min-width:1024px) {
    .comment {
        display: grid;
        grid-template-columns: 1fr 10fr 1fr;
        max-width: 620px;
    }

    .user-section{
        grid-row: 1;
        grid-column: 2;
    }
    .comment-section{
        grid-row: 2;
        grid-column: span 11;
    }

    .vote-btn {
        grid-row: 1;
        grid-row-end: span 2;
        margin-right: 1rem;
    }

    .reply-btn {
        grid-row: 1;
        grid-column: 12;
    }

    .update{
        grid-column: span 3;
    }
}
</style>