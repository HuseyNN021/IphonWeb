<script setup>
import { ref } from 'vue';
import CardHighlights from './CardHighlights.vue';
import productImg1 from '../assets/Images/ProductHiglight/productImg1.jpg'
import productImg2 from '../assets/Images/ProductHiglight/productImg2.webp'
import productImg3 from '../assets/Images/ProductHiglight/productImg3.webp'
import productImg4 from '../assets/Images/ProductHiglight/productImg4.webp'


const data=ref([
    {image: productImg1,title: 'AI‑opening possibilities.', description: 'Apple Intelligence',textClass: 'text-[#F5F5F7]'},
    {image: productImg2,title: 'Picture your best photos and videos.', description: 'Cutting-Edge Cameras',textClass: 'text-black'},
    {image: productImg3,title: 'Fast that lasts.', description: 'Chip and Battery Life',textClass: 'text-[#F5F5F7]'},
    {image: productImg4,title: 'Beautiful and durable, by design.', description: 'Innovation', textClass:'text-[#F5F5F7]'},
])

const index=ref(0)

const increament=()=>{
    index.value++
    if(index.value>=data.value.length){
        index.value=0;
    }
}

const decreasment = () => {
  index.value--
  if (index.value < 0) {
    index.value = data.value.length - 1
  }
}
</script>

<template>
        <section class="w-full flex items-center justify-center">
            <div class="w-[80vw]">
                <div class="flex flex-col justify-center items-center gap-5">
                  
                    <div class="flex justify-center lg:justify-start w-full">
                        <h2 class="font-semibold text-[#1D1D1F] text-[1.5rem] md:text-[2.5rem] lg:text-[3.375rem]">Get to know iPhone.</h2>
                    </div>
                    <!-- Desktop -->
                    <div class="hidden md:grid lg:grid md:grid-cols-2 lg:grid-cols-4 grid-rows-1 gap-10 place-content-center  ">
                        <CardHighlights    class="transition-transform duration-400 ease-out hover:scale-105" v-for="value in data" :title="value.title" :description="value.description" :image="value.image" :textClass="value.textClass"/>
                    </div>
                    <!-- Mobile -->
                    <div class="flex md:hidden lg:hidden items-center gap-5">
                        <button @click="decreasment" class="h-[10rem] bg-gray-100 p-1 rounded-xl shadow-xl"><</button>
                        <div class="grid md:hidden lg:hidden grid-cols-1 gap-5">
                            <CardHighlights  :title="data[index].title" :description="data[index].description" :image="data[index].image" :textClass="data[index].textClass"/>
                        </div>
                        <button @click="increament" class="h-[10rem] bg-gray-100 p-1 rounded-xl shadow-xl">></button>
                    </div>
                </div>
            </div>
        </section>
</template>