
<script setup>
defineProps(['modelValue' , 'label'])
defineEmits(['update:modelValue'])

</script>
<template>
    <!-- <p class="my-5">
        <h2 class="text-xl">Single Item</h2>
        {{ label }} is {{ modelValue }}
    </p> -->
    <form action="" class="flex flex-col mb-10">
        <label for="name">{{ label }}</label>
        <input type="text" name="name" id="name"
         :value="modelValue" 
         @input="$emit('update:modelValue', $event.target.value)" class="border border-green-900 py-0.5">
    </form>

    
    
</template>
<style></style>