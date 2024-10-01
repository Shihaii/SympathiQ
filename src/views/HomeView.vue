<script setup lang="ts">
import Header from '../components/Home/Header.vue'
import SideBar from '../components/Home/SideBar.vue'
</script>

<template>
  <main class="flex">
    <SideBar></SideBar>
    <div class="flex flex-col w-full">
      <Header></Header>
      <section class="w-full pt-8 pb-24 px-16">
        <RouterView></RouterView>
      </section>
    </div>
  </main>
</template>
