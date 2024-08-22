<script setup lang="ts">
import FormTemplate from '../components/FormTemplate.vue'
import * as yup from 'yup'
import type { FormStep } from '../types'
import { createUser } from '../controllers/UserController'
import { registrationMock } from '../utility/formMock'
</script>

<template>
  <img
    class="object-cover fixed min-w-[100vw] min-h-[100vh] -z-10"
    src="../assets/images/registration-bg.jpg"
    alt=""
  />
  <div class="flex align-center justify-center w-full min-h-[100vh] py-[10rem]">
    <FormTemplate :form-steps="registrationMock" :submit-form-to="createUser"></FormTemplate>
  </div>
</template>
