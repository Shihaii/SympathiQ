<script setup lang="ts">
import { RouterView } from 'vue-router';


</script>

<template>
    <div class="flex justify-between w-full">
        <h2 class="font-['Jost'] text-24 text-black font-semibold">Saved</h2>
        <div class="flex items-center gap-[1rem]">
            <RouterLink
             class="flex items-center rounded-full h-[4.4rem] px-[3.4rem] bg-gray-350  text-16 font-['Jost'] font-medium text-gray-750"
             to="/saved/">
             Products
            </RouterLink>

            <RouterLink 
             class="flex items-center rounded-full h-[4.4rem] px-[3.4rem] bg-gray-350 text-16 font-['Jost'] font-medium text-gray-750"
             to="/saved/specialists">
             Specialists
            </RouterLink>
        </div>
    </div>
    <div>
        <RouterView></RouterView>
    </div>
</template>

<style scoped>
.router-link-exact-active {
    background: linear-gradient(to right,#1A47BF, #D63ACA);
    color: white;
}
</style>