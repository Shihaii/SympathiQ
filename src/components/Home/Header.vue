<script setup lang="ts">
import Search from '../Home/Search.vue'
import MiniProfile from '../Home/MiniProfile.vue'
</script>

<template>
  <header class="flex h-[8.6rem] w-full px-[2.9rem] items-center">
    <Search></Search>
    <button
      class="ml-[2.5rem] h-16 flex items-center gap-[0.8rem] rounded-full px-[2.8rem] bg-gradient-to-r from-[#1A47BF] to-[#D63ACA] text-white text-[1.4rem] leading-8 font-semibold font-[Jost]"
    >
      <img src="/src/assets/images/lightning-icon.svg" />
      Upgrade Your Profile
    </button>

    <button
      class="ml-[1.4rem] w-[4.2rem] h-[4.2rem] flex justify-center items-center rounded-full border-[0.1rem]"
    >
      <img src="/src/assets/images/bell-notification-icon.svg" />
    </button>

    <button
      class="ml-[1.4rem] w-[4.2rem] h-[4.2rem] flex justify-center items-center rounded-full border-[0.1rem]"
    >
      <img src="/src/assets/images/bag-notification-icon.svg" />
    </button>

    <MiniProfile></MiniProfile>

  </header>
</template>
