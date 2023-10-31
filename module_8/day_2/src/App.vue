
<script setup>
import {ref, reactive} from 'vue'
import ButtonComponent from './components/ButtonComponent.vue';
import SlotComponent from './components/SlotComponent.vue';

const msg = ref('hello world')
function changeButtonOne(){
  msg.value = 'click button one'
}
function changeButtonTwo(){
  msg.value = ' click button two'
}
</script>

<template>
  <div class="text-center">
    <h2 class="text-2xl my-10">Slot</h2>
    <p class="my-5">
    {{ msg }}
    </p>

<ButtonComponent :change-Handaler="changeButtonOne">
  <em class="text-green-600">button one</em> 
</ButtonComponent>

<ButtonComponent :change-Handaler="changeButtonTwo" class="mt-5">
  button two
</ButtonComponent>

<SlotComponent>
  
  <template #header>
    <h2 class="text-green-400">this is heading</h2>
  </template>
  <template v-slot:body>
    <h2 class="text-green-500">this is body</h2>
  </template>
  <template #footer>
    <h2 class="text-green-600">this is footer</h2>
  </template>
</SlotComponent>


  </div>
  

  
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>