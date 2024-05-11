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

        voteReply(parentId, id, reply) {
            this.comments.find((c) => {
                if (c.id === parentId) {
                    return c;
                }
            }).replies.find((r) => {
                if (r.id === id) {
                    r = reply;
                }
            })
        },

        addComment(comment) {
            this.comments.push(comment);
        },

        deleteComment(comments) {
            this.comments = comments;
        },

        addReply(parentId, reply) {
            try {
                this.comments.find((c) => {
                    if (c.id === parentId) {
                        return c;
                    }
                }).replies.push(reply);
            } catch (error) {
                console.log("No more replies need!");
            }
        },

        deleteReply(parentId, replies) {
            this.comments.find(c => c.id === parentId).replies = replies
        }
    }
});