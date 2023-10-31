<script setup>
import {authStore} from '../store/store'



// function autenticate(){
//     localStorage.setItem('token','123');
// }

// function logOut(){
//     localStorage.setItem('token','abc');
// }


</script>

<template>
    <h1 class="font-bold tex-xl">this is log in page</h1>
    <div class="mt-5 flex space-x-3">
        <button @click="authStore.authenicate()" class="bg-cyan-700 p-1 text-white text-lg font-thin">
          <span v-if="authStore.isAuthenticated">already logged in</span>
          <span v-else>log in</span>
        </button>
        <button @click="authStore.logout()" class="bg-cyan-700 p-1 text-white text-lg font-thin">log out</button>
    </div>
</template>