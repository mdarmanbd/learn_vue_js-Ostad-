<script setup>
import{ref,reactive} from 'vue'

const countries = reactive(
  [
  {
    name:'Bangladesh',
    city:'Dhaka',
  },

  {
    name:'India',
    city:'Delhi',
  }
]
)
const countrySearch = ref('')
function getAllCountry(list = 'all'){
  countries.length = 0
  fetch('https://restcountries.com/v3.1/all?fields=name,capital')
  .then(response => response.json())
  .then(data =>{
    if('all' == list){
      data.forEach(country =>{
      countries.push({
        name:country.name.common,
        city:country.capital[0]
      })
    })

    }else{
      data.filter(country => country.name.common.startsWith(list.toUpperCase())).forEach(country=>{
        countries.push({
          name:country.name.common,
          city:country.capital[0]
        })
      })
    }
    
  })
}

function searchInput(){
  let searchName = countrySearch.value.toLowerCase()
  
  fetch('https://restcountries.com/v3.1/all?fields=name,capital')
  .then(response => response.json())
  .then(d => {
    if(searchName.length > 0){
     const searachCountry = d.forEach(c => {
        countries.push({
         // name:d.name,
          city:d.capital[0]
        })
      })
      console.log(searachCountry)
    }
  })

}

</script>

<template>
  <section>
    
    <div class="flex space-x-2 pb-3">
      <button @click="getAllCountry('all')" class="bg-blue-200 py-1 px-3 text-lg w-40 border rounded-sm">all countrys</button>
      <button @click="getAllCountry('a')" class="bg-blue-200 py-1 px-3 text-lg w-20 border rounded-sm">A</button>
      <button @click="getAllCountry('b')" class="bg-blue-200 py-1 px-3 text-lg w-20 border rounded-sm">B</button>
      <button @click="getAllCountry('c')" class="bg-blue-200 py-1 px-3 text-lg w-20 border rounded-sm">C</button>
    </div>
   <div class="">
      <input type="text" v-model="countrySearch" @input="searchInput()" class="w-32 bg-slate-200 text-gray-900 text-base border rounded-md text-left ps-1 py-1">
      <p class="text-green-300 py-2 text-base">search name: {{ countrySearch }}</p>
   </div>
    <ul>
        <li v-for="country in countries" :key="country.name">{{ country.name }} = {{ country.city }}</li>
    </ul>
  </section>
</template>

<style scoped>
</style>
