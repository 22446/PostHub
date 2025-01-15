<template>
    <v-layout>
      <NavApp v-if="token" />
      <v-main>
        <slot class="my-6"></slot>
      </v-main>
    </v-layout>
  </template>
  
  <script setup>  
  const token = computed(() => useCookie('socialToken').value);
  </script>
  