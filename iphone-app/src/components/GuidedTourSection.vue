<script setup>
import guidedTourImg from '../assets/Images/GuideTour/guideTour.webp'
</script>
<template>

<section class="w-full flex justify-center">
  <div class="w-[80vw] flex flex-col gap-6">

    <h2
      class="font-semibold text-[#1D1D1F]
             text-[1.5rem] md:text-[2.5rem] lg:text-[3.375rem]
             px-4 md:px-10 lg:px-20"
    >
      Take a closer look at our latest models.
    </h2>

    <div
      class="relative w-full h-[30rem] rounded-2xl overflow-hidden
             bg-cover bg-center"
      :style="{ backgroundImage: `url(${guidedTourImg})` }"
    >

      <div class="absolute inset-0 bg-black/40"></div>

      <div class="relative z-10 p-6 md:p-10 flex flex-col gap-4">
        <h3 class="text-white text-[1.5rem] md:text-[2rem] font-bold max-w-[30rem]">
          A Guided Tour of iPhone 16 & iPhone 16 Pro
        </h3>

        <button
          class="bg-white text-black px-5 py-2 rounded-full
                 font-medium w-fit
                 hover:scale-105 active:scale-95 transition"
        >
          Watch the film
        </button>
      </div>

    </div>

  </div>
</section>


</template>