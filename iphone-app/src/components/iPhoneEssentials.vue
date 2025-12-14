<script setup>
import essentialImg1 from '../assets/Images/iPhoneEssentials/essentials.webp'
import essentialImg2 from '../assets/Images/iPhoneEssentials/essentials2.webp'
</script>
<template>

    <section class="w-full flex justify-center items-center mb-5">
        <div  class="w-[80vw] flex flex-col gap-6">

             <!-- HEADER -->
            <div class="flex justify-between items-center mb-6">
                <h2 class="font-semibold text-[1.5rem] md:text-[2.5rem]">
                    iPhone essentials.               
                </h2>
                <a class="text-blue-600 font-medium">All iPhone accsessories ›</a>
            </div>

            <div class="flex flex-col md:flex-row lg:flex-row gap-5">
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
        </div>

            
    </section>

</template>