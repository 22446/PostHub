<template>
    <div class="d-flex align-center justify-center">
        <v-container>
            <v-card>
                <v-row class="align-center pa-3">
                    <v-col cols="12" md="6">
                        <v-img src="/images/4957412_Mobile-login-Cristina.jpg"></v-img>
                    </v-col>
                    <v-col cols="12" md="6">
                <h1 class="text-center">Create your account</h1>

                        <form @submit.prevent="submitUser">
                            <v-text-field v-model="email" :error-messages="errors.email" label="E-mail"></v-text-field>
                            <v-text-field v-model="password" :type="clicked2?'text':'password'"  :append-inner-icon="clicked2?'mdi-eye':'mdi-eye-off'" @click:append-inner="clicked2=!clicked2"  :error-messages="errors.password" label="Password"></v-text-field>
                            <v-btn class="me-4" type="submit" :loading="loading">Log in</v-btn>
                        </form>

                        <p class="text-center mt-4">Dont have account?<router-link to="/signup">signUp</router-link></p>

                    </v-col>
                </v-row>
            </v-card>
        </v-container>
    </div>
</template>

<script setup>
import * as yup from 'yup';
import { useForm, useField } from 'vee-validate';
const {loading} = storeToRefs(useAuth());
const authStore = useAuth();
const  clicked2=ref(false);
const router=useRouter();
const validationSchema=yup.object().shape({
    email:yup.string().required('Email is required').email('Email must be valid'),
    password:yup.string().required('Password is required').matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,'Password must be atleast 6 characters'),
})
useSeoMeta({
    title: 'Login',
    description: 'Login page',
})
const {errors,handleSubmit}=useForm({
    validationSchema
})



const {value:email}=useField('email');
const {value:password}=useField('password');

const submitUser=handleSubmit((values=>{
    authStore.LoginUser(values,router)
    console.log(values)
}))

</script>
