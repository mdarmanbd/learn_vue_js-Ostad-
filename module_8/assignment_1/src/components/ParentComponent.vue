<script setup>
import { ref} from 'vue'
import ChildComponent from './ChildComponent.vue';
const person = {
    name:'Mehedi Jaman',
    title:'Full Stack Developer',
    url:'https://www.mehedipata.com'
}

const messageToChild = ref('Welcome to Child Component')
// const messageFromChild = ref('')
</script>
<template>
    <div class="h-screen bg-gradient-to-r from-red-100 to-sky-100 flex items-center justify-center flex-col">
        <!-- <h1 class="font-bold ">{{ messageToChild }} </h1> -->
        <ChildComponent v-model:messageToChild="messageToChild"></ChildComponent>
    </div>
</template>