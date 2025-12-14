<script setup>
import { ref } from 'vue';
import ecosystemImg from '../assets/Images/EcoSysytemShowcase/ecosystemImg.webp'

const dataFAQ=ref([
    {
        question: '1 iPhone and Mac',
        answer:'1 With iPhone Mirroring, you can view youriPhone screen on your Mac and control itwithout picking up your phone. Continuityfeatures also let you answer calls or messages right from your Mac. You can even copy images, video, or text from your iPhone and paste it all into a different app on your Mac. And with iCloud, you can access your files from either device.',
        isOpen: false,
    },
    {
        question: '2 iPhone and Mac',
        answer:'2 With iPhone Mirroring, you can view youriPhone screen on your Mac and control itwithout picking up your phone. Continuityfeatures also let you answer calls or messages right from your Mac. You can even copy images, video, or text from your iPhone and paste it all into a different app on your Mac. And with iCloud, you can access your files from either device.',
        isOpen: false,
    },
    {
        question: '3 iPhone and Mac',
        answer:'3 With iPhone Mirroring, you can view youriPhone screen on your Mac and control itwithout picking up your phone. Continuityfeatures also let you answer calls or messages right from your Mac. You can even copy images, video, or text from your iPhone and paste it all into a different app on your Mac. And with iCloud, you can access your files from either device.',
        isOpen: false,
    }
])

const toggle=(index)=>{
    console.log('work');
    
    dataFAQ.value[index].isOpen=!dataFAQ.value[index].isOpen
}
</script>

<template>
    
    <section class="w-full flex justify-center items-center mb-20">
        <div class="w-[80vw] flex flex-col ">

            <!-- HEADER -->
            <div class="mb-6">
                <h2 class="font-semibold text-[1.5rem] md:text-[2.5rem]">
                    Significiant others.               
                </h2>
            </div>

            <!-- Content -->

            <div class="flex flex-col md:flex-col lg:flex-row gap-5 justify-between p-3 bg-[#F5F5F7]">
                <!-- FAQ -->
               
                <div class="flex flex-col gap-5">
                      <div v-for="(value,index) in dataFAQ" :key="index" >
                    <!-- Question -->
                    <button
                        @click="toggle(index)"
                        class="w-full flex justify-between items-center "
                    >
                        <p class="text-[#1D1D1F] text-md md:text-xl lg:text-2xl font-bold">{{ value.question }}</p>

                        <!-- Icon (rotates) -->
                        <span
                        class="text-md md:text-xl lg:text-2xl mr-3 transform transition-all duration-300 p-1"
                        :class="value.isOpen ? 'rotate-90' : 'rotate-0'"
                        >
                        ›
                        </span>
                    </button>

                    <!-- Answer -->
                    <transition name="slide">
                        <p
                        v-if="value.isOpen"
                        class="text-[#1D1D1F] mt-2 text-[0.7rem]  leading-relaxed p-3"
                        >
                        {{ value.answer }}
                        </p>
                    </transition>
                 </div>
                </div>
                 <!-- Img -->
                  <img :src="ecosystemImg" class="w-[80vw] lg:w-[50vw] md:h-[25rem] lg:h-[30rem]" alt="">
            </div>

        </div>
    </section>

</template>

<style scoped>
    .slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}

.slide-enter-to,
.slide-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.25s ease;
}
</style>