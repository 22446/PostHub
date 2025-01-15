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
                            <v-text-field v-model="name" :error-messages="errors.name" label="Name"></v-text-field>
                            <v-text-field v-model="email" :error-messages="errors.email" label="E-mail"></v-text-field>
                            <v-text-field :type="clicked?'text':'password'" :append-inner-icon="clicked?'mdi-eye':'mdi-eye-off'" @click:append-inner="clicked=!clicked" v-model="password" :error-messages="errors.password" label="Password"></v-text-field>
                            <v-text-field :type="clicked2?'text':'password'" v-model="rePassword" :error-messages="errors.rePassword" :append-inner-icon="clicked2?'mdi-eye':'mdi-eye-off'" @click:append-inner="clicked2=!clicked2" label="Confirm Password"></v-text-field>
                            <v-text-field type="date" v-model="dateOfBirth" :error-messages="errors.dateOfBirth" label="Date of Birth"></v-text-field>
                            <v-radio-group v-model="gender" :error-messages="errors.gender" inline label="Gender">
                                <v-radio label="Male" value="male"></v-radio>
                                <v-radio label="Female" value="female"></v-radio>
                            </v-radio-group>
                            <v-btn class="me-4" type="submit" :loading="loading">Sign up</v-btn>
                        </form>

                        <p class="text-center mt-4">Already have account?<router-link to="/login">Log in</router-link></p>
                        
                    </v-col>
                </v-row>
            </v-card>
        </v-container>
    </div>
</template>

<script setup>
import { useAuth } from '~/stores/AuthStore';
import * as yup from 'yup';
import { useForm, useField } from 'vee-validate';
import { useRouter } from 'vue-router';
import {storeToRefs} from 'pinia';
import {ref} from 'vue';
const {loading} = storeToRefs(useAuth());
const authStore = useAuth();
const router=useRouter();

const clicked=ref(false);
const clicked2=ref(false);

const validationSchema=yup.object().shape({
    name:yup.string().required('Name is required').min(3,'Name must be atleast 3 characters'),
    email:yup.string().required('Email is required').email('Email must be valid'),
    password:yup.string().required('Password is required').matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,'Password must be atleast 6 characters'),
    rePassword:yup.string().oneOf([yup.ref('password')],'Passwords must match'),
    dateOfBirth:yup.date().required('Date of Birth is required'),
    gender:yup.string().required('gender is required')
})
const {errors,handleSubmit}=useForm({
    validationSchema
})


const {value:name}=useField('name');
const {value:email}=useField('email');
const {value:password}=useField('password');
const {value:rePassword}=useField('rePassword');
const {value:dateOfBirth}=useField('dateOfBirth');
const {value:gender}=useField('gender');
useSeoMeta({
    title: 'Signup',
    description: 'Signup page',
})
const submitUser=handleSubmit((values=>{
    authStore.registerUser(values,router)
    console.log(values)
}))

</script>
