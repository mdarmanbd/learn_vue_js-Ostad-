
<script setup>
import ChildComponent from './ChildComponent.vue';
import { inject } from 'vue';

const parentData = inject('myData')

</script>

<template>
    <div class="">
        <p class="text-cyan-400 px-2">parent com</p>
        <button @click="parentData.decrease()" class="bg-green-300 text-black">parent --</button>
        <ChildComponent class="mt-5"/>
    </div>

</template>

<style scoped>

</style>