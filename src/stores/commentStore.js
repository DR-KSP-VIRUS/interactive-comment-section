import { defineStore } from "pinia";
import { fetchComment } from "../../apis/getComment.api";

export const useCommentStore = defineStore('commentStore', {
    state: () => ({
        comments: [],
        currentUser: {},
        loading: false,
    }),
    getters: {
        async loadComment() {
            try {
                this.loading = true;
                const res = await fetchComment();
                this.comments = res.comments;
                this.currentUser = res.currentUser
                this.loading = false;
            } catch (error) {
                console.log(error);
            }
        }

    },
    actions: {
        voteComment(id, comment) {
            this.comments.find((c) => {
                if (c.id === id) {
                    c = comment;
                }
            });
        },

        voteReply(id, reply) {
            this.comments.replies
        },

        addComment(comment) {
            this.comments.push(comment);
        }
        ,
        deleteComment(comments) {
            this.comments = comments;
        }
    }
});