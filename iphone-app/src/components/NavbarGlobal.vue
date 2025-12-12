<script setup>
import appleLogo from '../assets/Images/Navbar/Vector (5).webp'
import searchIcon from '../assets/Images/Navbar/Vector (4).webp'
import basketIcon from '../assets/Images/Navbar/Vector (3).webp'

</script>

<template>

    <section class="w-[100vw] flex justify-between md:justify-center lg:justify-center px-4 lg:p-0 items-center gap-3">
        <a href=""><img :src="appleLogo" alt=""></a>
        <ul class="hidden overflow-x-auto md:flex lg:flex items-center gap-4">
            <li class="text-[#000000CC] text-[0.9rem]"><a href="">Store</a></li>
            <li class="text-[#000000CC] text-[0.9rem] "><a href="">Mac</a></li>
            <li class="text-[#000000CC] text-[0.9rem] "><a href="">iPad</a></li>
            <li class="text-[#000000CC] text-[0.9rem] "><a href="">iPhone</a></li>
            <li class="text-[#000000CC] text-[0.9rem] "><a href="">Watch</a></li>
            <li class="text-[#000000CC] text-[0.9rem] "><a href="">Vision</a></li>
            <li class="text-[#000000CC] text-[0.9rem] "><a href="">AirPods</a></li>
            <li class="text-[#000000CC] text-[0.9rem] "><a href="">TV & Home</a></li>
            <li class="text-[#000000CC] text-[0.9rem] "><a href="">Wntertainment</a></li>
            <li class="text-[#000000CC] text-[0.9rem] "><a href="">Accessories</a></li>
            <li class="text-[#000000CC] text-[0.9rem] "><a href="">Support</a></li>
        </ul>
        <div class="flex items-center gap-3">
            <a href=""><img :src="searchIcon" alt=""></a>
            <a href=""><img :src="basketIcon" alt=""></a>
            <button class="block md:hidden lg:hidden">
                X
            </button>
        </div>
    </section>
</template>