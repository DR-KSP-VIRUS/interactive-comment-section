<template>
    <li class="comment">
        <div class="user-section">
            <User :user="comment.user" :createdAt="comment.createdAt"/>
        </div>
        <div class="comment-section">
            <p class="comment-text" v-if="!editing">
                {{ comment.content }}
            </p>
            <div class="editing" v-else>
                <textarea name="comment" id="id_comment" class="input-control" 
                    cols="100" rows="5"  :value="comment.content">
                </textarea>
            </div>
        </div>
        <div class="vote-btn">
            <VoteButton 
                :score="+comment.score" 
                :id="+comment.id"
                @plusScore="handleAddVote"
                @minusScore="handleMinusVote"
            />
        </div>
        <div class="reply-btn" v-if="!(comment.user.username === currentUser.
        username)">
            <ReplyButton @reply="() => commentReply = true"/>
        </div>
        <div class="reply-btn" v-else-if="!editing">
            <Button btnType="button" class="delete"  @click="handleModalOpen">
                <img src="/images/icon-delete.svg" alt="delete icon" :style="
                {'margin-right':'.3rem'}">
                Delete
            </Button>
            <Button btnType="button" class="edit" @click="() => editing =true">
                <img src="/images/icon-edit.svg" alt="edit icon" :style="
                {'margin-right':'.3rem'}">
                Edit
            </Button>
        </div>
        <div class="update" v-else>
            <Button btnType="button" class="update-btn" @click="() => editing = 
        false">Update</Button>
        </div>
        <Teleport to="body">
            <Modal :toggle="deleteBtn" 
                @noDeleteComment="() => deleteBtn = false"
                @deleteComment="handleDelete"
                :id="+comment.id"
            />
        </Teleport>
    </li>
    <ul class="replies" v-for="reply in comment.replies" :key="reply.id">
        <Replies :reply="reply" :parentId="+comment.id"/>
    </ul>

    <div v-if="commentReply">
        <ReplyCommentForm 
            @replied="() => commentReply = false"
            :parentId="+comment.id"
            :commentOwner="comment.user.username"
        />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useCommentStore } from '@/stores/commentStore';
import User from './User.vue';
import VoteButton from './VoteButton.vue';
import ReplyButton from './ReplyButton.vue';
import ReplyCommentForm from './ReplyCommentForm.vue';
import Replies from './Replies.vue';
import Modal from './Modal.vue';
import Button from './Button.vue';


const commentStore = useCommentStore();
const { comments ,currentUser} = storeToRefs(commentStore);
const commentReply = ref(false);
const deleteBtn = ref(false);
const editing = ref(false);


const props = defineProps({
    comment: {
        type: Object,
        required:true,
    }
});


const handleModalOpen = () => {
    deleteBtn.value = true;
}


const handleAddVote = (id) => {
    comments.value.find((comment) => {
        if (comment.id === id) {
            let score = comment.score += 1;
            let voted = { ...comment, score };
            commentStore.voteComment(id, voted);
        }
    });
}

const handleMinusVote = (id) => {
    comments.value.find((comment) => {
        if (comment.id === id) {
            let score = comment.score >= 1 ? comment.score -= 1:0;
            let voted = { ...comment, score };
            commentStore.voteComment(id, voted);
        }
    });
}


const handleDelete = (id) => {
    const newcomments = comments.value.filter(comment => comment.id != id);
    commentStore.deleteComment(newcomments);
    deleteBtn.value = true;
}
</script>

<style scoped>
.comment {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    background-color: var(--white);
    padding: 1rem;
    border-radius: .4rem;
    margin: 1rem 0;
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


.replies {
    margin-left: 1rem;
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

    .replies {
        margin: 0 1rem;
    }
}
</style>