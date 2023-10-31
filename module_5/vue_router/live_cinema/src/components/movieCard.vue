<script setup>
import { defineProps, onMounted } from 'vue';
import { RouterLink } from 'vue-router';
const props = defineProps({
    movie: Object
})


onMounted(() => {
    console.log(props);
})

</script>
<template>
      <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <div class="flex justify-center pt-3">
        <img class="rounded-t-lg" :src="props.movie.poster" :alt="props.movie.title" />
      </div>
      <div class="p-5">
          
         <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {{ props.movie.title }}
          </h5>
          
        <span class="mr-4">{{ props.movie.year }}</span>
        <span>{{props.movie.runtime }}</span>
      </div>
    </div>
</template>

<style  scoped>

</style>