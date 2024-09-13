<script setup lang="ts">
import { navMock } from '@/utility/navMock'
</script>

<template>
  <aside class="max-w-[27rem] w-full min-h-screen bg-[#F9FAFE]">
    <img class="mt-[2.6rem] ml-[4.7rem] max-w-[16.5rem] w-full" src="/src/assets/logo.svg" />
    <nav class="mt-[7.4rem] ml-[2.6rem]">
      <ul>
        <li v-for="item in navMock">
          <RouterLink
            :to="item.routerLink"
            class="relative w-full h-[5rem] rounded-l-full pl-[2.4rem] flex gap-8 items-center router-link-exact-active:bg-red"
          >
            <img :src="item.nonActiveIcon" />
            <span class="text-[#879BA4] font-['Jost'] text-16 font-medium">{{
              item.title
            }}</span>
          </RouterLink>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<style scoped>
.router-link-exact-active{
  background: linear-gradient(rgba(58, 111, 253, 0.05),rgba(214, 58, 202, 0.05));
}
.router-link-exact-active::before{
  content: url('/src/assets/images/sidebar-item-active-corner.svg');
  position: absolute;
  top: -2.2rem;
  right: 0;
}
.router-link-exact-active::after{
  content: url('/src/assets/images/sidebar-item-active-corner.svg');
  position: absolute;
  bottom: -2.4rem;
  right: -0.2rem;
  transform:rotate(270deg);
}
</style>