
<script setup>
const props = defineProps(['name' , 'label'])
const emit = defineEmits(['update:name'])
function reversItem(){
        emit('update:name' , props.name.split('').reverse().join(''))
        console.log('hello')
}
</script>

<template>
<div class="my-10">
    <h2>Button item</h2>
    <!-- <p>{{ name }}</p> -->
    <label for="name">{{ label }} : </label>
    <button @click="reversItem()" class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Updated item
    </button>
</div>


</template>

<style scoped>

</style>