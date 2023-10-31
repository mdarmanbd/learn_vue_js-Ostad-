<script setup>

import {ref,reactive} from 'vue'
import {countries} from '../src/data/country.js'

let inputValue = ref('')

const getACountry = ()=>{
    return countries.filter(country=>{
      return country.name.toLowerCase().startsWith(inputValue.value.toLowerCase())
    })
}


</script>

<template>
  <section>
    <section class="mx-auto container text-left">
    <h1 class="text-2xl mb-10">Vue Form</h1>
    <p class="my-5">{{ inputValue }}</p>
    <p class="my-5">
      search: <input type="text" v-model="inputValue" class="border border-green-500 rounded px-2 outline-none">
    </p>
    <div class="mt-10">
    <ul>
      <li v-for="(country,index) in getACountry()" :key="index" >{{ country.name }}</li>
        
    </ul>
    </div>

  </section>
  </section>
</template>

<style scoped>

</style>
