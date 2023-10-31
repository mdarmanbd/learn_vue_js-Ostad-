<script setup>
  const number = 19;
  const animals = 'Cow'
  const searchUrl = 'https://www.pexels.com/search/'
  const message = 'learn vue3js with learn with '
  const ostad = '<em>ostad</em>'
  const date = '<strong> today is 11 july 2023 </strong>'
</script>

<template>
  <section>
    <h1 class="text-xl text-blue-500">welcome. get ready to muster vue.js 3!</h1>
    <h2 class="text-blue-700 ">{{ number }} / 4 = <span class="text-green-600">  {{ number / 4 }} </span></h2>
    <h2 class="text-blue-700 font-bold">{{ number }} is {{ number % 2 == 0 ? 'Even' : 'Odd' }} </h2>
    <h2 class="text-blue-700 font-bold">
      <a :href="searchUrl + animals.toLowerCase()" target="_blank">search for {{ animals }}</a>
    </h2>
    <h2 class="text-blue-700 font-bold">
      <a :href="`https://www.pexels.com/search/${animals.toLowerCase()}`" target="_blank">search for {{ animals }}</a>
    </h2>
    <h3 class="text-red-700">{{ message }} <span v-html="ostad" class="text-black"></span> </h3>
    <p v-html="date"></p>
  </section>
</template>

<style scoped>

</style>
