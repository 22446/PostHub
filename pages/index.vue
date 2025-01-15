<template>
    <v-container>
        <v-row class="align-center justify-center">
        <AddPostNew :user="user"/>

            <loadingSkeleton :loading="loading"></loadingSkeleton>
          <v-col cols="12" v-for="post in posts?.data?.posts" :key="post._id">
            <PostComp :post="post" :user="user" ></PostComp>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
const { posts, loading } = storeToRefs(UsePosts());
const { user } = storeToRefs(UserStore());
const postsFunc = UsePosts();
onMounted(async () => {
    await  postsFunc.getAppPosts();
    console.log(posts)
})
useSeoMeta({
    title: 'Home',
    description: 'home page',
})
</script>
