<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
<h1>this is myApp</h1>
      <nav class="bg-gray-100 py-1 flex space-x-3 justify-center">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/movies">Movies</RouterLink>
        
      </nav>
    
  <RouterView />
</template>

<style scoped>

</style>
