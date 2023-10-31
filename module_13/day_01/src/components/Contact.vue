<script setup>
import { ref, reactive, watch, watchEffect , computed} from 'vue';
const postId = ref(1);
const count = ref(0)

const post = reactive({
    title: '',
})

watch (postId,(id)=>{
    post.title = 'pending...'
    count.value = id
    console.log(count.value)
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(res=> res.json())
    .then(json => {
        post.title = json.title
    })
    console.log(id)

},{immediate:true})

// watch(postId,async(id)=>{
//     post.title = 'pending...'
//     const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
//     const Json = await response.json()
//     post.title = Json.title
// },{immediate:true})

const userID = computed(()=>{
    count.value += count.value ++
    console.log(count.value)
})

// watchEffect(async () => {
//     post.title = "Loading...";
//     const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId.value}`);
//     const json = await response.json();
//     post.title = json.title;
// })




</script>
 
<template>
    <p>
        {{ count }}
    </p>
    <p>
        Post ID: {{ postId }}
    </p>
    <p>
        Post Title: {{ post.title }}
    </p>
    <p class="mt-10">
        <input type="text" v-model="postId" class="border border-green-600 outline-none">
    </p>
    <button @click="userID" class="bg-green-400">
        incriment
    </button>
</template>
 
<style scoped></style>