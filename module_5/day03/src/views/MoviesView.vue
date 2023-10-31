

<script setup>

import{ref,reactive,onMounted} from 'vue'
// import number from '../lib/number'
import MovieCard from '../components/movieCard.vue'

let movieList = reactive([])
const isLoading = ref(true)

onMounted(()=>{

  //console.log(calculate(10, 20, '+'));

  fetch('http://localhost:3004/movies')
  .then(response=>response.json())
  .then(movieApi => {
    movieList = movieApi
    console.log(movieList)
    isLoading.value = false
  })
  .catch(error =>{
    console.log('error api' , error)
    isLoading.value = false
  })
})


</script>

<template>
  <div>
    <div class="text-cyan-300 text-xl" v-if="isLoading">Loading....</div>
    <p></p>
    <div class="" v-if="isLoading == false">
    
      <MovieCard v-for="movie in movieList" :key="movie.id" :movie="movie"/>
    
    </div>
    <!-- <h1>this is movies page</h1> -->
  </div>
</template>
