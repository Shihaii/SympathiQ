<script setup lang="ts">
import { Form } from 'vee-validate'
import type { FormStep } from '../types'
import InputTemplate from '../components/InputTemplate.vue'
import VeeValidate from 'vee-validate'
import { configure } from 'vee-validate'
import axios from 'axios'

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

function nextStep(values: any) {
  console.log('Console: ', JSON.stringify(values, null, 2))
  if (currentStep === props.formSteps.length - 1) {
    props.token ? (values = { ...values, token: props.token }) : ''
    props.submitFormTo(values)
  } else currentStep++
}

var currentStep = 0
var styles = 'max-w-[44rem] px-[5rem] py-[5rem]'
</script>

<template>
  <Form
    keep-values
    :validation-schema="formSteps[currentStep].rules"
    @submit="nextStep"
    class="bg-white rounded-[1.2rem] flex flex-col m-auto shadow-lg shadow-[#a9cbe03a]"
  >
    <template v-for="(step, index) in formSteps">
      <div
        :class="formSteps[currentStep].styles ? formSteps[currentStep].styles : styles"
        class="flex flex-col items-center w-screen"
        v-if="currentStep === index"
      >
        <img class="pb-[6rem]" :src="step.img">
        <div>
          <h5
            class="text-3xl font-bold bg-gradient-to-r from-[#1A47BF] to-[#D63ACA] text-transparent bg-clip-text text-center"
          >
            <span class="text-3xl font-bold text-[#1F1E28]">{{
              getDescription(formSteps[index].title, 1)
            }}</span>
            {{ getDescription(formSteps[index].title, 2) }}
          </h5>
          <h6 class="text-center text-lg font-medium text-[#64748b]">
            {{ formSteps[index].description }}
          </h6>
        </div>
        <div class="max-w-[38.3rem] w-full flex flex-col">
          <InputTemplate
            v-for="formInput in formSteps[index].inputs"
            :form-input="formInput"
          ></InputTemplate>
        </div>
        <button
          v-if="currentStep !== 0 && currentStep !== formSteps.length - 1"
          type="submit"
          class="text-btn rounded-full h-[5.5rem] w-full text-[#68838E] font-['Jost'] font-medium bg-[#E1E1E1] mt-14 flex justify-center items-center gap-[0.8rem]"
        >
        {{ step.buttonText }} <img src="../assets/images/right-arrow.svg" />
        </button>

        <button
          v-else-if="currentStep === 0"
          type="submit"
          class="text-btn rounded-full h-[5.5rem] max-w-[38.3rem] w-full text-white font-['Jost'] font-medium bg-gradient-to-r from-[#1A47BF] to-[#D63ACA] mt-14"
        >
          {{ step.buttonText }}
        </button>

        <button
          v-else-if="currentStep === formSteps.length - 1"
          type="submit"
          class="text-btn rounded-full h-[5.5rem] w-full text-[#68838E] font-['Jost'] font-medium bg-[#E1E1E1] mt-14 flex justify-center items-center gap-[0.8rem]"
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

        <div v-if="step.link" class="w-full flex justify-center gap-2 mt-12 text-form-span">
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
