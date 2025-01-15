<template>

        <v-card v-if="post && post?.user" class="my-2  w-sm-100 w-md-75 w-lg-50 mx-auto pa-2">
            <div class="d-flex justify-space-between">
                <div class="d-flex align-center ga-4">
                    <div>

                        <v-avatar  :image="post.user.photo"></v-avatar>
                    </div>
                    <div>
                        <p>{{ post.user.name }}</p>
                        <p>{{ post.createdAt }}</p>
                    </div>
                </div>
               <DropDownComp v-if="user?.data?.user?._id==post.user._id" :loading="loadingDrop[post._id]" @updatePostFunct="updatePostFunction(post._id,user?.data?.user?._id)" @handelDelete="handelDeletePost(post._id,user?.data?.user?._id)"></DropDownComp>
            </div>
            <div class="my-2 font-weight-bold">
                <p>{{ post.body }}</p>
            </div>
            <div>
                
                <NuxtLink :to="`/singlePost/${post._id}`">
                    <v-img :src="post.image" cover></v-img>
                </NuxtLink>
             
            </div>
            <commnetComp :isclicked="isclicked[post._id]" @handle-get-comments='HandleGEtCommntss(post._id)'
                :posts="post" :user="user"></commnetComp>
        </v-card>
</template>
<script setup>
const commentFunc = useComments();
const userFunc = UserStore();
const {loadingDrop}=storeToRefs(UserStore())
const isclicked = ref({});
defineProps({
post: Object,
    user: Object
})
function HandleGEtCommntss(id) {
    commentFunc.getAllComments(id);
    isclicked.value[id] = !isclicked.value[id];
}
function handelDeletePost(id,userId){
    userFunc.deletePost(id,userId);
}
function updatePostFunction(id, userId) {
    userFunc.UpdatePost(id, userId)
}
</script>