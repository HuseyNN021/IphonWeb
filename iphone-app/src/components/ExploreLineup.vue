<script setup>
import CardExplore from './CardExplore.vue';


</script>

<template>
    <section class="w-full flex justify-center items-center my-10">
        <div class="w-[80vw]">
           <div >
                <h2 class="font-semibold text-[#1D1D1F]  text-[1.5rem] md:text-[2.5rem] lg:text-[3.375rem] ">Explore the lineup.</h2>
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