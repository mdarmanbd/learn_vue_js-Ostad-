

<script setup>
defineProps(['name', 'age','occupation'])
defineEmits(['update:name','update:age','update:occupation'])
</script>

<template>
    <form class="flex flex-col">
        <label class="text-green-900">Name</label>
        <input type="text" 
        :value="name" 
        @input="$emit('update:name', $event.target.value)" class="border border-green-900">

        <label class="text-green-900">Age</label>
        <input type="text" 
        :value="age" 
        @input="$emit('update:age', $event.target.value)" class="border border-green-900">

        <label class="text-green-900">Name</label>
        <input type="text" 
        :value="occupation" 
        @input="$emit('update:occupation', $event.target.value)" class="border border-green-900">
    </form>


</template>

<style scoped>

</style>