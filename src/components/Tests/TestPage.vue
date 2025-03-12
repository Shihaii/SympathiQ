<script setup lang="ts">
import { Form } from 'vee-validate';
import { quizMock } from '@/utility/quizMock';
import QuizQuestion from './QuizQuestion.vue';
import { computed, onMounted, onUpdated, ref, watch } from 'vue';
import { getResults } from '@/controllers/QuizController';

let error = ref('')
let currentStep = ref(0);
let questionNumber = 0;

async function nextStep(values: any) {
  if (currentStep.value === quizMock.steps.length - 1) {
    await getResults(values, error)
  } else currentStep.value  ++
}

function prevStep() {
  if (currentStep.value > 0) {
    currentStep.value--;
  } 
}

onMounted(() => {
  // text content should be the same as current `count.value`
  console.log('TestPage mounted')
})
onUpdated(() => {
  // text content should be the same as current `count.value`
  console.log('TestPage rerender')
})

const getQuestionNumber = (index: number, questionIndex: number) => {
    console.log("getQuestionNumber")
    console.log(index)
    console.log(questionIndex)
    let id = 0;
  for(let i = 0; i <= index; i++){
    for(let j = 0; j <= quizMock.steps[i].question.length-1; j++){
        id++;
        if(i == index && j == questionIndex){
           break;
        }
    }
  }
    return id;
};
</script>

<template>
    <div class="flex flex-col gap-8 w-full">
        <div class="relative rounded-[1.2rem] h-[25rem] w-full overflow-hidden">
            <img class="h-full w-full object-cover object-top" src="@/assets/images/eminence-in-the-shadow-bg.webp" alt="">
            <div class="absolute flex gap-[0.8rem] top-[0.8rem] right-[1.2rem]">
                <!-- <button class="rounded-full p-[0.6rem] bg-gray-400">
                    <img class="fill-current text-white" src="@/assets/images/tests-white-heart.svg" alt="">
                </button> -->
            </div>
        </div>
        <div class="flex flex-col gap-[0.4rem] w-full">
            <h1 class="text-28 font-semibold">What Type of Personality Do You Have?</h1>
            <p class="text-18 font-medium text-gray-650">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate</p>
        </div>
    </div>

    <Form
    :keep-values="true"
    @submit="nextStep"
    class="mt-16"
    >
    <template v-for="(step, index) in quizMock.steps" :key="index">
        {{ console.log('v-for step index - ',index) }}
        <div v-if="currentStep === index"
        class="flex flex-col items-center">
        {{ console.log('current step question, currentStep - ',currentStep) }}
            <div class="flex flex-col gap-16 w-full">
                
                <QuizQuestion v-for="(question, questionIndex) in step.question" :question="question" :questionNumber="getQuestionNumber(index,questionIndex)" :key="questionIndex">
                    <!-- {{ getQuestionNumber(index,99) }} -->
                    {{ console.log('in question') }}
                </QuizQuestion>
                <!-- <div v-for=" in 1" >{{ getQuestionNumber(index,99) }}</div> -->
            </div>
            <div class="flex gap-12 justify-between mt-[3rem] w-full">
                    <button type="button" @click="prevStep"
                    class="flex gap-[2.4rem] rounded-[5rem] py-[1.2rem] px-[4rem] bg-gradient-to-r from-[#1A47BF] to-[#D63ACA]">
                    <span class="text-18 font-medium text-white">Previous step</span>
                    <!-- <img src="@/assets/images/right-arrow-white.svg" alt=""> -->
                    </button>
                    <button type="submit"
                    class="flex gap-[2.4rem] rounded-[5rem] py-[1.2rem] px-[4rem] bg-gradient-to-r from-[#1A47BF] to-[#D63ACA]">
                    <span class="text-18 font-medium text-white">Next step</span>
                    <img src="@/assets/images/right-arrow-white.svg" alt="">
                </button>
            </div>
        </div>
    </template>
    </Form>
</template>