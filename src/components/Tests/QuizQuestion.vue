<script setup lang="ts">
import type { QuizQuestion } from '@/types';
import { Field, ErrorMessage } from 'vee-validate'
import { onMounted, onUpdated } from 'vue';


const props = defineProps<{
    question: QuizQuestion;
    questionNumber: number;
}>()

onMounted(() => {
  // text content should be the same as current `count.value`
  console.log('Quesion mounted')
})
onUpdated(() => {
  // text content should be the same as current `count.value`
  console.log('Quesion rerender')
})
</script>

<template>
    <div class="flex flex-col gap-[2.4rem]">
        <div v-if="question.img" class="relative rounded-[1.2rem] w-full overflow-hidden">
            <img class="h-full w-full object-contain" src="@/assets/images/eminence-in-the-shadow-bg.webp" alt="">
        </div>
        <div class="flex gap-[1.2rem]">
            <span class="text-18 font-bold bg-gradient-to-r from-[#1A47BF] to-[#D63ACA] bg-clip-text text-transparent"> {{ questionNumber < 10 ? 0 : '' }}{{ questionNumber }}.</span>
            <h3 class="text-20 font-medium">{{ props.question.text }}</h3>
        </div>
        <div v-if="question.type=='radio'" class="flex flex-col gap-[1.6rem]">
            <div v-for="(option, index) in question.options" :key="index"
            class="flex gap-[1.2rem]"
            >
                <Field v-slot="{ field }" :name="question.id" class=""
                ><input
                    v-bind="field"
                    :id="option.id"
                    :value="option"
                    :name="question.id"
                    type="radio"
                    class="peer"
                /></Field>
                <label
                :for="option.id"
                class="flex cursor-pointer text-14 text-[#919B9B] font-['Jost'] font-medium"
                >{{ option.text }}</label
                >
            </div>
        </div>
        <div v-else-if="question.type=='checkbox'" class="flex flex-col gap-[1.6rem]">
            <div v-for="(option, index) in question.options" :key="index"
            class="flex gap-[1.2rem]"
            >
                <Field v-slot="{ field }" :name="question.id" class=""
                ><input
                    v-bind="field"
                    :id="option.id"
                    :value="option"
                    :name="question.id"
                    type="checkbox"
                    class="peer"
                /></Field>
                <label
                :for="option.id"
                class="flex cursor-pointer text-14 text-[#919B9B] font-['Jost'] font-medium"
                >{{ option.text }}</label
                >
            </div>
        </div>
        <div v-else-if="question.type=='range'" class="flex flex-col gap-[1.6rem]">
            <div v-for="(option, index) in question.options" :key="index"
            class="flex gap-[1.2rem]"
            >
                <Field v-slot="{ field }" :name="question.id" class=""
                ><input
                    v-bind="field"
                    :id="option.id"
                    :name="question.id"
                    :min="option.minValue"
                    :max="option.maxValue"
                    type="range"
                    class="peer"
                /></Field>
                <label
                :for="option.id"
                class="flex cursor-pointer text-14 text-[#919B9B] font-['Jost'] font-medium"
                >{{ option.text }}</label
                >
            </div>
        </div>
        
    </div>
</template>