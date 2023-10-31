<script setup>
import{ref,reactive} from 'vue'

  const blueColor='bg-blue-500 hover:bg-blue-700'
  const greyColor='bg-gray-500 hover:bg-gray-700'

const  lights = reactive(
      [
        {
          title:'light 1',
          on:'//img.icons8.com/?size=512&id=12244&format=png',
          off:'//img.icons8.com/?size=512&id=75&format=png',
          isOne:true
      
      },

      {
          title:'light 2',
          on:'//img.icons8.com/?size=512&id=12244&format=png',
          off:'//img.icons8.com/?size=512&id=75&format=png',
          isOne:true
      
      },
     
      {
          title:'light 3',
          on:'//img.icons8.com/?size=512&id=12244&format=png',
          off:'//img.icons8.com/?size=512&id=75&format=png',
          isOne:false
      
      },
        
      ]
)



</script>

<template>
  <div>
    <section class="container mx-auto flex items-center flex-col">
        <h1 class="text-center text-2xl py-10">Assignment</h1>
        <p class="p-5">Make These Buttons Work</p>
        <div class="flex justify-between space-x-6">
            <div class="p-10 border w-96 flex flex-col space-y-5">
                <button @click="light.isOne =! light.isOne" :class="light.isOne?blueColor:greyColor" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" v-for="light in lights" :key="light.title">
                   {{ light.title }} {{ light.isOne?'on':'off' }}
                </button>
              
            </div>
            <div class="p-10 border w-96 flex flex-col space-y-5" >
                <img class="w-20" :src="light.isOne?light.on:light.off" v-for="light in lights" :key="light.title">
            </div>
        </div>
    </section>
  </div>
</template>

<style scoped>

</style>
