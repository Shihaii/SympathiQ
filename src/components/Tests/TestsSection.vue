<script setup lang="ts">
import TestCard from './TestCard.vue';


</script>

<template>
    <h2 class="text-24 font-semibold">All Tests</h2>
    <div class="grid gap-y-[3.2rem] gap-x-[3rem] grid-cols-1 mt-12 lg:grid-cols-2 xl:grid-cols-3">
        <TestCard v-for=" in 12"></TestCard>
    </div>
</template>