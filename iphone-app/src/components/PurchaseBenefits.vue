<script setup>
import { ref, computed } from 'vue'
import benefitsImg1 from '../assets/Images/PurchaseIcons/benefitsImg1.webp'
import benefitsImg2 from '../assets/Images/PurchaseIcons/benefitsImg2.webp'
import benefitsImg3 from '../assets/Images/PurchaseIcons/benefitsImg3.webp'
import benefitsImg4 from '../assets/Images/PurchaseIcons/benefitsImg4.webp'
const sliderRef = ref(null)

const benefitsCard=ref([
  {image:benefitsImg3, title:'Save with Apple',description:'Get $170–$630 in credit toward iPhone 16 or iPhone 16 Pro when you trade in iPhone 12 or higher.'},
  {image:benefitsImg1, title:'Pay over time interest-free',description:'When you choose to check out with Apple Card Monthly Installments.'},
  {image:benefitsImg2, title:'Apple. Your one-stop shop for incredible carrier deals.',description:'Get up to $830-$1000 in credit on a new iPhone with AT&T, Boost Mobile, T-Mobile, or Verizon. Trade-in may be reuired'},
  {image:benefitsImg4, title:'Get flexible delivery and easy pickup.',description:'Choose two-hour delivery from an Apple Store, free delivery, or easy pickup options.'},
  {image:benefitsImg3, title:'Save with Apple',description:'Get $170–$630 in credit toward iPhone 16 or iPhone 16 Pro when you trade in iPhone 12 or higher.'},
  {image:benefitsImg1, title:'Pay over time interest-free',description:'When you choose to check out with Apple Card Monthly Installments.'},
  {image:benefitsImg2, title:'Apple. Your one-stop shop for incredible carrier deals.',description:'Get up to $830-$1000 in credit on a new iPhone with AT&T, Boost Mobile, T-Mobile, or Verizon. Trade-in may be reuired'},
  {image:benefitsImg4, title:'Get flexible delivery and easy pickup.',description:'Choose two-hour delivery from an Apple Store, free delivery, or easy pickup options.'},
  {image:benefitsImg3, title:'Save with Apple',description:'Get $170–$630 in credit toward iPhone 16 or iPhone 16 Pro when you trade in iPhone 12 or higher.'},
  {image:benefitsImg1, title:'Pay over time interest-free',description:'When you choose to check out with Apple Card Monthly Installments.'},
  {image:benefitsImg2, title:'Apple. Your one-stop shop for incredible carrier deals.',description:'Get up to $830-$1000 in credit on a new iPhone with AT&T, Boost Mobile, T-Mobile, or Verizon. Trade-in may be reuired'},
  {image:benefitsImg4, title:'Get flexible delivery and easy pickup.',description:'Choose two-hour delivery from an Apple Store, free delivery, or easy pickup options.'},
  {image:benefitsImg3, title:'Save with Apple',description:'Get $170–$630 in credit toward iPhone 16 or iPhone 16 Pro when you trade in iPhone 12 or higher.'},
  {image:benefitsImg1, title:'Pay over time interest-free',description:'When you choose to check out with Apple Card Monthly Installments.'},
  {image:benefitsImg2, title:'Apple. Your one-stop shop for incredible carrier deals.',description:'Get up to $830-$1000 in credit on a new iPhone with AT&T, Boost Mobile, T-Mobile, or Verizon. Trade-in may be reuired'},
  {image:benefitsImg4, title:'Get flexible delivery and easy pickup.',description:'Choose two-hour delivery from an Apple Store, free delivery, or easy pickup options.'},
])



const scrollLeft = () => {
  sliderRef.value.scrollBy({
    left: -320,
    behavior: 'smooth'
  })
}

const scrollRight = () => {
  sliderRef.value.scrollBy({
    left: 320,
    behavior: 'smooth'
  })
}


</script>
<template>
  <section class="w-full flex justify-center">
    <div class="w-[80vw] relative">
      <!-- HEADER -->
      <div class="flex flex-col md:flex-row lg:flex-row justify-between items-start md:items-center lg:items-center mb-6">
        <h2 class="font-semibold text-[1.5rem] md:text-[2.5rem]">
          Why Apple is the best place to buy iPhone.
        </h2>
        <a class="text-blue-600 font-medium">Shop iPhone ›</a>
      </div>

      <!-- SLIDER -->
      <div
        ref="sliderRef"
        class="flex gap-6 overflow-x-auto scroll-smooth
              snap-x snap-mandatory
              scrollbar-hide pb-4"
      >

        <!-- CARD -->
        
            <div
              v-for="(value,index) in benefitsCard"
              :key="index"
              class="min-w-[280px] bg-white rounded-2xl p-6
                    shadow-sm snap-start flex-shrink-0 cursor-pointer hover:shadow-xl"
            >
                <img :src="value.image" alt="">
                <h3 class="font-semibold mb-2 w-[10rem]">{{ value.title }}</h3>
                <p class="text-sm text-gray-600 w-[15rem]">
                  {{ value.description }}
                </p>
            </div>
    

      </div>

      <!-- ARROWS -->
      <div class="flex justify-end gap-3 mt-4">
        <button
          @click="scrollLeft"
          class="w-8 h-8 rounded-full bg-gray-200
                flex items-center justify-center
                hover:bg-gray-300 transition"
        >
          ‹
        </button>
        <button
          @click="scrollRight"
          class="w-8 h-8 rounded-full bg-gray-200
                flex items-center justify-center
                hover:bg-gray-300 transition"
        >
          ›
        </button>
      </div>

    </div>
  </section>

</template>

<style scoped>
    .scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

</style>