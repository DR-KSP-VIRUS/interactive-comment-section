import { defineStore } from "pinia";
import { fetchComment } from "@/apis/getComment";

export const useCommentStore = defineStore('commentStore', {
    state: () => ({
        comments: [],
        currentUser: {},
        loading: false,
    }),
    getters: {
        async loadComment() {
            /**
             * load comments and current user from local storage
             * if not found, load from the function
             * 
             */
            // localStorage.clear()
            let comments = JSON.parse(localStorage.getItem("comments"));
            let currentUser = JSON.parse(localStorage.getItem("currentUser"));
            if ((!comments) && (!currentUser)) {
                try {
                    this.loading = true;
                    const res = await fetchComment();
                    this.comments = res.comments;
                    this.currentUser = res.currentUser;
                    this.loading = false;
                } catch (error) {
                    console.log(error);
                }
            } else {
                this.comments = comments;
                this.currentUser = currentUser;
            }
        },

    },
    actions: {
        voteComment(id, comment) {
            /**
             * @param id,
             * @param comment
             * 
             * Find the comment by id and modify its votes
             */
            this.comments.find((c) => {
                if (c.id === id) {
                    c = comment;
                }
            });
            this.saveToLocalStorage();
        },

        voteReply(parentId, id, reply) {
            /**
             * @param parentId
             * @param id
             * @param reply
             * 
             * vote a reply by the comment it is found
             */
            this.comments.find((c) => {
                if (c.id === parentId) {
                    return c;
                }
            }).replies.find((r) => {
                if (r.id === id) {
                    r = reply;
                }
            });
            this.saveToLocalStorage();
        },

        addComment(comment) {
            /**
             * @param comment
             * 
             * add new comment to the comments
             */
            this.comments.push(comment);
            this.saveToLocalStorage()
        },

        updateComment(id, content) {
            this.comments.find(c => {
                if (c.id === id) {
                    c.content = content
                }
            });
            this.saveToLocalStorage();
        },

        deleteComment(comments) {
            /**
             * @param comment
             * delete comment from the comments
             */
            this.comments = comments;
            this.saveToLocalStorage()
        },

        addReply(parentId, reply) {
            /**
             * 
             * @param parentId
             * @param reply
             */
            // find the comment to and add a reply
            try {
                this.comments.find((c) => { // find the comment by id
                    if (c.id === parentId) {
                        return c;
                    }
                }).replies.push(reply);// add the reply to the selected comment
                this.saveToLocalStorage()
            } catch (error) {
                console.log("No more replies need!");
            }
        },

        updateReply(parentId, id, content) {
            this.comments.find(c => {
                return c.id === parentId;
            }).replies.find(r => {
                if (r.id === id) {
                    r.content = content;
                }
            });
            this.saveToLocalStorage();
        },

        deleteReply(parentId, replies) {
            /**
             * @param parentId
             * @param replies
             */
            // delete the current reply of a comment by the current user
            this.comments.find(c => c.id === parentId).replies = replies;
            this.saveToLocalStorage();
        },

        saveToLocalStorage() {
            /**
             * @author KONJA KUMA SAMPSON
             * 
             *  @summary Add the loaded comments and currentuser to the local storage
             */
            localStorage.setItem("comments", JSON.stringify(this.comments));
            localStorage.setItem("currentUser", JSON.stringify(this.currentUser));
        }
    }
});