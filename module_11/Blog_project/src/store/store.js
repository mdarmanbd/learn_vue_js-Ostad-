import{ref,reactive} from 'vue'

const authStore = reactive({
    isAuthenticated:false,
    authenicate(){
        authStore.isAuthenticated = true
        console.log(authStore.isAuthenticated)
    },
    logout(){
        authStore.isAuthenticated = false
    }
})

export{authStore}