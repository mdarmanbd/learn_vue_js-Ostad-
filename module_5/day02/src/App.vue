<script setup>
import{ref,reactive} from 'vue'
const joke = ref('jokeshello');

function getAjoke(){
 fetch("https://api.chucknorris.io/jokes/random")
 .then(response => response.json())
 .then(data =>{
      joke.value = data.value
 })
}

</script>

<template>
  <div class="w-full">
      <div class="text-center">
          <h2 class="pb-2 text-gray-700 text-xl"> {{ joke }} </h2>
          <button @click="getAjoke()" class="bg-green-300 py-1 px-3 border rounded-md">click me</button>
      </div>
  </div>
  
</template>

<style scoped>
</style>
