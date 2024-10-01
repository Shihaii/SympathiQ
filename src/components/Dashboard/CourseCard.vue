<script setup lang="ts">

</script>

<template>
    <div class="relative flex flex-col gap-[1.9rem] rounded-[2rem] p-8 w-full shadow-lg">
        <img src="/src/assets/images/course-bg-1.jpg">
        <div class="absolute flex gap-[0.8rem] top-[2.9rem] right-[3.8rem]">
            <span class="rounded-full py-[0.6rem] px-4 bg-[#130C1A26] text-12 font-['Jost'] font-medium text-white">2h 4m 32s</span>
            <button class="rounded-full p-[0.6rem] bg-[#130C1A26]"><img src="/src/assets/images/heart-white-icon.svg"></button>
        </div>

        <div>
        <h5 class="text-16 font-['Jost'] font-semibold text-[#2B2926]">Managing Stress & Anxiety</h5>
        <span class="text-12 font-['Jost'] font-medium text-[#68838E]">Mental Therapist</span>
        </div>
        
        <div class="flex justify-between mt-8">
        <div class="flex flex-col gap-[0.4rem]">
          <span class="text-10 font-['Jost'] font-normal text-[#93989A]">Price</span>
          <span class="text-14 font-['Jost'] font-medium text-[#010101]">$ 120.00</span>
        </div>
        <button class="rounded-full py-[1.2rem] px-[1.7rem] bg-gradient-to-r from-[#3A6FFD0D] to-[#D63ACA0D]"><span class="text-12 font-['Jost'] font-medium bg-gradient-to-r from-[#1A47BF] to-[#D63ACA] text-transparent bg-clip-text">Join Course</span></button>
      </div>
    </div>
</template>