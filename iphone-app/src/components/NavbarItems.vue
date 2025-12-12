<script setup>
import iphoneİmg from '../assets/Images/Navbar/Vector (2).webp'
import iphoneSE from '../assets/Images/Navbar/iphone_se_light__cdjrao3pq2he_large.svg.webp'
import compareImg from '../assets/Images/Navbar/iphone_compare_light__f01dnbvbb62y_large.svg.webp'
import airPods from '../assets/Images/Navbar/airpodsLight.webp'
import airTag from '../assets/Images/Navbar/airtagLight.webp'
import accessories from '../assets/Images/Navbar/accessoriesLight.webp'
import appleCard from '../assets/Images/Navbar/iphone_apple_card_light__eik9egogyro2_large.svg.webp'
import appleIOS from '../assets//Images/Navbar/iphone_ios_light__b0jhieo01t0i_large.svg.webp'
import iphoneShop from '../assets/Images/Navbar/shop_iphone_light__e4dlk2n6h26a_large.svg.webp'
import { ref } from 'vue'

const data=ref([
    {img: iphoneİmg, text: 'iPhone 16 Pro'},
    {img: iphoneİmg, text: 'iPhone 16'},
    {img: iphoneİmg, text: 'iPhone 15'},
    {img: iphoneİmg, text: 'iPhone 14'},
    {img: iphoneSE, text: 'iPhone SE'},
    {img: compareImg, text: 'Compare'},
    {img: airPods, text: 'AirPods'},
    {img: airTag, text: 'AirTag'},
    {img: accessories, text: 'Accossories'},
    {img: appleCard, text: 'Apple Card'},
    {img: appleIOS, text: 'IOS 18'},
    {img: iphoneShop, text: 'Shop iPhone'},
])
const count = ref(0)
const step = 4


const increament = () => {
  count.value += step
  if (count.value >= data.value.length) {
    count.value = 0
  }
}

const decreasment = () => {
  count.value -= step
  if (count.value < 0) {
    count.value = data.value.length - step
  }
}
</script>

<template>
    <nav class="hidden md:flex lg:flex">
        <ul class=" grid grid-rows-1 grid-cols-4 md:grid-cols-6 lg:grid-cols-12 place-content-center items-center">
            <li><a href="" class="flex flex-col items-center"><img :src="iphoneİmg" alt=""><p>iPhone 16 Pro</p></a></li>
            <li><a href="" class="flex flex-col items-center"><img :src="iphoneİmg" alt=""><p>iPhone 16 </p></a></li>
            <li><a href="" class="flex flex-col items-center"><img :src="iphoneİmg" alt=""><p>iPhone 15 </p></a></li>
            <li><a href="" class="flex flex-col items-center"><img :src="iphoneİmg" alt=""><p>iPhone 14 </p></a></li>
            <li><a href="" class="flex flex-col items-center"><img :src="iphoneSE" alt=""><p>iPhone SE </p></a></li>
            <li><a href="" class="flex flex-col items-center"><img :src="compareImg" alt=""><p>Compare</p></a></li>
            <li><a href="" class="flex flex-col items-center"><img :src="airPods" alt=""><p>AirPods</p></a></li>
            <li><a href="" class="flex flex-col items-center"><img :src="airTag" alt=""><p>AirTag</p></a></li>
            <li><a href="" class="flex flex-col items-center"><img :src="accessories" alt=""><p>Accossories</p></a></li>
            <li><a href="" class="flex flex-col items-center"><img :src="appleCard" alt=""><p>Apple Card</p></a></li>
            <li><a href="" class="flex flex-col items-center"><img :src="appleIOS" alt=""><p>IOS 18</p></a></li>
            <li><a href="" class="flex flex-col items-center"><img :src="iphoneShop" alt=""><p>Shop iPhone</p></a></li>
        </ul>
        <button class="block md:hidden lg:hidden">
            >
        </button>
    </nav>

    <nav class="flex md:hidden lg:hidden items-center gap-3">
        <button @click="decreasment" class="flex md:hidden lg:hidden  p-2">
            <
        </button> 
        <ul class="flex items-center justify-between h-[7rem] w-[18rem] transistion duration-300 ease">
            <li><a href=""><img :src="data[count].img" alt=""><p>{{ data[count].text }}</p></a></li>
            <li><a href=""><img :src="data[count+1].img" alt=""><p>{{ data[count+1].text }}</p></a></li>
            <li><a href=""><img :src="data[count+2].img" alt=""><p>{{ data[count+2].text }}</p></a></li>
            <li><a href=""><img :src="data[count+3].img" alt=""><p>{{ data[count+3].text }}</p></a></li>
        </ul>
        <button @click="increament" class="flex md:hidden lg:hidden  p-2">
            >
        </button>
    </nav>

</template>