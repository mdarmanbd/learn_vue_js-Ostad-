

<script setup>
import{reactive, ref} from 'vue'

// const location = ref('Dhaka');
const location = reactive({
  name:'Dhaka',
  weather:'Sunny'
})
function changeLOcation(newLocation){

// alert(`current location ${newLocation}`)

//  location.value = newLocation // const ref er jonno value ase.
location.name = newLocation
  
}


</script>

<template>

    <section class="container mx-auto flex items-center flex-col">
        <h1 class="text-center text-2xl py-10">Events & Reactivity in Vue.js</h1>
        <div class="container mx-auto flex space-x-5 justify-center m-5">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="changeLOcation('Dhaka')">
                Dhaka
            </button>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="changeLOcation('Rajshahi')">
                Rajshahi
            </button>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="changeLOcation('Khulna')">
                Khulna
            </button>
        </div>
       <!--- <h1 class="text-2xl m-10">Current Location is {{ location }}</h1> -->
       <h1 class="text-2xl m-10">Current Location is {{ location.name }}</h1>
    </section>

</template>

<style scoped>

</style>
