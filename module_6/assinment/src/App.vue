<script setup>

import {ref,reactive} from 'vue'
import { onBeforeMount,onMounted,onUpdated} from 'vue';

const status = ref([]);
let text2 = ref('text-2')
const apiResult = reactive([])
let text = ref('hello world')
onBeforeMount(()=>{
    status.value.push(' 1 - before mounted')

    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(data=>{
        apiResult.push(data) 
    })
})

onMounted(()=>{
    status.value.push(' 2 - mounted')
})

onUpdated(()=>{
    console.log('hello world')
    // how many time update the template , this is onUpdated
    // call all function are updated the template

})
</script>

<template>
    <section class="bg-gray-200 p-10 text-gray-600 w-full">
      <div class="pt-10">
        <p>{{ status }}</p>
         <p>{{ apiResult }}</p>
        <p>{{ text2 }}</p>
        <h2>{{ text }} </h2>
        
        <button @click="text='click btn'" class="bg-cyan-800 px-2 text-white"> click</button>
      </div>
        
    </section>
</template>

<style scoped>

</style>
