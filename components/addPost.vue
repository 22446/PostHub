<template>
  <v-col cols="12 pa-0">
    <div>
      <slot name="clickon"  :openDialog="openDialog"></slot>
      <v-dialog v-model="dialog" max-width="600">
        <v-card prepend-icon="mdi-post" title="Add post">
          <v-card-text>
            <v-row dense>
             
              <slot name="text"></slot>
             <slot name="image"></slot>
            </v-row>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn text="Close" variant="plain" @click="dialog = false"></v-btn>
            <slot :closedialog="closeDialog" name="addPostbtn"></slot>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </v-col>
</template>
<script setup>
const postFunc = UsePosts();
const dialog = ref(false);

function openDialog() {
  dialog.value = true;
}
function closeDialog() {
  dialog.value = false;
}
</script>