<script setup lang="ts">
import type { Friend } from '@/types';

const props = defineProps<{
    friend: Friend
}>()
</script>

<template>
    <div class="flex flex-col gap-[2rem] rounded-[2rem] p-[2rem] max-w-[35rem] w-full bg-white shadow-lg">
        <div class="flex flex-col gap-[1rem]">
            <div class="flex justify-between items-center">
                <img class="rounded-full p-[0.3rem] h-[5rem] w-[5rem] bg-white shadow-lg"
                    src="/src/assets/images/avatar_test.jfif" alt="">
                <button
                    class="bg-transparent border-[0.1rem] rounded-full border-gray-blue-0 py-[0.8rem] px-[1.7rem] font-['Jost'] text-12 font-medium text-gray-blue-0">Unfollow</button>
            </div>
            <div class="flex flex-col">
                <span class="text-16 font-['Jost'] font-semibold">Maria Joseph</span>
                <span class="text-12 font-['Jost'] font-medium text-gray-blue-0">ID02134</span>
            </div>
            <div class="flex gap-4 rounded-full py-[0.5rem]">
                <div class="flex items-center gap-[0.4rem]">
                    <img src="/src/assets/images/age-icon.svg" />
                    <span class="text-12 font-['Jost'] font-medium text-gray-650">28</span>
                </div>
                <div class="flex items-center gap-[0.4rem]">
                    <img src="/src/assets/images/age-icon.svg" />
                    <span class="text-12 font-['Jost'] font-medium text-gray-650">Male</span>
                </div>
            </div>
        </div>
        <div class="flex">
            <button class="rounded-full py-[1.2rem] px-[1.7rem] w-full bg-white"><span class="text-12 font-['Jost'] font-medium bg-gradient-to-r from-[#1A47BF] to-[#D63ACA] text-transparent bg-clip-text">View Profile</span></button>
            <button class="rounded-full py-[1.2rem] px-[1.7rem] w-full bg-gradient-to-r from-[#3A6FFD0D] to-[#D63ACA0D]"><span class="text-12 font-['Jost'] font-medium bg-gradient-to-r from-[#1A47BF] to-[#D63ACA] text-transparent bg-clip-text">Chat</span></button>
        </div>
   </div>
</template>