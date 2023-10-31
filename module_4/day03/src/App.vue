

<script setup>

  const tasks = [
  { id: 1, title: "Complete project proposal", status: "In Progress" },
  { id: 2, title: "Update website content", status: "Completed" },
  { id: 3, title: "Fix bug in user authentication", status: "In Progress" },
  { id: 4, title: "Prepare presentation slides", status: "Pending" },
  { id: 5, title: "Test new feature implementation", status: "In Progress" },
];



function getTasksCompleted(){
  return tasks.filter(k=>'Completed' == k.status)
}

function getTasksInprogress(){
  return tasks.filter( function(tasks){
    return 'In Progress' == tasks.status
    
  })
}

const person = {
  name: "John Doe",
  age: "45",
  designation: "CTO",
  email: "john@doe.com"
}

</script>

<template>
  <section>
    <!-- <div class="p-5 border border-gray-600 text-left mb-2" v-for="(task , index) in tasks" :key="task.id">{{ index + 1 }} . {{ task.title }}</div> -->
    <h2 class="mb-2">completed</h2>
    <div class="p-5 border border-gray-600 text-left mb-2" v-for="(task , index) in getTasksCompleted()" :key="index"> {{ task.id }} {{ task.title }}</div>
    <hr>
    <h1 class="mb-3">In Progress</h1>
    <div class="p-5 border border-gray-600 text-left mb-2" v-for="(task , index) in getTasksInprogress()" :key="index"> {{ task.id }} {{ task.title }}</div>

    <div class="p-5 border border-gray-600 text-left" v-for="(value,property,index) in person" :key="index">{{ property }} = {{ value }}</div>
  </section>
</template>

<style scoped>

</style>
