<script setup>
import CardExplore from './CardExplore.vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { onMounted } from 'vue';
gsap.registerPlugin(ScrollTrigger)

onMounted(()=>{
    gsap.from('.lineUpContent',{
        scrollTrigger:{
            trigger:'.lineUpBox',
            start: 'top 50%',
            toggleActions: 'play none none none'
        },
        duration:0.8,
        opacity:0,
        y: -50
    })
      gsap.from('.wrapper',{
        scrollTrigger: {
            trigger:'.lineUpBox',
            start: 'top 70%',
            toggleActions: 'play none none none'
        },
        duration: 0.9,
    scale: 0.8,
    opacity: 0,
    y: 20,
    stagger: 0.18,
    ease: 'power3.out'
    })
})

</script>

<template>
    <section class="lineUpBox w-full flex justify-center items-center my-10">
        <div class="w-[80vw]">
           <div >
                <h2 class="lineUpContent font-semibold text-[#1D1D1F]  text-[1.5rem] md:text-[2.5rem] lg:text-[3.375rem] ">Explore the lineup.</h2>
                <div class="flex flex-col justify-center items-center">
                    <section class="wrapper flex gap-10  w-full md:w-[60vw] lg:w-[81vw] overflow-x-auto pl-5 md:pl-0 lg:pl-0 p-1">
                        <CardExplore/>
                        <CardExplore/>
                        <CardExplore/>
                        <CardExplore/>
                        <CardExplore/>
                        <CardExplore/>
                        <CardExplore/>
                    </section>
                </div>
           </div>
        </div>
    </section>
</template>

<style scoped>

    .wrapper::-webkit-scrollbar{
        display: none;
    }
</style>