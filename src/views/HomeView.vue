<script setup lang="ts">
import Header from '../components/Home/Header.vue'
import SideBar from '../components/Home/SideBar.vue'
</script>

<template>
  <main class="flex max-w-[144rem] mx-auto">
    <SideBar></SideBar>
    <div class="flex flex-col w-full">
      <Header></Header>
      <section class="w-full pt-8 pb-24 px-16">
        <Suspense>
          <RouterView></RouterView>
        </Suspense>
      </section>
    </div>
  </main>
</template>
