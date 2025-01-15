<template>
  <v-bottom-navigation :elevation="10" grow>
<v-btn to="/" value="recent">
    <v-icon>mdi-home</v-icon>

    <span>home</span>
  </v-btn>

<v-btn to="/user" value="favorites">
    <v-avatar :image="user?.data?.user?.photo"></v-avatar>

    <span>{{ user?.data?.user?.name }}</span> 
  </v-btn>


  <v-btn @click="logout" value="logout">
    <v-icon>mdi-logout</v-icon>

    <span>logout</span>
  </v-btn>
</v-bottom-navigation>
    </template>

<script setup>  
  const { user } = storeToRefs(UserStore());  
  const UserStoreFunc = UserStore();
  function logout(){
    useCookie('socialToken').value = null;
    return navigateTo('/login')
  }
  onMounted(() => {
    UserStoreFunc.GetUser()
  })  
</script>