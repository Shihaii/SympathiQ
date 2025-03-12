<script setup lang="ts">
import type { QuizResult } from '@/types';

const props = defineProps<{
    resultJSON: string;
}>()

console.log('res',props.resultJSON);
const result : QuizResult = JSON.parse(props.resultJSON ? props.resultJSON : '')
</script>

<template>
    <div class="relative py-4 rounded-[1.2rem] h-[35rem] w-full overflow-hidden">
        <img class="h-full w-full object-contain object-top" :src="result.img" alt="">
        <img class="absolute top-0 left-0 h-full w-full object-cover object-top z-[-1] blur-md" :src="result.img" alt="">
    </div>
    <div class="flex flex-col gap-8 mt-12">
        <h1 class="text-28 font-semibold">{{ result.title }}</h1>
        <p v-for="(text, index) in result.text" :key="index"
        class="text-18 font-medium text-gray-650">
        {{ text.paragraph }}
    </p>
    </div>
</template>