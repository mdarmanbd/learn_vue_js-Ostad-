<script setup>
  const message = 'welcome. get ready to master vue.js 3 with ostad';
  const date = new Date();
  const dataString = date.toLocaleDateString();

const person = {
  fname:'jon',
  lname:'doe',
 getName(){
    return this.fname + ' ' + this.lname;
  }
}

const image = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
const title = 'Water surrounded by trees and mountains'
const link = 'https://unsplash.com/photos/NRQV-hBF10M'

const images = [
  {
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    title: 'Water surrounded by trees and mountains',
    link: 'https://unsplash.com/photos/NRQV-hBF10M'
  }

]

const number = 10;

</script>

<template>
<section>
  <h1 class="text-2xl text-red-500 font-bold">{{ message }}</h1>
  <h3>today is <span>{{ dataString }}</span></h3>
  <h2> the name is {{ person.getName() }}</h2>

  <!-- <section class="container mx-auto p-10">
        <h1 class="text-4xl mb-10 text-left">Data Project</h1>
        <section class="main flex space-x-4">
            <div class="flex space-y-4 flex-col w-1/2">
                <img :title="title" :src="image" :alt="title" >
                <h2 class="text-xl text-left"> {{ title }} </h2>
                <a target="_blank" :href="link" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded w-40 text-center">
                    Image Source
                </a>
            </div>
        </section>
    </section> -->

    <section class="container mx-auto p-10">
        <h1 class="text-4xl mb-10 text-left">Data Project</h1>
        <section class="main flex space-x-4">
            <div class="flex space-y-4 flex-col w-1/2">
                <img :title="images[0].title" :src="images[0].image" :alt="images[0].title">
                <h2 class="text-xl text-left"> {{ images[0].title }} </h2>
                <a target="_blank" :href="images[0].link" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded w-40 text-center">
                    Image Source
                </a>
            </div>
        </section>
    </section>
    <h2>{{ number }} is {{ number % 2 == 0 ? 'even' : 'odd' }}</h2>


</section>

</template>

<style scoped>

</style>
