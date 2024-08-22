<script setup lang="ts">
import { useRoute } from 'vue-router'
import FormTemplate from '../components/FormTemplate.vue'
import type { FormStep } from '../types'
import { loginUser, resetPassword } from '../controllers/UserController'
import { forgotPassword } from '../controllers/UserController'
import { loginMock } from '../utility/formMock'

const props = defineProps<{
  formSteps: FormStep[]
  submitFormTo: Function
}>()

const route = useRoute()
console.log(route.query)

const token = route.query.token?.toString() ?? undefined
</script>

<template>
  <div class="w-screen h-screen overflow-hidden fixed">
    <div
      class="absolute -z-10 rounded-full blur-3xl w-[44.2vw] h-[40.2vh] top-[31.6vh] left-[-36.9vw] opacity-50 bg-[#FFDFA9]"
    ></div>
    <div
      class="absolute -z-10 rounded-full blur-3xl w-[44.2vw] h-[40.2vh] top-[-2.9vh] left-[20.6vw] opacity-20 bg-[#FFDFA9]"
    ></div>
    <div
      class="absolute -z-10 rounded-full blur-3xl w-[49.9vw] h-[41.4vh] bottom-[-12.2vh] left-[27vw] opacity-40 bg-[#B9B7FD]"
    ></div>
    <div
      class="absolute -z-10 rounded-full blur-3xl w-[49.9vw] h-[41.4vh] top-[-12.3vh] right-[-33vw] opacity-40 bg-[#B9B7FD]"
    ></div>
  </div>
  <div class="flex flex-col align-center justify-center w-full min-h-[100vh] py-[10rem]">
    <img class="z-[1] m-auto mb-[3vh]" src="../assets/logo.svg" />
    <FormTemplate
      class="z-[1]"
      :form-steps="formSteps"
      :submit-form-to="submitFormTo"
      :token="token"
    ></FormTemplate>
  </div>
</template>
