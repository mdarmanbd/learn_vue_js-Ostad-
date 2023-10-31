<script setup>

import {ref,reactive} from 'vue'

const color = ref('none');

 function getAcolor (){
  return {
    backgroundColor: color.value
  }
}

</script>

<template>
  <div>
  <section class="mx-auto container">
    <h1 class="text-2xl mb-10">Vue Form</h1>
    <p class="pb-5 text-gray-900 text-xl">my-color: {{ color }}</p>
    <p>
      Your Favorite Color: 
      <input class="p-5 border border-gray-300 " v-model="color" />
      <div class="w-32 h-32 mt-10" :style="getAcolor()"></div>
    </p>
  </section>

  </div>
</template>

<style scoped>

</style>
