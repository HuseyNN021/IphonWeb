<script setup>
import essentialImg1 from '../assets/Images/iPhoneEssentials/essentials.webp'
import essentialImg2 from '../assets/Images/iPhoneEssentials/essentials2.webp'
import { ref } from 'vue';

const sliderRef=ref(null)

const scrollLeft=()=>{
    sliderRef.value.scrollBy({
        left: -320,
        behavior: 'smooth'
    })
}
const scrollRight=()=>{
    sliderRef.value.scrollBy({
        left: 320,
        behavior: 'smooth'
    })
}
</script>
<template>

    <section class="w-full flex justify-center items-center mb-5">
        <div  class="w-[80vw] flex flex-col gap-6">

             <!-- HEADER -->
            <div class="flex flex-col md:flex-row lg:flex-row justify-between items-start md:items-center lg:items-center mb-6">
                <h2 class="font-semibold text-[1.5rem] md:text-[2.5rem]">
                    iPhone essentials.               
                </h2>
                <a class="text-blue-600 font-medium">All iPhone accsessories ›</a>
            </div>
            <!-- Desktop -->
            <div class="hidden md:flex lg:flex flex-col md:flex-row lg:flex-row gap-5">
                <div class="bg-[#F5F5F7] flex flex-col justify-center items-center gap-1 rounded-2xl pt-5">
                    <h3 class="font-bold text-[1.7rem]">
                        MagSafe
                    </h3>
                    <p class="text-center text-[0.8rem] w-[15rem]">
                        Snap on a magnetic case, wallet, or both.
                        And get faster, more efficient wireless charging.
                    </p>
                    <a class="text-blue-500 text-[0.8rem]" href="">Shop MagSafe accsessories  ></a>
                    <img class=" bg-transparent rounded-b-2xl " :src="essentialImg2" alt="">
                </div>
                
                <div class="bg-[#F5F5F7] flex flex-col justify-center items-center gap-1 rounded-2xl pt-5">
                    <h3 class="font-bold text-[1.7rem]">
                        AirTag
                    </h3>
                    <p class="text-center text-[0.8rem] w-[15rem]">
                        Attach one to your keys.
                        Put another in your backpack.
                        If they’re misplaced, just use the Find My app.
                    </p>
                    <a class="text-blue-500 text-[0.8rem]" href="">Buy ></a>
                    <img class=" bg-transparent rounded-b-2xl" :src="essentialImg1" alt="">
                </div>
            </div>

            <!-- Mobile -->
            <div class="block md:hidden lg:hidden">
                <div ref="sliderRef" class="mobilewrapper relative flex md:hidden lg:hidden w-[80vw] overflow-x-auto scroll-smooth snap-x snap-mandatory bg-amber-200 gap-5">
                    <div class="bg-[#F5F5F7] flex flex-col justify-center items-center gap-1 rounded-2xl pt-5 min-w-[70vw] snap-start">
                        <h3 class="font-bold text-[1.7rem]">
                            MagSafe
                        </h3>
                        <p class="text-center text-[0.8rem] w-[15rem]">
                            Snap on a magnetic case, wallet, or both.
                            And get faster, more efficient wireless charging.
                        </p>
                        <a class="text-blue-500 text-[0.8rem]" href="">Shop MagSafe accsessories  ></a>
                        <img class=" bg-transparent rounded-b-2xl " :src="essentialImg2" alt="">
                    </div>
                    
                    <div class="bg-[#F5F5F7] flex flex-col justify-center items-center gap-1 rounded-2xl pt-5 min-w-[70vw] snap-start">
                        <h3 class="font-bold text-[1.7rem]">
                            AirTag
                        </h3>
                        <p class="text-center text-[0.8rem] w-[15rem]">
                            Attach one to your keys.
                            Put another in your backpack.
                            If they’re misplaced, just use the Find My app.
                        </p>
                        <a class="text-blue-500 text-[0.8rem]" href="">Buy ></a>
                        <img class=" bg-transparent rounded-b-2xl" :src="essentialImg1" alt="">
                    </div>
                  
                </div>
                <div class="flex items-center gap-3 mt-4 justify-end">
                    <button @click="scrollLeft" class="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition"><</button>
                    <button @click="scrollRight" class="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition">></button>
                </div>
            </div>
        </div>

            
    </section>

</template>
<style scoped>

.mobilewrapper::-webkit-scrollbar{
    display: none;
}
</style>