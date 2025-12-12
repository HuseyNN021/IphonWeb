<script setup>
import { ref } from 'vue';
import heroImg1 from '../assets/Images/Hero/heroImg1.webp'
import heroImg2 from '../assets/Images/Hero/heroImg2.webp'
const imgData=ref([
    heroImg1,heroImg2
])

const index=ref(0)

const increament=()=>{
    index.value++
    if(index.value>=imgData.value.length){
        index.value=0;
    }
}

const decreasment = () => {
  index.value--
  if (index.value < 0) {
    index.value = imgData.value.length - 1
  }
}
</script>

<template>
    <section class="w-full lg:h-screen flex justify-center items-center">
        <div class="w-[70vw] flex flex-col gap-2 p-1">
            <div class="flex items-center justify-between">
                <h2 class="font-bold text-[#1D1D1F] text-[1.5rem] lg:text-[5rem]">iPhone</h2>
                <p class="font-bold text-[#1D1D1F] text-[0.7rem] lg:text-[1.75rem]">Designed to be loved.</p>
            </div>
            <div class="flex relative items-center">
                <button @click="decreasment" class="w-4 absolute left-5 lg:left-10 bg-white rounded-full text-black"><</button>
                <img :src="imgData[index]" alt="" class="w-[100%] h-[20rem] md:h-[20rem] lg:h-[70vh] rounded-2xl">
                <button @click="increament"  class="w-4 absolute right-5 lg:right-10 bg-white rounded-full text-black">></button>
            </div>
        </div>
    </section>
</template>