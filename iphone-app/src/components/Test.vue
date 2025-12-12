<script setup>
import { ref } from 'vue';

const data=ref([
    {name: 'a',num: 25},
    {name: 'b',num: 24},
    {name: 'c',num: 23},
    {name: 'd',num: 22},
])
const count=ref(0)
const increament=()=>{
    count.value++
}
</script>

<template>

    <div>
        <p>
            {{ data[count].name}}   |   {{ data[count].num }}
        </p>
        <p>
            {{ data[count+1].name }}  |   {{ data[count+1].num }}
        </p>
    </div>
    <button @click="increament">
        Click
    </button>
</template>