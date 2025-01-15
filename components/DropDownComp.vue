<template>
    <div>
        <v-menu location="start" transition="scale-transition">
            <template v-slot:activator="{ props }">
                <v-btn :loading="loading" color="black" v-bind="props">
                    <v-icon>mdi-dots-horizontal</v-icon>
                </v-btn>
            </template>
            <v-list>
                <v-list-item>
                    <v-list-item-title @click.prevent="emits('handelDelete')"><v-btn color="red"
                            variant="text">Delete</v-btn></v-list-item-title>
                </v-list-item>
                <addPost>
                    <template v-slot:clickon="{ openDialog }">
                        <v-list-item>
                            <v-list-item-title>
                                <v-btn color="warning" variant="text" @click.stop="openDialog">Update</v-btn>
                            </v-list-item-title>
                        </v-list-item>
                    </template>

                    <template v-slot:addPostbtn="{ closedialog }">
                        <v-btn color="primary" text="Update Post" variant="tonal"
                            @click.prevent="emits('updatePostFunct'); closedialog()">
                        </v-btn>
                    </template>
                    <template v-slot:text>
                        <v-col cols="12">
                            <v-text-field placeholder="waht are you think" v-model="text" required></v-text-field>
                        </v-col>
                    </template>
                    <template v-slot:image>
                        <v-col cols="12">
                            <v-text-field type="file" @change="UserFunc.handleFileUpload"></v-text-field>
                        </v-col>
                    </template>
                </addPost>
            </v-list>
        </v-menu>
    </div>
</template>

<script setup>
const {text} = storeToRefs(UserStore())
const UserFunc = UserStore()
defineProps({
    loading: Boolean
})
const emits = defineEmits(['handelDelete', 'updatePostFunct'])
</script>