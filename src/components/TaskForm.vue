<script>
import { useTaskStore } from '@/stores/TaskStore.js'
import { ref } from 'vue'

export default {
    setup () {
        const taskStore = useTaskStore()

        const newTask = ref('')
        const handleForm = () => {
            if (newTask.value.length > 0) {
                taskStore.addTask({
                    id: Math.floor(Math.random() * 10000),
                    title: newTask.value,
                    isFav: false
                })
                newTask.value = ''
            }
        }

        return { newTask, handleForm }
    }
}

</script>

<template>
    <form @submit.prevent="handleForm">
        <input
            type="text"
            placeholder="I need to ..."
            v-model="newTask"
        >
        <button>Add task</button>
    </form>
</template>
