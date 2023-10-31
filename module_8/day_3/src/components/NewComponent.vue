


<script setup>
import { xdata } from '../data/xdata';
</script>

<template>
    <div class="">
        <p class="text-green-400 px-2">{{ xdata.count }}</p>
        <button @click="xdata.increase()" class="bg-green-500 text-black">new ++</button>
    </div>
</template>

<style scoped>

</style>