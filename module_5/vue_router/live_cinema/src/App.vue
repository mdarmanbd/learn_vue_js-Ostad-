<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>

<h1>this is app</h1>

      <nav class="flex justify-center space-x-2 bg-gray-100 py-1 ">
        <RouterLink to="/" class="text-green-500">Home</RouterLink>
        <RouterLink to="/about" class="text-green-500">About</RouterLink>
        <RouterLink to="/movies" class="text-green-500">Movies</RouterLink>
      </nav>

  <RouterView />
</template>

<style scoped>

</style>
