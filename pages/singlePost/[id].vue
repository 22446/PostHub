<template>
  <v-container>
    <div class="d-flex justify-end">
    <v-icon @click.prevent="router.go(-1)" color="info" class="text-h3">mdi-arrow-right-box</v-icon>
  </div>
    <v-row class="align-center justify-center">
      <loadingSkeleton :loading="loading"></loadingSkeleton>
          <v-col v-if="post" cols="12">
            <PostComp :post="post" :user="user"></PostComp>
          </v-col>
        </v-row>
      </v-container>
</template>
<script setup>
const router = useRouter();
const { id } = router.currentRoute.value.params;
const PostFunct = UsePosts();
const { user } = storeToRefs(UserStore());
const { post, loading } = storeToRefs(UsePosts());
useSeoMeta({
    title: 'Post Details',
    description: 'post details page',
})
onMounted(async () => {
  await PostFunct.getSinglePost(id);
  console.log(post.value)
})
</script>