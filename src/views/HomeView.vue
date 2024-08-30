<script setup lang="ts">
import Header from '../components/Home/Header.vue'
import SideBar from '../components/Home/SideBar.vue'
</script>

<template>
  <main class="flex">
    <SideBar></SideBar>
    <div class="flex flex-col w-full">
      <Header></Header>
      <section>
        <RouterView></RouterView>
      </section>
    </div>
  </main>
</template>
