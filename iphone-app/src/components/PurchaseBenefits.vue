<script setup>
import { ref } from 'vue'

const sliderRef = ref(null)

const scrollLeft = () => {
  sliderRef.value.scrollBy({
    left: -320,
    behavior: 'smooth'
  })
}

const scrollRight = () => {
  sliderRef.value.scrollBy({
    left: 320,
    behavior: 'smooth'
  })
}
</script>
<template>
    <section class="w-full flex justify-center">
  <div class="w-[80vw] relative">

    <!-- HEADER -->
    <div class="flex justify-between items-center mb-6">
      <h2 class="font-semibold text-[1.5rem] md:text-[2.5rem]">
        Why Apple is the best place to buy iPhone.
      </h2>
      <a class="text-blue-600 font-medium">Shop iPhone ›</a>
    </div>

    <!-- SLIDER -->
    <div
      ref="sliderRef"
      class="flex gap-6 overflow-x-auto scroll-smooth
             snap-x snap-mandatory
             scrollbar-hide pb-4"
    >

      <!-- CARD -->
      <div
        v-for="i in 15"
        :key="i"
        class="min-w-[280px] bg-white rounded-2xl p-6
               shadow-sm snap-start flex-shrink-0 cursor-pointer hover:shadow-xl"
      >
        <h3 class="font-semibold mb-2">Card title</h3>
        <p class="text-sm text-gray-600">
          Apple-style benefit description text.
        </p>
      </div>

    </div>

    <!-- ARROWS -->
    <div class="flex justify-end gap-3 mt-4">
      <button
        @click="scrollLeft"
        class="w-8 h-8 rounded-full bg-gray-200
               flex items-center justify-center
               hover:bg-gray-300 transition"
      >
        ‹
      </button>
      <button
        @click="scrollRight"
        class="w-8 h-8 rounded-full bg-gray-200
               flex items-center justify-center
               hover:bg-gray-300 transition"
      >
        ›
      </button>
    </div>

  </div>
</section>

</template>

<style scoped>
    .scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

</style>