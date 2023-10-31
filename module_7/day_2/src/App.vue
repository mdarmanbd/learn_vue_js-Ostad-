<script setup>

import {ref,reactive,onMounted,nextTick} from 'vue'

const items = ref([
  'https://images.unsplash.com/photo-1682685797769-481b48222adf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=300&q=60',
  'https://images.unsplash.com/photo-1682695794816-7b9da18ed470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=300&q=60',
  'https://images.unsplash.com/photo-1682685797661-9e0c87f59c60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=300&q=60',
  'https://plus.unsplash.com/premium_photo-1666963323736-5ee1c16ef19d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=300&q=60',
  'https://images.unsplash.com/photo-1682686581663-179efad3cd2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'

])

let carousel = null
const newItem = ref('https://images.unsplash.com/photo-1682687220067-dced9a881b56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=775&q=80')



onMounted(()=>{
  carousel = new Flickity( '#carousel', {} )
})

 const addNewItem = () => {
    items.value.push(newItem.value)
    carousel.destroy()
    nextTick(function () {
      carousel = new Flickity('#carousel',{})
    })
 }



</script>

<template>
  <section>
    <div class="my-10 w-full mx-auto">
      <input type="text" v-model="newItem" class="border border-green-300 bg-gray-50">
      <button @click="addNewItem()" class="ml-2 bg-blue-500 px-2 text-base">Button</button>
    </div>
    <section class="mx-auto container text-left">
    <div class="mx-auto items w-full " id="carousel">
      <div :style="`background-image:url(${item})`" class="item text-red-400 text-center font-bold" v-for="(item,index) in items" :key="item">{{ index + 1 }}</div>
    </div>
  </section>
  </section>
  
</template>

<style scoped>
.items{
  width: 600px;
  height: 400px;
}

.item{
  width: 600px;
  height: 400px;
  background-color: antiquewhite;
  background-size: cover;
}



</style>
