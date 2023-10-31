<script setup>

import {ref,reactive} from 'vue'

const saarcCountry = reactive([
  {name:'Bangladesh',capital:'Dhaka'},
  {name:'Nepal',capital:'Kathmandu'},
  {name:'Bhutan',capital:'Thimpu'},
  {name:'Sri Lanka',capital:'Colombo'},
  {name:'India',capital:'New Delhi'},
  {name:'Pakistan',capital:'Islamabad'},
  {name:'Maldives',capital:'Male'},
])

const capitals = reactive(['Dhaka','Kathmandu','Thimpu' ,'Colombo' , 'New Delhi', 'Islamabad', 'Male'])
 
const getScore = ()=> {
  let count = 0

  saarcCountry.forEach(country=>{
    if(country.answer == country.capital){
      count++
    }
  })
  return count
}

// function getRandomCapital(){
//       return capitals.sort(()=> Math.random() - 0.5)
// }

</script>

<template>
  <div class="mx-auto container text-left">
    <h1 class="text-2xl text-green-500 font-bold">vue from</h1>
    <P class="mb-10">{{ saarcCountry }}</P>
    <p class="text-xl mb-10">your Score : {{getScore()}}</p>
    <div class="">
      <div class="text-base border border-gray-400 rounded py-2 px-5 mb-5" v-for="(country,index) in saarcCountry" :key="country.id">
        <h2>What is the capital of {{ country.name }} ?</h2>
        <template v-for="(capital,index) in capitals" :key="index" >
            <input type="radio" :value="capital" :name="country.name" v-model="country.answer" class="ml-2">
            <label>{{ capital }}</label>
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
