<script setup lang="ts">
import { RouterLink } from 'vue-router';


</script>
<template>
    <div class="flex flex-col gap-[1.6rem] rounded-[2rem] p-8 shadow-xl">
        <div class="relative rounded-[1.2rem] overflow-hidden">
            <img class="h-full w-full object-cover" src="@/assets/images/eminence-in-the-shadow-bg.webp" alt="">
            <div class="absolute flex gap-[0.8rem] top-[0.8rem] right-[1.2rem]">
                <span class="rounded-[2.1rem] py-[0.6rem] px-[1rem] bg-gray-400 text-12 font-medium text-white">4m</span>
                <button class="rounded-full p-[0.6rem] bg-gray-400">
                    <img class="fill-current text-white" src="@/assets/images/tests-white-heart.svg" alt="">
                </button>
            </div>
        </div>
        <div class="flex flex-col gap-[0.4rem] w-full">
            <h3 class="text-16 font-semibold">Managing Stress & Anxiety</h3>
            <span class="text-12 font-medium text-gray-650">Mental Therapy</span>
        </div>
        <RouterLink 
        class="rounded-full p-[1.2rem] w-full bg-gradient-to-r from-[#3A6FFD0D] to-[#D63ACA0D] text-center"
        to="/quiz">
        <span class="text-12 font-medium bg-gradient-to-b from-[#1A47BF] to-[#D63ACA] bg-clip-text text-transparent">
            Pass Quiz
        </span>
        </RouterLink>
    </div>
</template>