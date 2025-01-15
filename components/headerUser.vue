<template>
    <v-container fluid class="pa-0 "> 
  <div class="w-100 bg-black d-flex align-center" style="height: 350px;">
    <v-row class="ma-0">
      <v-col cols="12" class="d-flex justify-center align-center">
        <v-avatar size="150">
          <v-img :src="user?.data?.user?.photo"></v-img>
        </v-avatar>
      </v-col>
      <v-col cols="12" class="d-flex justify-center align-center">
        <h2 class="text-center">{{ user?.data?.user?.name }}</h2>
      </v-col>
    </v-row>
  </div>
  </v-container>
</template>

<script setup>  
    defineProps({
        user: Object
    })
</script>