<script setup>
import { reactive, ref } from 'vue';
import appleLogo from '../assets/Images/Navbar/Vector (5).webp'

const dropDownFooter=reactive([
    {
        title:"Shop and Learn",
        data:['Store','Mac','iPad','iPhone','Watch','Vision','AirPods','TV & Home','AirTag','Accessories','Gift Cards'],  
        isOpen:false
    },
    {
        title:"Apple Waller",
        data:['Wallet','Apple Card','Apple Pay','Apple Cash'], 
        isOpen:false
    },
    {
        title:"Account",
        data:['Manage Your Apple Account','Apple Store Account','iCloud.com'], 
        isOpen:false
    },
    {
        title:"Entertainment",
        data:['Apple One','Apple TV+','Apple Music','Apple Arcade','Apple Fitness+','Apple News+','Apple Podcasts','Apple Books','App Store'], 
        isOpen:false
    },
    {
        title:"Apple Store",
        data:['Find a Store','Genius Bar','Today at Apple','Group Reservations','Apple Camp','Apple Store App','Certified Refurbished','Apple Trade In','Financing','Carrier Deals at Apple','Order Status','Shopping Help'],
        isOpen:false
    },
    {
        title:"For Business",
        data:['Apple and Business','Shop for Business'],
        isOpen:false
    },
    {
        title:"For Education",
        data:['Apple and Education','Shop for K-12','Shop for College'],
        isOpen:false
    },
    {
        title:"For Healthcare",
        data:['Apple in Healthcare','Mac in Healthcare','Health on Apple Watch','Health Records on iPhone and iPad'],
        isOpen:false
    },
    {
        title:"For Government",
        data:['Shop for Government','Shop for Veterans and Military'],
        isOpen:false
    },
    {
        title:"Apple Values",
        data:['Accessibility','Education','Environment','Inclusion and Divversity','Privacy','Racial Equity and Justice','Supply Chain'],
        isOpen:false
    },
    {
        title:"About Apple",
        data:['Newsroom','Apple Leadership','Career Opportunities','Investors','Ethics & Compliance','Events','Contact Apple'],
        isOpen:false
    },
])

const toggle=(index)=>{
    dropDownFooter[index].isOpen=!dropDownFooter[index].isOpen    
}
</script>

