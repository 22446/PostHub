<template> 
  <HeaderUser :user="user"></HeaderUser>
  <v-container>
    <v-row>
      <AddPostNew :user="user"/>
      <LoadingSkeleton :loading="loading"></LoadingSkeleton>
      <v-col cols="12" v-for="post in postUser?.data?.posts" :key="post._id">

      <PostComp :post="post" :user="user"></PostComp>

      </v-col>
    </v-row>
  </v-container>

</template>


<script setup>
const {user , postUser , loading}=storeToRefs(UserStore());
const useFunc=UserStore();
const UserStoreFunc=UserStore();
useSeoMeta({
    title: 'Profile',
    description: 'user porfile page',
})
onMounted(async () => {
    await useFunc.GetUser();
    await UserStoreFunc.GetUser()
    await UserStoreFunc.UserPost(user?.value?.data?.user?._id)

})
</script>


