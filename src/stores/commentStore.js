import { defineStore } from "pinia";
import { fetchComment } from "../../apis/getComment.api";

export const useCommentStore = defineStore('commentStore', {
    state: () => ({
        commentListing: [],
        loading: false,
    }),
    getters: {
        async loadComment() {
            try {
                this.loading = true;
                const res = await fetchComment();
                this.commentListing = res;
                this.loading = false;
            } catch (error) {
                console.log(error);
            }
        }

    },
    actions: {

    }
});