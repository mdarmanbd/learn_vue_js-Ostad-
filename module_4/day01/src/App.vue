

<script setup>
  const items = [1,2,3,4,5]
</script>

<template>
 <div>
  <!-- <div class="p-5 border border-green-600 w-40 mb-2" v-for= "item in items" :key="item">{{ item }}</div> -->
  <div class="p-5 border border-green-600 w-40 mb-2" v-for= "n in 10" :key="n">
   <!-- {{ n}} / 2 = {{ n/2 }} -->
    <p v-if="n%2 == 0">{{ n }}</p>
  </div>
 </div>
  



 
</template>

<style scoped>

</style>
