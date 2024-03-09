import { defineStore } from 'pinia'

export const useTaskStore = defineStore('taskStore', {
  state: () => ({
    tasks: [],
    loading: false,
    name: 'Pinia Tasks'
  }),
  getters: {
    favorites () {
      return this.tasks.filter(task => task.isFav)
    },
    totalTasksCount (state) {
      return state.tasks.length
    },
    totalFavoritesCount (state) {
      return state.tasks.reduce((total, task) => {
        return task.isFav ? total + 1 : total
      }, 0)
    }
  },
  actions: {
    async getTasks () {
      this.loading = true
      const res = await fetch('http://localhost:3000/tasks')
      const data = await res.json()

      this.tasks = data
      this.loading = false
    },
    async addTask (task) {
      this.tasks.push(task)
      const res = await fetch('http://localhost:3000/tasks', {
        method: 'POST',
        body: JSON.stringify(task),
        headers: { 'Content-Type': 'application/json' }
      })
      if (res.error) {
        console.log(res.error)
      }
    },
    async deleteTask (id) {
      this.tasks = this.tasks.filter(task => {
        return task.id !== id
      })
      const res = await fetch('http://localhost:3000/tasks/' + id, {
        method: 'DELETE',
      })
      if (res.error) {
        console.log(res.error)
      }
    },
    async changeFavorite (id) {
      const task = this.tasks.find(task => task.id == id)
      task.isFav = !task.isFav
      const res = await fetch('http://localhost:3000/tasks/'+id, {
        method: 'PATCH',
        body: JSON.stringify({isFav:task.isFav}),
        headers: { 'Content-Type': 'application/json' }
      })
      if (res.error) {
        console.log(res.error)
      }
    }
  }
})