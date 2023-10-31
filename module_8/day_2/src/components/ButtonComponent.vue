<script setup>
defineProps(['changeHandaler'])
</script>

<template>
    <div class="">
        <button @click="changeHandaler()" class="bg-cyan-300 text-black px-1">
            <slot></slot>
        </button>
    </div>

   

</template>

<style scoped>

</style>