<template>
    <section class="w-full flex justify-center items-center bg-[#F5F5F7]">
        <div class="w-[70vw] ">
            <hr class="bg-gray-700">
            <!-- Header -->
            <div class="flex items-center gap-3 p-5">
                <img :src="appleLogo" alt="">
                <p>>   iPhone</p>
            </div>

            <!-- Navigation -->
             <!-- Desktop -->
             <div class="hidden md:grid lg:grid  grid-cols-3 lg:grid-cols-5 gap-5 p-5"> 
                <div class="flex flex-col gap-5">
                    <ul>
                        <p class="text-[#000000E0] font-bold">Shop and Learn</p>
                        <li class="text-[0.8rem]">Store</li>
                        <li class="text-[0.8rem]">Mac</li>
                        <li class="text-[0.8rem]">iPad</li>
                        <li class="text-[0.8rem]">iPhone</li>
                        <li class="text-[0.8rem]">Watch</li>
                        <li class="text-[0.8rem]">Vision</li>
                        <li class="text-[0.8rem]">AirPods</li>
                        <li class="text-[0.8rem]">TV & Home</li>
                        <li class="text-[0.8rem]">airTag</li>
                        <li class="text-[0.8rem]">Accessories</li>
                        <li class="text-[0.8rem]">Gift Cards</li>
                    </ul>
                    <ul>
                        <p class="text-[#000000E0] font-bold">Apple Wallet</p>
                        <li class="text-[0.8rem]">Apple Cars</li>
                        <li class="text-[0.8rem]">Apple Pay</li>
                        <li class="text-[0.8rem]">Apple Cash</li>
                    </ul>
                </div>
                <div class="flex flex-col gap-5">
                    <ul>
                        <p class="text-[#000000E0] font-bold">Account</p>
                        <li class="text-[0.8rem]">Manage Your Apple Account</li>
                        <li class="text-[0.8rem]">Apple Store Account</li>
                        <li class="text-[0.8rem]">iCloud.com</li>
                    </ul>
                    <ul>
                        <p class="text-[#000000E0] font-bold">Entertainment</p>
                        <li class="text-[0.8rem]">Apple One</li>
                        <li class="text-[0.8rem]">Apple TV+</li>
                        <li class="text-[0.8rem]">Apple Music</li>
                        <li class="text-[0.8rem]">Apple Arcade</li>
                        <li class="text-[0.8rem]">Apple Fitness+</li>
                        <li class="text-[0.8rem]">Apple News+</li>
                        <li class="text-[0.8rem]">Apple Podcasts</li>
                        <li class="text-[0.8rem]">Apple Books</li>
                        <li class="text-[0.8rem]">App Store</li>
                    </ul>
                </div>
                <div class="flex flex-col gap-5">
                    <ul>
                        <p class="text-[#000000E0] font-bold">App Store</p>
                        <li class="text-[0.8rem]">Find a Store</li>
                        <li class="text-[0.8rem]">Genius Bar</li>
                        <li class="text-[0.8rem]">Today at Apple</li>
                        <li class="text-[0.8rem]">Group Reservations</li>
                        <li class="text-[0.8rem]">Apple Camp</li>
                        <li class="text-[0.8rem]">Apple Store App</li>
                        <li class="text-[0.8rem]">Certified Refurbished</li>
                        <li class="text-[0.8rem]">Apple Trade In</li>
                        <li class="text-[0.8rem]">Financing</li>
                        <li class="text-[0.8rem]">Carrier Deals at Apple</li>
                        <li class="text-[0.8rem]">Order Status</li>
                        <li class="text-[0.8rem]">Shopping Help</li>
                    </ul>
                </div>
                <div class="flex flex-col gap-5">
                    <ul>
                        <p class="text-[#000000E0] font-bold">For Business</p>
                        <li class="text-[0.8rem]">Apple and Business</li>
                        <li class="text-[0.8rem]">Shop and Business</li>
                    </ul>
                    <ul>
                        <p class="text-[#000000E0] font-bold">For Education</p>
                        <li class="text-[0.8rem]">Apple and Education</li>
                        <li class="text-[0.8rem]">Shop for K-12</li>
                        <li class="text-[0.8rem]">Shop for College</li>
                    </ul>
                    <ul>
                        <p class="text-[#000000E0] font-bold">
                            For Healthcare
                        </p>
                        <li class="text-[0.8rem]">Apple in Healthcare</li>
                        <li class="text-[0.8rem]">Mac in Healthcare</li>
                        <li class="text-[0.8rem]">Health on Apple Watch</li>
                        <li class="text-[0.8rem]">Health Records on iPhone and iPad</li>
                    </ul>
                    <ul>
                        <p class="text-[#000000E0] font-bold">For Government</p>
                        <li class="text-[0.8rem]">Shop for Government</li>
                        <li class="text-[0.8rem]">Shop for Veterans and Military</li>
                    </ul>
                </div>
                <div class="flex flex-col gap-5">
                    <ul>
                        <p class="text-[#000000E0] font-bold">Apple Values</p>
                        <li class="text-[0.8rem]">Accessibility</li>
                        <li class="text-[0.8rem]">Education</li>
                        <li class="text-[0.8rem]">Environment</li>
                        <li class="text-[0.8rem]">Inclusion adn Diversity</li>
                        <li class="text-[0.8rem]">Privacy</li>
                        <li class="text-[0.8rem]">Racial Equity and Justice</li>
                        <li class="text-[0.8rem]">Supply Chain</li>
                    </ul>
                    <ul>
                        <p class="text-[#000000E0] font-bold">About Apple</p>
                        <li class="text-[0.8rem]">Newsroom</li>
                        <li class="text-[0.8rem]">Apple Leadership</li>
                        <li class="text-[0.8rem]">Career Opportunities</li>
                        <li class="text-[0.8rem]">Investors</li>
                        <li class="text-[0.8rem]">Ethichs & Compliance</li>
                        <li class="text-[0.8rem]">Events</li>
                        <li class="text-[0.8rem]">Contact Apple</li>
                    </ul>
                </div>
             </div>
             <!-- Mobil -->
              <div class="block md:hidden lg:hidden ">
                <div v-for="(value,index) in dropDownFooter"  :key="index">
                    <!-- Question -->
                    <button
                        @click="toggle(index)"
                        class="w-full flex justify-between items-center "
                    >
                        <p class="text-[#1D1D1F] text-md md:text-xl lg:text-2xl font-bold">{{ value.title }}</p>

                        <!-- Icon (rotates) -->
                        <span
                        class="text-md md:text-xl lg:text-2xl mr-3 transform transition-all duration-300 p-1"
                        :class="value.isOpen ? 'rotate-90' : 'rotate-0'"
                        >
                        ›
                        </span>
                        

                    </button>   
                    <hr>
                    <!-- Answer -->
                    <transition name="slide">
                        <div
                        v-if="value.isOpen"
                        class="text-[#1D1D1F] mt-2 text-[0.7rem]  leading-relaxed p-3"
                        >
                            <p class="text-[0.8rem]" v-for="arr in value.data">{{ arr }}</p>
                        </div>
                    </transition>     
                </div>
              </div>
              <p class="p-5">
                More ways to shop: <a href="" class="text-blue-500">Find an Apple Store</a> or <a href="" class="text-blue-500">other retailler</a> near you. Or call <a href="" class="text-blue-500">1-800-MY-APPLE</a>
              </p>
              <hr>
              <div class="flex flex-col md:flex-row lg:flex-row justify-between p-5">
                <div class="text-[#0000008F]">
                    Copyright © 2025 Apple Inc. All rights reserved.
                </div>
                <ul class="flex text-[0.7rem] gap-3">
                    <li><a href="">Privacy Policy | </a></li>
                    <li><a href="">Terms of Use | </a></li>
                    <li><a href="">Sales and Refunds | </a></li>
                    <li><a href="">Legal | </a></li>
                    <li><a href="">Site Map</a></li>
                </ul>
                <div>United States</div>
              </div>
        </div>
    </section>
</template>