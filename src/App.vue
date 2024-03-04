<template>
<main>
    <!--    Heading -->
    <header>
        <img src="./assets/pinia-logo.svg" alt="pinia logo">
        <h1>{{taskStore.name}}</h1>
    </header>
    <!--   Task List -->
    <div class="task-list">
        <div v-for="task in taskStore.tasks" :key="taskStore.$id">
            <TaskDetails :task="task"/>
        </div>
    </div>
</main>
</template>
<script>
import TaskDetails from '@/components/TaskDetails.vue'
import {useTaskStore} from '@/stores/TaskStore.js'

export default {
    components:{TaskDetails},
    setup(){
        const taskStore=useTaskStore()
        return {taskStore}
    }
}
</script>

