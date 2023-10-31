<script setup>
import{ref,reactive} from 'vue'
    let task = reactive({
        new_task:''
    })

    let pending_tasks = reactive([])
    let pending = true
    const addTask = () => {
        pending_tasks.push(task.new_task)
        task.new_task = null
        pending = false
    }

    let task_dons = reactive([])
    let compliteTesk = true
    function deleteItem(index){
       // console.log(index, pending_tasks);
        pending_tasks.splice(index, 1);
       // console.log(pending_tasks);
    }

    function doneTask(pendingWork){
        task_dons.push(pendingWork)
        compliteTesk = false
    }

   function finalDelet(i){
        task_dons.splice(i,1)
   }

   function undo(taskDone , i){
        console.log(taskDone)
        task.new_task = taskDone
        task_dons.splice(i,1)
   }
   
</script>

<template>
    <section class="bg-green-50 py-10 w-full h-screen">
        <div class="w-1/2 mx-auto">
            <!-- <p>{{ task.new_task }}</p> -->
            <div class="flex py-1">
                <input @keypress.enter="addTask" v-model="task.new_task" type="text" class="w-full outline-none p-1">
                <button @click="addTask" class="bg-cyan-500 text-white px-1">Add task</button>
            </div>
            <div class="mt-2">
                <p class="bg-red-400 text-white text-base text-center w-full pb-0">Pending</p>
                <div v-for="(pendingWork , index) in pending_tasks" :key="index" class="bg-white px-1 py-1 flex justify-between border-b">
                    <div >
                        <p class="text-black">{{ index + 1 }}. {{ pendingWork }}</p>
                    </div>
                    <div class="flex gap-1">
                        <button @click="doneTask(pendingWork)" class="bg-cyan-400 text-sm px-1 text-white">Marks as done</button>
                        <button @click="deleteItem(index)" class="bg-red-400 text-sm px-1 text-white">Delet</button>
                    </div>
                </div>
                <div v-show="pending" class="bg-white px-1 py-1 flex justify-between border-b">
                    <div >
                        <p class="text-black">no pending</p>
                    </div>
                    <div class="flex gap-1">
                        <button class="bg-cyan-400 text-sm px-1 text-white">Marks as done</button>
                        <button class="bg-red-400 text-sm px-1 text-white">Delet</button>
                    </div>
                </div>
            </div>
            <div class=" ">
                <p class="bg-green-600 text-white text-base text-center w-full pb-0">completed</p>
                <div v-for="(taskDone , i) in task_dons" :key="i" class="bg-white px-1 py-1 flex justify-between border-b">
                    <div class="">
                        <p class="text-black line-through">{{ taskDone }}</p>
                    </div>
                    <div class="flex gap-1">
                        <button @click="undo(taskDone , i)" class="bg-cyan-400 text-sm px-1 text-white">Undo</button>
                        <button class="bg-yellow-400 text-sm px-1 text-white">Edit</button>
                        <button @click="finalDelet(i)" class="bg-red-400 text-sm px-1 text-white">Delet</button>
                    </div>
                </div>
                <div v-show="compliteTesk" class="bg-white px-1 py-1 flex justify-between border-b">
                    <div class="">
                        <p class="text-black line-through">demo task</p>
                    </div>
                    <div class="flex gap-1">
                        <button class="bg-cyan-400 text-sm px-1 text-white">Undo</button>
                        <button class="bg-yellow-400 text-sm px-1 text-white">Edit</button>
                        <button class="bg-red-400 text-sm px-1 text-white">Delet</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>