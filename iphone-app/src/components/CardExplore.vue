<script setup>
import exploreImg1 from '../assets/Images/ExploreLineUp/explore1.webp'
import exploreImg2 from '../assets/Images/ExploreLineUp/explore2.webp'
import exploreImg3 from '../assets/Images/ExploreLineUp/explore3.webp'
import exploreImg4 from '../assets/Images/ExploreLineUp/explore4.webp'
import exploreImg5 from '../assets/Images/ExploreLineUp/explore5.webp'
import exploreiPhone from '../assets/Images/ExploreLineUp/exploreImg.webp'
</script>

<template>
    <section class=" min-w-[23rem] md:min-w-[25rem] lg:min-w-[25vw] ">
        <div class=" flex flex-col justify-center items-center shadow-xl rounded-2xl p-1">
            <div class="flex flex-col items-center gap-2">
                <img :src="exploreiPhone" alt="">
                <p class="text-[#B64400] text-[0.75rem] font-bold">New</p>
                <h3 class="text-[#1D1D1F] text-[1.75rem] font-bold">iPhone 16 Pro</h3>
                <p>The Ultimate iPhone <br>from $999 or $45/mo</p>
                <div class="flex items-center gap-5">
                    <button class="bg-[#0071E3] rounded-2xl p-2">Learn More</button> 
                    <span>Buy ></span>
                </div>
            </div>
            <div class="flex flex-col items-center justify-center">
                <div class="flex flex-col justify-center items-center">
                    <img :src="exploreImg2" alt="">
                    <p class="text-[0.75rem] text-[#1D1D1F]">Apple Intelligence</p>
                </div>
                <div class="flex flex-col justify-center items-center">
                    <img :src="exploreImg5" alt="">
                    <p class="text-[0.75rem] text-[#1D1D1F]">A18 Pro chip with 6-core GPU</p>
                </div>
                <div class="flex flex-col justify-center items-center">
                    <img :src="exploreImg1" alt="">
                    <p class="text-[0.75rem] text-[#1D1D1F]">Camera Control</p>
                </div>
                <div class="flex flex-col justify-center items-center">
                    <img :src="exploreImg3" alt="">
                    <p class="text-[0.75rem] text-[#1D1D1F]">Pro camera system</p>
                    <p class="text-[0.75rem] text-[#1D1D1F]">Our most advanced 48MP Fusion camera</p>
                    <p class="text-[0.75rem] text-[#1D1D1F]">5x Telephoto camera</p>
                    <p class="text-[0.75rem] text-[#1D1D1F]">48MP Ultra Wide camera</p>
                </div>
                <div class="flex flex-col justify-center items-center">
                    <img :src="exploreImg4" alt="">
                    <p class="text-[0.75rem] text-[#1D1D1F]">Up to 33 hours video playback</p>
                </div>
            </div>
        </div>
    </section>
</template>