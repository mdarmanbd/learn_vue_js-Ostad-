<script setup>

import {ref,reactive} from 'vue'

let myColor = ref([])

</script>

<template>
  <div>
    <section class="mx-auto container">
    <h1 class="text-2xl mb-10">Vue Form</h1>
    <p class="mb-10">{{ myColor }}</p>
    Your favorite colors <br/>
    <label for="red">Red</label>
    <input class="ml-2 mr-2" type="checkbox" v-model="myColor" value="red">
    <label for="green">Green</label>
    <input class="ml-2 mr-2" type="checkbox" v-model="myColor" value="green">
    <label for="blue">Blue</label>
    <input class="ml-2 mr-2" type="checkbox" v-model="myColor" value="blue">
  </section>
   
  </div>
</template>

<style scoped>

</style>
