<script setup lang="ts">
import { Form } from 'vee-validate'
import type { FormStep } from '../types'
import InputTemplate from '../components/InputTemplate.vue'
import ErrorPopup from '@/components/ErrorPopup.vue'
import VeeValidate from 'vee-validate'
import { configure } from 'vee-validate'
import axios from 'axios'
import { ref, watch } from 'vue'

var error = ref('')

const props = defineProps<{
  formSteps: FormStep[]
  submitFormTo: Function
  token?: string
}>()

function getDescription(description: string, part: number) {
  let descriptionWords: string[] = description.split(' ')

  if (part === 1) {
    descriptionWords.pop()
    return descriptionWords.join(' ')
  } else {
    return descriptionWords[descriptionWords.length - 1]
  }
}

async function nextStep(values: any) {
  if (currentStep === props.formSteps.length - 1) {
    props.token ? (values = { ...values, token: props.token }) : ''
    await props.submitFormTo(values, error)
  } else currentStep++
}

var currentStep = 0
var styles = 'max-w-[44rem] px-[5rem] py-[5rem]'
</script>

<template>
  <ErrorPopup error-title="Login Failed" :error-text="error"></ErrorPopup>
  <Form
    keep-values
    :validation-schema="formSteps[currentStep].rules"
    @submit="nextStep"
    class="bg-white z-0 rounded-[1.2rem] flex flex-col m-auto shadow-lg shadow-[#a9cbe03a]"
  >
    <template v-for="(step, index) in formSteps">
      <div
        :class="formSteps[currentStep].styles ? formSteps[currentStep].styles : styles"
        class="flex flex-col items-center w-screen"
        v-if="currentStep === index"
      >
        <img class="pb-[6rem]" :src="step.img" />
        <div>
          <h5
            class="text-36 font-bold bg-gradient-to-r from-[#1A47BF] to-[#D63ACA] text-transparent bg-clip-text text-center"
          >
            <span class="text-36 font-bold text-[#1F1E28]">{{
              getDescription(formSteps[index].title, 1)
            }}</span>
            {{ getDescription(formSteps[index].title, 2) }}
          </h5>
          <h6 class="text-center text-20 font-medium text-[#64748b]">
            {{ formSteps[index].description }}
          </h6>
        </div>
        <div class="flex flex-col max-w-[38.3rem] w-full">
          <InputTemplate
            v-for="formInput in formSteps[index].inputs"
            :form-input="formInput"
          ></InputTemplate>
        </div>
        <button
          v-if="currentStep !== 0 && currentStep !== formSteps.length - 1"
          type="submit"
          class="flex justify-center items-center gap-[0.8rem] mt-14 rounded-full h-[5.5rem] w-full bg-[#E1E1E1] text-15 font-['Jost'] font-medium text-[#68838E]"
        >
          {{ step.buttonText }} <img src="../assets/images/right-arrow.svg" />
        </button>

        <button
          v-else-if="currentStep === 0"
          type="submit"
          class="mt-14 rounded-full h-[5.5rem] max-w-[38.3rem] w-full bg-gradient-to-r from-[#1A47BF] to-[#D63ACA] text-15 font-['Jost'] font-medium text-white"
        >
          {{ step.buttonText }}
        </button>

        <button
          v-else-if="currentStep === formSteps.length - 1"
          type="submit"
          class="flex justify-center items-center gap-[0.8rem] mt-14 rounded-full h-[5.5rem] w-full bg-[#E1E1E1] text-15 font-['Jost'] font-medium text-[#68838E]"
        >
          {{ step.buttonText }} <img src="../assets/images/right-arrow.svg" />
        </button>

        <InputTemplate
          v-if="step.agreeTerms"
          :form-input="{
            type: 'checkbox',
            name: 'agree',
            label: '',
            options: [
              {
                id: 'agree_to_terms',
                value: '',
                text: 'I confirm i am 18 years or older, and i agree to SympathiQ’s Terms of use (with mandatory Arbitration) and acknowledge the privacy policy and notice of Privacy Practices.'
              }
            ]
          }"
        >
        </InputTemplate>

        <div v-if="step.link" class="flex justify-center gap-2 mt-12 w-full text-14">
          <span class="text-[#426372]">{{ step.link.textBefore }}</span>
          <RouterLink
            :to="step.link.to"
            class="bg-gradient-to-r from-[#1A47BF] to-[#D63ACA] text-transparent bg-clip-text"
            >{{ step.link.textLink }}</RouterLink
          >
          <span class="text-[#426372]">{{ step.link.textAfter }}</span>
        </div>
      </div>
    </template>
  </Form>
</template>
