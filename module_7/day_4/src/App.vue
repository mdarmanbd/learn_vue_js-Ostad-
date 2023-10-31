<script setup>
import TodoList from './components/TodoList.vue';

const tasks = [
  {title:'Weed front garden.', component:true},
  {title:'Chill and smoke some Old Toby.', component:true},
  {title:'Keep ring secret and safe.', component:true},
  {title:'Meet Gandalf at Bree.', component:false},
  {title:'Destroy ring and defeat dark lord.', component:true},
]


</script>

<template>
  <section class="mx-auto ">
    <h1 class="my-10 text-center">Components</h1>
    <div class="flex items-center justify-center h-[600px] font-medium">
      <div class="flex flex-grow items-center justify-center h-full text-gray-600 bg-gray-100">
        <!-- Component Start -->
        <TodoList title="my next task" :tasks="tasks" background="bg-red-300"/>
        <!-- Component End  -->
      </div>
      <div class="flex flex-grow items-center justify-center bg-gray-900 h-full">
        <!-- Component Start -->
        <TodoList title="our next task" :tasks="tasks" />
        <!-- Component End  -->
      </div>
    </div>

  </section>
</template>

<style scoped>


</style>