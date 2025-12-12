<script setup>
const { title, description, image, textClass } = defineProps({
  title: String,
  description: String,
  image: String,
  textClass: {
    type: String,
    default: 'text-[#F5F5F7]'
  }
})
</script>

<template>
  <section
    class="w-[55vw] md:w-[35vw] lg:w-[20vw] h-[30rem] lg:h-[35rem]
            hover:scale-105 cursor-pointer
           bg-cover bg-center bg-no-repeat p-3 rounded-2xl"
    :style="{ backgroundImage: `url(${image})` }"
  >
    <div>
      <p class="font-bold text-[0.7rem] lg:text-[1rem]" :class="textClass">
        {{ description }}
      </p>
      <h3 class="font-bold text-[1.2rem] lg:text-[1.75rem]" :class="textClass">
        {{ title }}
      </h3>
    </div>
  </section>
</template>
