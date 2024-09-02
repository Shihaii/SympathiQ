<script setup lang="ts">
import Search from '../Home/Search.vue'
import MiniProfile from '../Home/MiniProfile.vue'
</script>

<template>
  <header class="flex items-center h-[8.6rem] w-full px-[2.9rem]">
    <Search></Search>
    <button
      class="flex items-center gap-[0.8rem] ml-[2.5rem] h-16 px-[2.8rem] bg-gradient-to-r from-[#1A47BF] to-[#D63ACA] text-[1.4rem] leading-8 font-['Jost'] font-semibold text-white"
    >
      <img src="/src/assets/images/lightning-icon.svg" />
      Upgrade Your Profile
    </button>

    <button
      class="flex justify-center items-center ml-[1.4rem] border-[0.1rem] rounded-full w-[4.2rem] h-[4.2rem]"
    >
      <img src="/src/assets/images/bell-notification-icon.svg" />
    </button>

    <button
      class="relative flex justify-center items-center ml-[1.4rem] border-[0.1rem] rounded-full w-[4.2rem] h-[4.2rem]"
    >
      <img src="/src/assets/images/bag-notification-icon.svg" />
      <div
        class="absolute top-[-0.4rem] right-[-0.4rem] flex items-center justify-center rounded-full max-w-[2.1rem] w-full max-h-[2.1rem] h-full bg-white"
      >
        <div
          class="rounded-full max-w-[1.7rem] w-full max-h-[1.7rem] h-full bg-gradient-to-r from-[#1A47BF] to-[#D63ACA]"
        >
          <span class="text-[1rem] leading-[1.4rem] font-['Jost'] font-medium text-white">2</span>
        </div>
      </div>
    </button>

    <MiniProfile></MiniProfile>
  </header>
</template>
