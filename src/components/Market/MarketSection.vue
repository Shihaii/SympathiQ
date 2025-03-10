<script setup lang="ts">
import { ref } from 'vue';
import type { Order } from '@/types';
import { getOrders } from '@/controllers/OrderController';
import { formatDate } from '@/utility/utility';

const orders = ref<Order[]>([]);

const fetchOrders = async () => {
  const result = await getOrders();
  if (Array.isArray(result)) {
    orders.value = result;
  }
};
fetchOrders();

const statusBackground = new Map([
  ["Pending", 'bg-blue-150'],
  ["Approved", 'bg-green-150'],
  ["In Process", 'bg-yellow-150']
]);

const statusColor = new Map([
  ["Pending", 'text-blue-450'],
  ["Approved", 'text-green-450'],
  ["In Process", 'text-yellow-450']
]);
</script>

<template>
   <div class="flex flex-col mt-[3.2rem]">
    <div class="flex justify-between w-full">
      <h4 class="text-24 font-['Jost'] font-semibold text-[#010101]">Recent Orders</h4>
      <RouterLink
        class="flex items-center gap-[0.8rem]"
      >
        <span
          class="text-12 font-['Jost'] text-[#44BFE5] tracking-[-2%]"
          >Go to Orders Page</span
        >
        <img src="/src/assets/images/right-arrow-blue.svg">
    </RouterLink>
    </div>
   <table class="w-full mt-[1.6rem] rounded-[1.2rem] bg-white shadow-lg">
    <thead>
    <tr class="border-b text-start">
      <th class="text-start pt-[1.4rem] pb-[1rem]"><span class="pl-[2.8rem] font-['Jost'] text-13 text-gray-550 text-start">Item Name</span></th>
      <th class="text-start pt-[1.4rem] pb-[1rem]"><span class="border-l border-neutral-300 pl-[2.8rem] font-['Jost'] text-13 text-gray-550 text-start">Qty</span></th>
      <th class="text-start pt-[1.4rem] pb-[1rem]"><span class="border-l border-neutral-300 pl-[2.8rem] font-['Jost'] text-13 text-gray-550 text-start">Order Date</span></th>
      <th class="text-start pt-[1.4rem] pb-[1rem]"><span class="border-l border-neutral-300 pl-[2.8rem] font-['Jost'] text-13 text-gray-550 text-start">Amount</span></th>
      <th class="text-start pt-[1.4rem] pb-[1rem]"><span class="border-l border-neutral-300 pl-[2.8rem] font-['Jost'] text-13 text-gray-550 text-start">Status</span></th>
    </tr>
    </thead>
    <tbody>
     
    <tr v-for="order in orders" :key="order.id" class="border-b">
      <td class="text-start pt-[1.4rem] pb-[1rem]">
        <RouterLink class="flex items-center gap-[1.3rem] pl-[2.8rem]">
            <img src="/src/assets/images/product_image.svg">
            <span class="h-fit max-w-[19.4rem] truncate font-['Jost'] text-13/[2.6rem] font-medium text-black-450">
            {{ order.name }}
            </span>
        </RouterLink>
      </td>
      <td class="text-start pt-[1.4rem] pb-[1rem]">
        <span class="flex border-l border-neutral-300 pl-[2.8rem] h-full font-['Jost'] text-13 text-black-450 text-start">
            {{ order.quantity }}
        </span>
    </td>
      <td class="text-start pt-[1.4rem] pb-[1rem]">
        <span class="border-l border-neutral-300 pl-[2.8rem] font-['Jost'] text-13 text-gray-550 text-start">
            {{ formatDate(order.date) }}
        </span>
      </td>
      <td class="text-start pt-[1.4rem] pb-[1rem]">
        <span class="border-l border-neutral-300 pl-[2.8rem] font-['Jost'] text-13 font-semibold text-black-450 text-start">
            ${{ order.price * order.quantity }}
        </span>
      </td>
      <td class="text-start pt-[1.4rem] pb-[1rem]">
        <div class="border-l border-neutral-300 pl-[2.8rem]">       
            <span :class="[statusBackground.get(order.status), statusColor.get(order.status)]" class="rounded-lg py-[0.6rem] px-[1.2rem] font-['Jost'] text-9 font-bold text-start">
            {{ order.status }}
            </span>
      </div>
    </td>
    </tr>
    </tbody>
   </table>
  </div>
</template>