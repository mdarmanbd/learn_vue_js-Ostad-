
<script setup>

import { reactive,ref,onMounted } from 'vue'
import movieCard from '../components/movieCard.vue'
let movieList = reactive({})
let isLoading = ref(true)

onMounted(async () => {
    const result = await fetch("http://localhost:3000/movies/")
    const response = await result.json();
    movieList = response;
    isLoading.value = false;
})



</script>

<template>
    <p class="bg-red-300">Hello</p>
<h1 v-if="isLoading">Loading ....</h1>
<div v-if="isLoading === false">
      <movieCard v-for="movie in movieList"
    :key="movie.id"
    :movie="movie"
    /> 
     <!-- <pre>{{ movieList }}</pre>  -->
    
</div>
<h1>this is movie page {{ movieList }}</h1>


</template>

<style></style>