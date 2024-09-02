<script setup lang="ts"></script>

<template>
  <div class="ml-[2.2rem] flex gap-4">
    <div
      class="relative flex items-center justify-center rounded-full w-[4.3rem] h-[4.3rem] bg-gradient-to-r from-[#AFE8FA] to-[#5218FA] rotate-[30deg]"
    >
      <div class="rotate-[-30deg]">
        <img
          src="/src/assets/images/avatar_test.jfif"
          class="border-[0.2rem] border-white rounded-full border-box max-w-[4rem] w-screen max-h-[4rem] h-screen"
        />
        <div
          class="absolute bottom-[0.2rem] right-[0.3rem] flex items-center justify-center rounded-full max-w-[1rem] w-full max-h-[1rem] h-full bg-white"
        >
          <div class="rounded-full max-w-[0.6rem] w-full max-h-[0.6rem] h-full bg-[#13BA37]"></div>
        </div>
      </div>
    </div>
    <span
      class="flex items-center gap-[0.4rem] text-[1.4rem] leading-[1.4rem] font-[Jost] font-medium text-[#2A3336]"
      >Irina <button><img src="/src/assets/images/dropdown-arrow-icon.svg" /></button
    ></span>
  </div>
</template>
