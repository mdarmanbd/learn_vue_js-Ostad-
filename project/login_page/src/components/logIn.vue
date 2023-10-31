<script setup>
import {ref,reactive,watch} from 'vue'
''
let email = ref('')
let password = ref('')
let sigIn = ref(false)
let emailAllert = ref(true)
let passAllert = ref(true)

function suggestEmail(){
    
    if(email.value == ''){
        emailAllert.value = true
    }else{
        emailAllert.value = false
    }

    if(email.value.length > 2 && email.value.indexOf('@') !== -1 ){
        sigIn.value = true
        // console.log(email.value.length)
        
    }
    else{
        sigIn.value = false
        // console.log('else')
    }
}

function suggestPassword(){
        passAllert.value = false
        if(password.value == ''){
            passAllert.value = true
        }else{
            passAllert.value = false
        }

        if(password.value == 'password' || password.value.length <= 2){
            sigIn.value = false
        }
        else{
            sigIn.value = true
        }
}
function sinUp(){
    alert('successfully sin up')
}

</script>

<template>
    <section class="w-full bg-blue-50 h-screen">
        <div class="w-1/2 mx-auto pt-10">
            <div class="p-5 bg-white rounded">
                <h2 class="text-gray-800 font-bold text-xl uppercase pb-4">sign up</h2>
                <div class="pb-3">
                    
                    <label class="text-gray-800 text-lg pb-0">Emal</label><br>
                    <small v-show="emailAllert" class="pt-0 text-green-500 text-xs">email length minimum 3 & must have '@' </small>
                    <input v-model="email" @keyup="suggestEmail" type="text" class="w-full p-1 border border-green-300 rounded outline-green-200">
                </div>
                <div class="pb-3">
                    <label class="text-gray-800 text-lg">password</label><br>
                    <small v-show="passAllert" class="text-green-500 text-xs">'password' is not a password & minum length 3</small>
                    <input v-model="password" @keyup="suggestPassword" type="text" class="w-full p-1 border border-green-300 rounded outline-green-200">
                </div>
                <div class="pb-2">
                    <button v-show="sigIn" @click="sinUp()" class="bg-green-600 text-white w-full mx-auto text-center pb-1 capitalize">sign up</button>
                </div>
            </div>
        </div>
    </section>
</template>