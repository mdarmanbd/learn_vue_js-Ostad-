
<script setup>
 import SingleItem from './SingleItem.vue';
defineProps(['person'])
</script>
<template >
    <section >
        <p class="my-5">
        <h2 class="text-xl">Child</h2>
        <p class="text-cyan-900">this is {{ person.name }} , i am {{ person.age }} , my ocupation is {{ person.occupation }}</p>
    </p>
    
    <p>
    <form action="" class="flex flex-col">
        <!-- <label for="name">Name</label>
        <input type="text" name="name" id="name" v-model="person.name"  class="border border-cyan-900 py-0.5"> -->
        <SingleItem v-model="person.name" label="Name"/>
        <SingleItem v-model="person.age" label = 'Age'/>
        <SingleItem v-model="person.occupation" label="Occupation"/>

         <button class="mt-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-5 w-48">
            Update
        </button> 
    </form>
    </p>
    </section>
    

</template>
<style></style>
