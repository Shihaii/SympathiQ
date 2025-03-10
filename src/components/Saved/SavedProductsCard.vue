<script setup lang="ts">
import type { ProductCard } from '@/types';
import { defineProps } from 'vue';

const props = defineProps<{
    productInfo: ProductCard;
}>()
</script>

<template>
<div class="relative flex flex-col p-[0.8rem] border rounded-[1.5rem] max-w-[24.6rem] w-full hover:border-none hover:shadow-xl">
            <div class="absolute top-[1.6rem] right-[1.4rem] flex justify-center items-center rounded-full h-[3.8rem] w-[3.8rem] bg-pink-550">
                <img class="h-[1.8rem] w-[1.8rem]" src="@/assets/images/heart-white-icon.svg" alt="">
            </div>
            <div class="flex justify-center items-center w-full h-[19rem]">
                <img class="max-w-full" :src="props.productInfo.image" alt="">
            </div>
            <div class="flex gap-[0.5rem]">
                <div v-for="i in 5" :key="i">
                    <img v-if="i<=props.productInfo.ratings" src="@/assets/images/star-yellow.svg" alt="">
                    <img v-else src="@/assets/images/star.svg" alt="">
                </div>
            </div>
            <h3 class="mt-[1.4rem] font-['Jost'] font-medium text-12/[2rem]">
                {{ props.productInfo.title }}
            </h3>
            <div class="flex justify-between mt-[0.6rem] mr-[1.2rem] mb-[1.2rem]">
                <div class="flex gap-[0.8rem]">
                    <span class="font-['Jost'] text-10 text-[#0000004D] line-through">{{ props.productInfo.previousPrice }}</span>
                    <span class="font-['Jost'] font-semibold text-18 text-[#1F1E28]">{{ props.productInfo.price }}</span>
                </div>
                <button class="flex justify-center items-center rounded-full h-[4.2rem] w-[4.2rem] bg-gradient-to-r from-[#1A47BF] to-[#D63ACA]">
                    <img src="@/assets/images/basket-white.svg" alt="">
                </button>
            </div>
        </div>
</template>