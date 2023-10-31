
<script setup>
    import{ref,reactive} from 'vue'

    const showModal = ref(false)
    let notes = reactive([])
    let inputNote = ref()

    // localStorage.setItem(notes)
    // localStorage.getItem(notes)

    function plusIcon(){
        showModal.value = true
    }
    function closeNote(){
        showModal.value = false
    }
    function changeBg(){
        
          const letters = '0123456789ABCDEF';
          let color = '#';
          
          for (let i = 0; i < 6; i++) {
            console.log(letters[Math.floor(Math.random() * 16)])
            color += letters[Math.floor(Math.random() * 16)];
          }
          console.log(color)
          return color;
        
    }
    function addNote(){
        notes.push({
            id:Math.floor(Math.random() * 10),
            text:inputNote.value,
            data: new Date(),
            backgroundColor: changeBg()

        })
        inputNote.value = ''
        showModal.value = false
    }

    window.addEventListener('keyup', function(e) {
        if (e.key === 'Escape') {
            closeNote();
        }
    })

</script>

<template>
    <section class="w-full h-screen pt-10 bg-gray-50 relative">
        <!--modal section-->
         <div v-show="showModal" class="absolute h-screen w-full bg-opacity-70 bg-slate-300">
            <div class="absolute top-56 left-56 bg-white p-5">
               <input @keypress.enter="addNote()" v-model="inputNote" type="text" class="w-full h-20 p-2  border border-green-500">
               <div class="w-full text-center">
                    <button @click="addNote()" class="my-2 bg-green-300 text-black px-1 rounded">add note</button>
                </div>
               <div class="w-full text-center">
                <button @click="closeNote()" class="my-2 bg-red-300 text-black px-1 rounded">close note</button>
               </div>
            </div>
        </div>
        <div class="w-3/4 mx-auto flex justify-around">
            <div class="">
                <h2 class="font-bold text-xl">Notes</h2>
            </div>
            <div>
                <button @click="plusIcon()" class="bg-black text-white w-8 rounded-full m-auto">+</button>
            </div>
        </div>
        <div class="py-10 flex w-3/4 mx-auto justify-start gap-3">
            <div v-for="(note,index) in notes" :key="index" class="bg-purple-600 text-black w-3/12" :style="{backgroundColor:note.backgroundColor}">
                <div class="p-2">
                    <h2 class="text-white p-1">{{ note.text }}</h2>
                    <p class="text-white">{{ note.data.toLocaleString() }}</p>
                </div>
            </div>
            
        </div>
        <p>{{ notes }}</p>
    </section>
</template>

<style scoped>

</style>