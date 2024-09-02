<script setup lang="ts">
const props = defineProps<{
  errorTitle: string
  errorText: string
}>()
</script>

<template>
  <div
    class="fixed top-36 right-16 flex flex-col gap-[0.8rem] z-[1] max-w-[32.6rem] w-full rounded-2xl px-[2.4rem] py-[1.6rem] bg-[#f41a0c0d] shadow-md"
  >
    <h3 class="font-['Jost'] font-semibold text-[1.4rem] leading-[1.8rem] text-[#F41A0C]">
      {{ errorTitle }}
    </h3>
    <span class="font-['Jost'] font-normal text-[1.2rem] leading-[1.6rem] text-[#F41A0C]">
      {{ errorText }}</span
    >
  </div>
</template>
