<script setup>
import { onMounted, ref } from 'vue';
import { gsap } from "gsap"
import SplitText from "gsap/SplitText"
import heroImg1 from '../assets/Images/Hero/heroImg1.webp'
import heroImg2 from '../assets/Images/Hero/heroImg2.webp'


onMounted(()=>{
    gsap.from('.boxTitle',{
        duration:0.7,
        y:-40,
        ease: 'power3.in',
        opacity: 0
    })

    gsap.from(".boxImg",{
    duration: 0.8,
    y: 70,
    ease: 'power3.out',
    opacity:0
})

})

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
    <section class=" w-full lg:h-screen flex justify-center items-center">
        <div class="w-[80vw] flex flex-col gap-2 p-1">
            <div class="boxTitle flex items-center justify-between">
                <h2 class="gsapText font-bold text-[#1D1D1F] text-[1.5rem] lg:text-[5rem]">iPhone</h2>
                <p class="gsapText font-bold text-[#1D1D1F] text-[0.7rem] lg:text-[1.75rem]">Designed to be loved.</p>
            </div>
            <div class="boxImg flex relative items-center ">
                <button @click="decreasment" class="w-4 absolute left-5 lg:left-10 bg-white rounded-full text-black"><</button>
                <Transition name="fade" mode="out-in">
                    <img :src="imgData[index]" alt="" :key="index" class="w-[100%] h-[20rem] md:h-[20rem] lg:h-[70vh] rounded-2xl ">
                </Transition>
                <button @click="increament"  class="w-4 absolute right-5 lg:right-10 bg-white rounded-full text-black">></button>
            </div>
        </div>
    </section>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>