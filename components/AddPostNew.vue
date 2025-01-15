<template>
  <addPost>
    <template v-slot:clickon="{ openDialog }">
      <v-card @click="openDialog" class="w-sm-100 w-md-75 w-lg-50 mx-auto pa-2">
        <v-card-title class="d-flex align-center justify-center">
          <v-avatar :image="user?.data?.user?.photo">
          </v-avatar>
          <v-text-field hide-details="true"> What are you think {{ user?.data?.user?.name }} ?</v-text-field>
        </v-card-title>
      </v-card>
    </template>

    <template v-slot:addPostbtn="{ closedialog }">
      <v-btn color="primary" text="Add Post" variant="tonal" @click.prevent="addPostfunc(); closedialog()"></v-btn>
    </template>
    <template v-slot:text>
      <v-col cols="12">
        <v-text-field placeholder="waht are you think" v-model="text" required></v-text-field>
      </v-col>
    </template>
    <template v-slot:image>
      <v-col cols="12">
        <v-text-field type="file" @change="postFunc.handleFileUpload"></v-text-field>
      </v-col>
    </template>
  </addPost>
</template>
<script setup>
defineProps({
  user: {
    type: Object,
    required: true
  }
})
const { text, image } = storeToRefs(UsePosts());
const UserStoreFunc = UserStore();
const postFunc = UsePosts();
function addPostfunc() {
  postFunc.createPost();
}
onMounted(async () => {
  await UserStoreFunc.GetUser()
})
</script>
