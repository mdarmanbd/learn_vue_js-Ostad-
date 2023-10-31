<script setup>
import { useRoute } from 'vue-router';
const route = useRoute()
</script>

<template>
    <h2>this is our user page</h2>
    <h3 v-if="$route.params.id">this is user id : {{ $route.params.id }}</h3>
    <h2 v-else>page not found</h2>
    <RouterView></RouterView>
</template>