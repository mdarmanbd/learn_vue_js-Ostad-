<script setup>
const tasks = [
  "Complete project proposal",
  "Update website content",
  "Fix bug in user authentication",
  "Prepare presentation slides",
  "Test new feature implementation",
  "Test new feature implementation",
];

</script>

<template>
  <div>
   <div class="py-2 px-5 text-left border border-green-500 mb-2" v-for="(task , index) in tasks" :key="task">{{ index + 1 }} . {{ task }}</div>
  </div>
  
</template>

<style scoped>

</style>
