<script setup>
import { ref, reactive, computed } from 'vue';
const fruitsWithPrice = ref([
    { name: 'Apple', price: 1.20 },
    { name: 'Orange', price: 1.40 },
    { name: 'Banana', price: 1.60 },
    { name: 'Mango', price: 1.80 },
    { name: 'Pineapple', price: 2.10 },
]);

const fruitName = ref('')
const fruitPrice = ref(0)

const add = () =>{
    fruitsWithPrice.value.push({
        name:fruitName.value,
        price:fruitPrice.value
    })
    fruitName.value = '',
    fruitPrice.value = 0 
}

const totalPrice = computed(()=>{
    let total = ref(0)
    for(let i = 0 ; i<fruitsWithPrice.value.length; i++){
        total.value += fruitsWithPrice.value[i].price
    }
    return total
})

</script>
 
<template>
    <p class="mb-2">
        {{ fruitsWithPrice }}
    </p>
    <p class="mb-2">
        fruit name : <input type="text" v-model="fruitName" class="border border-green-500 outline-0">
    </p>
    <p class="mb-2">
        price : <input type="number" v-model="fruitPrice" class="border border-green-500 outline-0">
    </p>
    <p>
        total price:  {{ totalPrice }}
    </p>
    <p class="mt-5">
        <button @click="add()" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add Fruit
        </button>
    </p>
    
</template>
 
<style scoped></style>