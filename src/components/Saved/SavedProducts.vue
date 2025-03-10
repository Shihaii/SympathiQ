<script setup lang="ts">
import { ref } from 'vue';
import SavedProductsCard from './SavedProductsCard.vue';
import { getSavedProducts } from '@/controllers/ProductController';
import type { ProductCard } from '@/types';

const savedProducts = ref<ProductCard[]>([]);
const fetchSavedProducts = async () => {
  const result = await getSavedProducts();
  if (Array.isArray(result)) {
    savedProducts.value = result;
  }
};
fetchSavedProducts();
</script>

<template>
    <div class="flex flex-wrap gap-8">
      <SavedProductsCard v-for="product in savedProducts" :key="product.id"  :product-info="product"></SavedProductsCard>
    </div>
</template> 