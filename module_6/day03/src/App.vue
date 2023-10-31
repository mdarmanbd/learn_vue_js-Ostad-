<script setup>

import {ref,reactive} from 'vue'

let displayImage = ref('true');

</script>

<template>
  <div>
    
    <section class="mx-auto container">
    <h1 class="text-2xl mb-10">Vue Form</h1>
    <p class="mb-10">{{ displayImage }}</p>
    <label for="">Display Random Image</label>
    <input class="ml-2" type="checkbox" v-model="displayImage"/>
    <p class="mt-5">
      <input type="radio" :value="true" v-model="displayImage">on <br/>
      <input type="radio" :value="false" v-model="displayImage">off <br/>
    </p>
    <img
      v-show="displayImage"
      class="mt-10 mx-auto w-96"
      :src="`https://source.unsplash.com/random?version=${Math.random()}`"
      alt=""  />
      
      <!-- <img
      v-if="displayImage"
      class="mt-10 mx-auto w-[500px]"
      :src="`https://source.unsplash.com/random?version=${Math.random()}`"
      alt=""  /> -->

  </section>
  </div>
</template>

<style scoped>

</style>
