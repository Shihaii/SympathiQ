<script setup lang="ts"></script>

<template>
  <div class="ml-[2.2rem] flex gap-4">
    <div class="relative flex items-center justify-center">
      <div
        class="absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] z-[0] rounded-full rotate-[30deg] w-[4.3rem] h-[4.3rem] bg-gradient-to-r from-[#AFE8FA] to-[#5218FA]"
      ></div>
      <img
        src="/src/assets/images/avatar_test.jfif"
        class="z-[1] border-[0.2rem] border-white rounded-full border-box max-w-[4rem] w-screen max-h-[4rem] h-screen"
      />
      <div
        class="absolute z-[1] bottom-[0rem] right-[0.2rem] border-[0.2rem] rounded-full border-white min-w-[1rem] min-h-[1rem] bg-[#13BA37]"
      ></div>
    </div>
    <span
      class="flex items-center gap-[0.4rem] text-14 font-[Jost] font-medium text-[#2A3336]"
      >Irina <button><img src="/src/assets/images/dropdown-arrow-icon.svg"/></button
    ></span>
  </div>
</template>
