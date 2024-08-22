<script setup lang="ts">
import { Field, ErrorMessage } from 'vee-validate'
import type { FieldMeta } from 'vee-validate'
import type { FormInput } from '../types'
import { ref, watch } from 'vue'

defineProps<{
  formInput: FormInput
}>()

let www = 12
let showPassword = ref(false)
let passType = ref('password')

watch(showPassword, (newValue) => {
  newValue ? (passType.value = 'text') : (passType.value = 'password')
})
</script>

<template>
  <label class="text-sm text-[#919B9B] font-['Jost'] font-medium mt-8" :for="formInput.name">{{
    formInput.label
  }}</label>
  <template v-if="formInput.type === 'text'">
    <div
      class="mt-4 rounded-full p-[2px] bg-[#E1E1E1] from-[#1A47BF] to-[#D63ACA] has-[.is-invalid]:bg-[#F41A0C] has-[:focus]:bg-gradient-to-r"
    >
      <Field v-slot="{ meta, field }" :name="formInput.name"
        ><input
          v-bind="field"
          :type="formInput.type"
          class="relative h-[5rem] w-full rounded-full px-20 text-md [&.is-invalid]:text-[#F41A0C] focus:outline-none focus:ring-0"
          :class="{
            'is-valid': meta.valid && meta.touched,
            'is-invalid': !meta.valid && meta.touched
          }"
        />
      </Field>
    </div>
    <ErrorMessage
      :name="formInput.name"
      class="mt-2 self-end text-[#F41A0C] text-[1rem] leading-[1.2rem] font-normal"
    />
  </template>

  <template v-else-if="formInput.type === 'password'">
    <div
      class="flex items-center relative mt-4 rounded-full p-[2px] bg-[#E1E1E1] from-[#1A47BF] to-[#D63ACA] has-[.is-invalid]:bg-[#F41A0C] has-[:focus]:bg-gradient-to-r"
    >
      <Field v-slot="{ meta, field }" :name="formInput.name"
        ><input
          v-bind="field"
          :type="passType"
          class="relative text-md h-[5rem] max-w-[38.3rem] w-screen rounded-full px-20 [&.is-invalid]:text-[#F41A0C] focus:outline-none focus:ring-0"
          :class="{
            'is-valid': meta.valid && meta.touched,
            'is-invalid': !meta.valid && meta.touched
          }"
        />
      </Field>
      <span class="absolute right-[3.3rem] hover:cursor-pointer">
        <img
          @click="showPassword ? (showPassword = false) : (showPassword = true)"
          src="../assets//images/show-password.svg"
          class=""
        />
      </span>
    </div>
    <ErrorMessage
      :name="formInput.name"
      class="mt-2 self-end text-[rgb(244,26,12)] text-[1rem] leading-[1.2rem] font-normal"
    />
  </template>

  <template v-else-if="formInput.type === 'select'">
    <div
      class="relative mt-4 after:content-[url('../assets/images/dropdown-arrow.svg')] after:absolute after:top-[50%] after:translate-y-[-50%] after:right-[3.2rem] after:pointer-events-none"
    >
      <Field v-slot="{ meta, field }" :name="formInput.name"
        ><select
          v-bind="field"
          class="appearance-none text-md text-[#919B9B] font-['Jost'] font-medium h-[5.5rem] w-full rounded-full px-20 border-2 border-[#E1E1E1] [&.is-invalid]:border-[#F41A0C] [&.is-invalid]:text-[#F41A0C] after:content-['eee']"
          :class="{
            'is-valid': meta.valid && meta.touched,
            'is-invalid': !meta.valid && meta.touched
          }"
        >
          <option value="" selected disabled hidden>Write here</option>
          <option v-for="option in formInput.options" :value="option.value">
            {{ option.text }}
          </option>
        </select>
      </Field>

      <ErrorMessage
        :name="formInput.name"
        class="mt-2 self-end text-[#F41A0C] text-[1rem] leading-[1.2rem] font-normal"
      />
    </div>
  </template>

  <template v-else-if="formInput.type === 'radio'">
    <!-- <label class="text-sm text-[#454238] font-['Gotham'] mt-8">{{ formInput.label }}</label> -->
    <div class="flex gap-4 mt-4">
      <div v-for="(option, index) in formInput.options">
        <Field v-slot="{ meta, field }" :name="formInput.name" class=""
          ><input
            v-bind="field"
            :id="option.id"
            :value="option.value"
            :name="formInput.name"
            :type="formInput.type"
            :checked="true"
            class="peer hidden"
        /></Field>
        <label
          :for="option.id"
          class="px-8 py-4 flex border-gray-350 border-2 rounded-full cursor-pointer text-[1.4rem]/[2rem] text-[#919B9B] font-['Jost'] font-medium peer-checked:bg-gradient-to-r from-[#1A47BF] to-[#D63ACA] peer-checked:text-white peer-checked:px-[2.2rem] peer-checked:py-[1.2rem] peer-checked:border-none"
          >{{ option.text }}</label
        >
      </div>
    </div>
  </template>

  <template v-else-if="formInput.type === 'multicheckbox'">
    <!-- <label class="text-sm text-[#454238] font-['Gotham'] mt-8">{{ formInput.label }}</label> -->
    <div class="flex flex-wrap gap-4 mt-4">
      <div v-for="(option, index) in formInput.options">
        <Field
          v-slot="{ meta, field }"
          :id="option.id"
          :name="formInput.name"
          :value="option.value"
          type="checkbox"
          :class="`peer hidden`"
        ></Field>
        <label
          :for="option.id"
          :class="`px-8 py-4 flex min-w-fit flex-nowrap border-gray-350 border-2 rounded-full cursor-pointer text-[1.6rem]/[2.3rem] text-[#919B9B] font-['Jost'] font-medium peer-checked:bg-gradient-to-r from-[#1A47BF] to-[#D63ACA] peer-checked:text-white peer-checked:px-[2.2rem] peer-checked:py-[1.16rem] peer-checked:border-none`"
          >{{ option.text }}</label
        >
      </div>
    </div>
  </template>

  <template v-else-if="formInput.type === 'checkbox'">
    <div class="flex flex-nowrap gap-4 mt-4 align-top">
      <template v-for="(option, index) in formInput.options">
        <Field
          v-slot="{ meta, field }"
          :id="option.id"
          :name="formInput.name"
          :value="option.value"
          type="checkbox"
          class="h-8 min-w-8 accent-gray-400"
        ></Field>
        <label
          :for="option.id"
          class="flex min-w-fit flex-nowrap cursor-pointer text-[1.4rem]/[1.8rem] text-[#68838E] font-['Jost']"
          >{{ option.text }}</label
        >
      </template>
    </div>
  </template>

  <template v-else-if="formInput.type === 'phone'">
    <div class="flex gap-9">
      <input
        type="text"
        v-mask="'+###'"
        v-model="www"
        class="relative box-border max-w-[8.5rem] w-[100%] text-md h-[5.5rem] rounded-full px-10 mt-4 border-2 border-[#E1E1E1] [&.is-invalid]:border-[#F41A0C] [&.is-invalid]:text-[#F41A0C]"
      />
      <Field v-slot="{ meta, field }" :name="formInput.name"
        ><input
          v-model="www"
          v-bind="field"
          v-mask="'+### (##) ###-##-##'"
          :name="formInput.name"
          type="text"
          class="relative text-md max-w-[23.5rem] box-border w-[100%] h-[5.5rem] rounded-full px-20 mt-4 border-2 border-[#E1E1E1] [&.is-invalid]:border-[#F41A0C] [&.is-invalid]:text-[#F41A0C]"
          :class="{
            'is-valid': meta.valid && meta.touched,
            'is-invalid': !meta.valid && meta.touched
          }"
        />
      </Field>
    </div>
    <ErrorMessage
      :name="formInput.name"
      class="mt-2 self-end text-[#F41A0C] text-[1rem] leading-[1.2rem] font-normal"
    />
  </template>

  <template v-if="formInput.link">
    <RouterLink
      :to="formInput.link.to"
      class="text-sm bg-gradient-to-r from-[#1A47BF] to-[#D63ACA] text-transparent w-fit h-7 bg-clip-text self-end mt-4"
      >{{ formInput.link.textLink }}</RouterLink
    >
  </template>
</template>
