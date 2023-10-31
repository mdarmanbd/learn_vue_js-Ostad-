<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <!-- <HelloWorld msg="Vite + Vue" /> -->
  <ul>
    <li>
      <router-link to="/">Home</router-link>
    </li>
    <li>
      <router-link to="/about">about</router-link>
    </li>
    <li>
      <router-link :to="{name: 'contact'}">contact</router-link>
    </li>
    <li>
      <router-link to="/post/1">post 1</router-link>
    </li>
    <li>
      <router-link :to="{name: 'post' , params: {'id' : 2 }}">post 2</router-link>
    </li>
   <li>
      <router-link to="/user">user</router-link>
   </li>
  </ul>
  <router-view :key="$route.fullPath"></router-view>
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
