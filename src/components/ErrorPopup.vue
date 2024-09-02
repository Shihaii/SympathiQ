<script setup lang="ts">
const props = defineProps<{
  errorTitle: string
  errorText: string
}>()
</script>

<template>
  <div
    class="fixed z-[1] top-36 right-16 flex flex-col gap-[0.8rem] shadow-md rounded-2xl max-w-[32.6rem] w-full px-[2.4rem] py-[1.6rem] bg-[#f41a0c0d]"
  >
    <h3 class="text-[1.4rem] leading-[1.8rem] font-['Jost'] font-semibold text-[#F41A0C]">
      {{ errorTitle }}
    </h3>
    <span class="text-[1.2rem] leading-[1.6rem] font-['Jost'] font-normal text-[#F41A0C]">
      {{ errorText }}</span
    >
  </div>
</template>
