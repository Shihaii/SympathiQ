<script setup lang="ts">
import { onMounted, onUpdated } from 'vue'
import Header from '../components/Home/Header.vue'
import SideBar from '../components/Home/SideBar.vue'

onMounted(() => {
  // text content should be the same as current `count.value`
  console.log('HomeView mounted')
})
onUpdated(() => {
  // text content should be the same as current `count.value`
  console.log('HomeView rerender')
})
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
