<script setup>
const message = 'welcome. get ready to master vue.js 3 !'
const date = '30th june 2023'
function getDate() {
    const date = new Date();
    return date.toDateString();
  }
//  import {newObject} from './data/data.js'
 import newObject from './data/data.js'
 
</script>

<template>
  <div>

    <h1 class="text-2xl text-red-500 font-bold underline">{{ message }} </h1>
     <p class="text-blue-600 text-xl">today is <span>{{ getDate() }}</span></p>
    <p> {{ newObject.mess }} <span>{{ newObject.tasks.length }}</span> tasks today</p>
    <p class=" "> {{ newObject.mess }} <span>{{ newObject.tasks[3] }}</span> tasks today</p>

  </div>
</template>

<style scoped>

</style>
