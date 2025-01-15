<template>
     <v-col cols="12" v-if="loading">
     <v-skeleton-loader
        v-if="loading"
          type="list-item-two-line"
        >
        </v-skeleton-loader>
    </v-col>
</template>

<script setup>
defineProps(['loading'])    
</script>