<script setup lang="ts">
const props = defineProps<{
  header: string
}>()
</script>

<template>
  <div class="flex flex-col mt-[3.2rem]">
    <div class="flex justify-between w-full">
      <h4 class="text-24 font-['Jost'] font-semibold text-[#010101]">{{ props.header }}</h4>
      <button
        class="flex items-center gap-[0.8rem] rounded-full py-[1.4rem] px-[3.4rem] bg-gradient-to-r from-[#3A6FFD0D] to-[#D63ACA0D]"
      >
        <span
          class="text-16 font-['Jost'] font-medium bg-gradient-to-r from-[#1A47BF] to-[#D63ACA] text-transparent bg-clip-text"
          >See all</span
        >
        <img src="/src/assets/images/top-right-arrow.svg">
      </button>
    </div>
    <div class="flex gap-8">
      <slot></slot>
    </div>
  </div>
</template>
