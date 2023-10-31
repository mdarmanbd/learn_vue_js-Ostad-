
<script setup>

import { inject } from 'vue';
import { xdata } from '../data/xdata';
const childData = inject('myData')

</script>

<template>
    <div class="">
        <p class="text-green-400 px-2">child com</p>
        <button @click="childData.increase()" class="bg-green-500 text-black">child ++</button>
    </div>
    <div class="mt-2">
        <button @click="xdata.decrease()" class="bg-red-300 text-black">new decrease -10 </button>
    </div>
</template>

<style scoped>

</style>