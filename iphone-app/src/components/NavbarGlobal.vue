<script setup>
import appleLogo from '../assets/Images/Navbar/Vector (5).webp'
import searchIcon from '../assets/Images/Navbar/Vector (4).webp'
import basketIcon from '../assets/Images/Navbar/Vector (3).webp'
import { ref } from 'vue';

const isToggle=ref(false)

const toggle=()=>{
    isToggle.value=!isToggle.value
}
</script>

<template>

    <section class="relative w-full flex justify-between md:justify-center lg:justify-center px-4 lg:p-0 items-center gap-3">
        
        <!-- Desktop -->
        <div class="w-[90vw] hidden md:flex lg:flex justify-between items-center gap-5">
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
            </div>

        </div>    
     
<div class="flex flex-col">
      <!-- MOBILE NAV -->
  <div class="w-[90vw] flex  md:hidden justify-between items-center">
    <img :src="appleLogo" alt="">

    <div class="flex items-center gap-3">
      <img :src="searchIcon" alt="">
      <img :src="basketIcon" alt="">
      <button @click="toggle">☰</button>
    </div>
  </div>

  <!-- MOBILE MENU DROPDOWN -->
  <div
    v-show="isToggle"
    class=" w-full bg-white shadow-md md:hidden  z-9999"
  >
    <ul class="flex flex-col gap-4 p-6">
      <li v-for="item in ['Store','Mac','iPad','iPhone','Watch','Vision','AirPods','TV & Home','Entertainment','Accessories','Support']"
          :key="item"
          class="text-[#000000CC] text-[1rem]">
        <a href="#">{{ item }}</a>
      </li>
    </ul>
  </div>
</div>
    </section>
</template>