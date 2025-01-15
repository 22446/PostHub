<template>
    <v-chip prepend-icon="mdi-comment" class="my-2" @click.prevent="emits('handleGetComments')">
        Comments ({{ posts?.comments?.length }})
    </v-chip>
    <Commentloading :loading="loadingComments[posts._id]"></Commentloading>
    <div style="max-height: 400px; overflow-y: auto;">
        <div v-for="comment in comments?.data?.comments" :key="comment._id">
            <LoadingSkeleton :loading="loadingComments[comment._id]"></LoadingSkeleton>
            <v-card v-if="comment.post === posts._id" class="my-2">
                <div class="d-flex align-center ga-4 pa-2">
                    <div>
                        <v-avatar :image="posts.user.photo"></v-avatar>
                    </div>
                    <div>
                        <p class="font-weight-bold">{{ comment.commentCreator.name }}</p>
                        <p>{{ comment.content }}</p>
                    </div>
                </div>
                <v-btn color="warning" class="mt-2" @click.prevent="handleUPdate(comment._id)" variant="text"
                    v-if="comment.commentCreator._id == user?.data?.user?._id">update</v-btn>
                <v-form :class="isclickedUpdate == comment._id ? 'd-block mx-auto' : 'd-none'"
                    v-if="comment.commentCreator._id == user?.data?.user?._id"
                    @submit.prevent="UpadateComment(comment._id, posts._id)" color="surface-light">
                    <v-card-text>
                        <v-text-field :loading="loadingUpdateComment" append-inner-icon="mdi-send" density="compact"
                            variant="solo" v-model="UpdadetComment" placeholder="update comment"
                            single-line></v-text-field>
                    </v-card-text>
                </v-form>
            </v-card>
        </div>
    </div>
    <v-form class="mx-auto" @submit.prevent="AddComment(posts._id)" color="surface-light" v-if="isclicked">

        <v-card-text>
            <v-text-field :loading="loadingaddComment" append-inner-icon="mdi-send" density="compact" variant="solo"
                v-model="Comment" placeholder="add comment" hide-details single-line></v-text-field>
        </v-card-text>

    </v-form>
</template>
<script setup>

const emits = defineEmits(['handleGetComments'])
const commentFunc = useComments();
const { comments, loadingComments, loadingUpdateComment } = storeToRefs(useComments());
const isclickedUpdate = ref({});
const UpdadetComment = ref('')
const Comment = ref('')
const { loadingaddComment } = storeToRefs(useComments());
defineProps({
    posts: Object,
    user: Object,
    isclicked: Object
})
function AddComment(id) {
    commentFunc.addComment(Comment.value, id);
    Comment.value = '';
}
function handleUPdate(id) {
    isclickedUpdate.value = (isclickedUpdate.value === id ? null : id);
    console.log(isclickedUpdate.value)
}
function UpadateComment(id, postId) {
    commentFunc.updateComment(id, postId, UpdadetComment.value);

    UpdadetComment.value = '';
}
</script>