<script setup lang="ts">

</script>

<template>
     <div class="flex flex-col rounded-[2rem] p-8 w-full shadow-lg">
      <div class="flex justify-between">
        <img
          src="/src/assets/images/avatar_test.jfif"
          class="border-[0.3rem] rounded-full max-w-[5.3rem] w-full max-h-[5.3rem] h-full border-white shadow-md"
        />
        <div class="flex items-center gap-[1.2rem]">
          <div class="flex gap-4 rounded-full py-[0.5rem] px-[1rem] bg-gradient-to-r from-[#3A6FFD0D] to-[#D63ACA0D]">
            <div class="flex items-center gap-[0.4rem]">
              <img src="/src/assets/images/age-icon.svg" /><span
                class="text-14 font-['Jost'] font-medium bg-gradient-to-r from-[#1A47BF] to-[#D63ACA] text-transparent bg-clip-text"
                >28</span
              >
            </div>
            <div class="flex items-center gap-[0.4rem]">
              <img src="/src/assets/images/sex-icon.svg" /><span
                class="text-14 font-['Jost'] font-medium bg-gradient-to-r from-[#1A47BF] to-[#D63ACA] text-transparent bg-clip-text"
                >Male</span
              >
            </div>
          </div>
          <div class="flex items-center gap-[0.2rem] rounded-full py-[0.5rem] px-[0.8rem] bg-[#FDB133]">
            <img src="/src/assets/images/star-icon-white.svg">
            <span class="flex items-center text-10/[1.2rem] font-['Jost'] font-medium text-white">4.5</span>
          </div>
        </div>
      </div>

      <h5 class="mt-4 text-16 font-['Jost'] font-semibold text-[#2B2926]">Nelson Jhons</h5>
      <span class="text-12 font-['Jost'] font-medium text-[#68838E]">Mental Therapist</span>
      <span class="mt-4 text-12 font-['Jost'] font-normal text-[#68838E]">Houston, USA  5+ Years of Exp  English, Spanish</span>
      <div class="flex gap-[0.5rem] mt-8 ">
        <div class="rounded-full py-2 px-4 bg-[#1F1E280D]"><span class="text-10 font-['Jost'] font-medium text-[#68838E]">Therapiest</span></div>
        <div class="rounded-full py-2 px-4 bg-[#1F1E280D]"><span class="text-10 font-['Jost'] font-medium text-[#68838E]">Good Surgeon</span></div>
        <div class="rounded-full py-2 px-4 bg-[#1F1E280D]"><span class="text-10 font-['Jost'] font-medium text-[#68838E]">Mental Therapiest</span></div>
        <div class="rounded-full py-2 px-4 bg-[#1F1E280D]"><span class="text-10 font-['Jost'] font-medium text-[#68838E]">+9</span></div>
      </div>
      <div class="flex justify-between mt-8">
        <div class="flex flex-col gap-[0.4rem]">
          <span class="text-10 font-['Jost'] font-normal text-[#93989A]">Price</span>
          <span class="text-14 font-['Jost'] font-medium text-[#010101]">$ 120.00</span>
        </div>
        <button class="rounded-full py-[1.2rem] px-[1.7rem] bg-gradient-to-r from-[#3A6FFD0D] to-[#D63ACA0D]"><span class="text-12 font-['Jost'] font-medium bg-gradient-to-r from-[#1A47BF] to-[#D63ACA] text-transparent bg-clip-text">Book Appointment</span></button>
      </div>
    </div>
</template>