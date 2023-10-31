<script setup>

import {ref,reactive} from 'vue'

const persons = reactive([
  { name: 'John Doe', age: 25, email: 'john@doe.com' },
  { name: 'Jane Doe', age: 26, email: 'jane@doe.com' },
  { name: 'John Smith', age: 27, email: 'john@smith.com' },
  { name: 'Jane Smith', age: 28, email: 'jane@smith.com' }
])

let activeIndex = ref(0)

</script>

<template>
  <section class="mx-auto container text-left">
    <h1 class="text-2xl mb-10">Vue Form</h1>
    <p class="my-5"></p>
    <div class="flex ">
      <div class="w-1/2">
        <p>{{ persons }}</p>
        
        <div class="mb-10">
          <p class="text-green-500 text-xl">{{ activeIndex }}</p>
        <h2>Select a person</h2>
        <select class="mb-10 border border-gray-300 py-1 px-3" v-model="activeIndex">
          <option v-for="(person , index) in persons" :key="index" :value="index">{{ person.name }}</option>
        </select>
        </div>
      </div>
      <div>
        <div class="flex flex-col">
          <input :placeholder="key" v-model="persons[activeIndex][key]" v-for="(value,key,index2) in persons[activeIndex]" :key="index2" type="text" class="border border-gray-300 rounded py-2 px-3 my-3">
        </div>
      </div>
    </div>

  </section>
</template>

<style scoped>

</style>
