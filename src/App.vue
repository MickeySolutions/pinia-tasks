<template>
<main>
    <!--    Heading -->
    <header>
        <img src="./assets/pinia-logo.svg" alt="pinia logo">
        <h1>{{taskStore.name}}</h1>
    </header>
    <!--   Task Form -->
    <div class="new-task-form">
         <TaskForm></TaskForm>
    </div>
    <!--    Navbar -->
    <nav class="filter">
        <button @click="filter='all'">All Tasks</button>
        <button @click="filter='favorites'">Favorite Tasks</button>
    </nav>
    <!--    Loading-->
    <div class="loading" v-if="taskStore.loading">
        Loading tasks ...
    </div>
    <!--   Task List All-->
    <div class="task-list" v-if="filter=='all'">
        <p>Number of all tasks is: {{taskStore.totalTasksCount}}</p>
        <div v-for="task in taskStore.tasks" :key="taskStore.$id">
            <TaskDetails :task="task"/>
        </div>
    </div>
    <!--   Task List Favorites-->
    <div class="task-list" v-if="filter=='favorites'">
        <p>Number of favorites tasks is: {{taskStore.totalFavoritesCount}}</p>
        <div v-for="task in taskStore.favorites" :key="taskStore.$id">
            <TaskDetails :task="task"/>
        </div>
    </div>
</main>
</template>
<script>
import TaskDetails from '@/components/TaskDetails.vue'
import {useTaskStore} from '@/stores/TaskStore.js'
import { ref } from 'vue'
import TaskForm from '@/components/TaskForm.vue'

export default {
    components:{ TaskForm, TaskDetails},
    setup(){
        const taskStore=useTaskStore()

        // fetch tasks
        taskStore.getTasks()

        const filter=ref('all')
        return {taskStore, filter}
    }
}
</script>

