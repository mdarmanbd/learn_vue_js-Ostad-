<script setup>
    const location = 'dhaka';
    const weathe = 'cloud';
</script>

<template>
  <section class="container mx-auto flex items-center flex-col">
    <h1 class="text-center text-2xl py-10">Logic in vue.js</h1>
    <div class="w-1/3 bg-gray-200 p-10 flex items-center flex-col space-y-10">
      <h1 class="text-3xl">{{ location.toUpperCase() }}</h1>
      <h2 class="text-xl text-blue-600"  v-if="weathe == 'cloud' ">weather : cloud</h2>
      <h2 class="text-xl text-blue-600" v-else-if="weathe == 'sunny'">weather : sunny</h2>
      <h2 class="text-xl text-blue-600" v-else-if="weathe =='rain'">weather : thander</h2>
      <h2 class="text-xl text-blue-600" v-else>weather : thander</h2>
      <img v-if="weathe == 'cloud'" src="https://cdn.creazilla.com/photos/193365/cloud-day-s-sky-photo-md.jpeg?response-content-disposition=attachment&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=DO57M0PVWXA61UUS5230%2F20230713%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20230713T102324Z&X-Amz-Expires=900&X-Amz-SignedHeaders=host&X-Amz-Signature=80db10b5af81b0c90768db72de2f1f9fb26ebd650b02d6c50ec41d1c1e409839">
      <img v-if="weathe == 'sunny'" class="w-56" src="https://cdn.creazilla.com/photos/2054912/sunny-day-photo-md.jpeg?response-content-disposition=attachment&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=DO57M0PVWXA61UUS5230%2F20230713%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20230713T102101Z&X-Amz-Expires=900&X-Amz-SignedHeaders=host&X-Amz-Signature=23b7c3b175a5f1cc35f14b382cb8f97beb8df3a1c165ec13d3b18b7725ae2d29">
      <img v-if="weathe == 'rain'" src= "https://cdn.creazilla.com/photos/104833/water-rainy-rainy-day-photo-md.jpeg?response-content-disposition=attachment&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=DO57M0PVWXA61UUS5230%2F20230713%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20230713T101959Z&X-Amz-Expires=900&X-Amz-SignedHeaders=host&X-Amz-Signature=ff049eba86c48011955e31d43a31faeaa9b263b1fd84d8df71a24ffbec2e34a0">
      <img v-if="weathe == 'thander'" src="https://cdn.creazilla.com/photos/2775211/lightningfork-photo-md.jpeg?response-content-disposition=attachment&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=DO57M0PVWXA61UUS5230%2F20230713%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20230713T102159Z&X-Amz-Expires=900&X-Amz-SignedHeaders=host&X-Amz-Signature=9f7fb2ead38440a82879b0074bd42d1ef693806235a2b40e1e244220c32aed8a">
    </div>
  </section>
</template>
<style scoped>

</style>
