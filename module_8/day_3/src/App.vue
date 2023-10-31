
<script setup>
import {ref, reactive,provide} from 'vue';
import{xdata} from './data/xdata';
import ParentComponent from './components/ParentComponent.vue';
import NewComponent from './components/NewComponent.vue';

const msg = ref('hello world')

const data = reactive({
  massage:'Hello world',
  count:0,
  increase(){
    this.count++
  },
  decrease(){
    this.count--
  }
})

provide('myData',data)
</script>

<template>
  <div class="text-center">
     <h2 class="text-2xl my-10">props drilling</h2>
    <p class="text-green-500">{{ data.massage }} | {{ data.count }}</p>
    <button @click="data.increase()" class="bg-cyan-200 text-green-700 px-1 text-xl">+++</button> 

    <ParentComponent class="mt-5"/> 
    <p class="text-blue-600 my-3">
      {{ xdata.massage }}
    </p>
    <NewComponent/>
  </div>
  

  
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>