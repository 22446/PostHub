<template>
    <v-col cols="12" v-if="loading">
    <v-skeleton-loader type="card-avatar, actions"
    class="my-2 w-sm-100 w-md-75 w-lg-50 mx-auto pa-2"></v-skeleton-loader>
                <v-skeleton-loader type="card-avatar, actions"
                class="my-2 w-sm-100 w-md-75 w-lg-50 mx-auto pa-2"></v-skeleton-loader>
                <v-skeleton-loader type="card-avatar, actions"
                    class="my-2 w-sm-100 w-md-75 w-lg-50 mx-auto pa-2"></v-skeleton-loader>
            </v-col>
</template>

<script setup>  
defineProps(['loading'])
</script>