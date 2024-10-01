<script setup lang="ts">
import ApexCharts from 'apexcharts'
import Section from './Section.vue'
import DoctorCard from './DoctorCard.vue';
import CourseCard from './CourseCard.vue';

var options = {
  chart: {
    type: 'line'
  },
  series: [
    {
      name: 'sales',
      data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
    }
  ],
  xaxis: {
    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
  }
}

var chart = new ApexCharts(document.querySelector('#chart'), options)

chart.render()
</script>

<template>
  <h2
    class="text-32 font-['Jost'] font-semibold bg-gradient-to-r from-[#1A47BF] to-[#D63ACA] text-transparent bg-clip-text"
  >
    Hey! <span>Irina Duisimbekova</span>
  </h2>
  <p class="mt-2 text-16 font-['Jost'] font-medium text-[#68838E]">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore
  </p>

  <div class="mt-[3.2rem]">
    <div class="flex justify-between">
      <h3 class="text-24 font-['Jost'] font-semibold text-[#010101]">Activity</h3>
      <input />
    </div>
    <div class="flex gap-8 flex-nowrap">
      <div class="flex rounded-[2rem] w-full h-[13.3rem] py-12 px-8 shadow-lg">
        <img
          src="/src/assets/images/avatar_test.jfif"
          class="border-[0.5rem] rounded-full max-w-[7rem] w-full max-h-[7rem] h-full border-white shadow-md"
        />
        <div class="ml-[1.5rem] flex flex-col">
          <h4 class="text-[2rem] leading-[2.6rem] font-['Jost'] font-semibold text-[#2B2926]">
            Your Friends
          </h4>
          <span class="mt-[0.3rem] text-14 font-['Jost'] font-semibold text-[#13BA37]">New +3</span>
          <span class="mt-4 text-12 font-['Jost'] font-medium text-[#68838E]">SInce Last Moth</span>
        </div>
        <div class="ml-[7.7rem] flex items-end h-full">
          <span class="text-22 font-['Jost'] font-semibold text-[#010101]">02</span>
        </div>
      </div>

      <div class="flex rounded-[2rem] w-full h-[13.3rem] py-12 px-8 shadow-lg">
        <img
          src="/src/assets/images/avatar_test.jfif"
          class="border-[0.5rem] rounded-full max-w-[7rem] w-full max-h-[7rem] h-full border-white shadow-md"
        />
        <div class="ml-[1.5rem] flex flex-col">
          <h4 class="text-20 font-['Jost'] font-semibold text-[#2B2926]">Your Friends</h4>
          <span class="mt-[0.3rem] text-14 font-['Jost'] font-semibold text-[#13BA37]">New +3</span>
          <span class="mt-4 text-12 font-['Jost'] font-medium text-[#68838E]">SInce Last Moth</span>
        </div>
        <div class="ml-[7.7rem] flex items-end h-full">
          <span class="text-22 font-['Jost'] font-semibold text-[#010101]">02</span>
        </div>
      </div>

      <div class="flex rounded-[2rem] w-full h-[13.3rem] py-12 px-8 shadow-lg">
        <img
          src="/src/assets/images/avatar_test.jfif"
          class="border-[0.5rem] rounded-full max-w-[7rem] w-full max-h-[7rem] h-full border-white shadow-md"
        />
        <div class="ml-[1.5rem] flex flex-col">
          <h4 class="text-20 font-['Jost'] font-semibold text-[#2B2926]">Your Friends</h4>
          <span class="mt-[0.3rem] text-14 font-['Jost'] font-semibold text-[#13BA37]">New +3</span>
          <span class="mt-4 text-12 font-['Jost'] font-medium text-[#68838E]">SInce Last Moth</span>
        </div>
        <div class="ml-[7.7rem] flex items-end h-full">
          <span class="text-22 font-['Jost'] font-semibold text-[#010101]">02</span>
        </div>
      </div>
    </div>
  </div>

  <div>
    <apexchart id="chart"></apexchart>
  </div>

  <Section header="Recomended for You">
   <DoctorCard></DoctorCard>
   <DoctorCard></DoctorCard>
   <DoctorCard></DoctorCard>
  </Section>

  <Section header="Trending Courses">
    <CourseCard></CourseCard>
    <CourseCard></CourseCard>
  </Section>
</template>
