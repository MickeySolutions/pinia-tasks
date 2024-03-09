<template>
    <div class="task">
        <p>{{task.title}}</p>
        <div class="icons">
            <i  @click="taskStore.deleteTask(task.id)"
                class="material-icons">
                delete</i>
            <i  @click="taskStore.changeFavorite(task.id)"
                :class="{active:task.isFav}"
                class="material-icons">
                favorite</i>
        </div>
    </div>
</template>

<script>
import { useTaskStore } from '@/stores/TaskStore.js'

export default {
    props:['task'],
    setup () {
        const taskStore=useTaskStore()

        return {taskStore}
    }
}
</script>

<style lang="scss" scoped>

</style>