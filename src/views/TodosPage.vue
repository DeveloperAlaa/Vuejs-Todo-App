<template>
  <AppHeader title="Todos List" :search-bar="true" :main-page="true" />

  <main class="relative min-h-[70vh]">
    <router-link
      v-for="todo in searchTodos"
      :key="todo.id"
      :to="{ name: 'Edit-Todo', params: { id: +todo.id } }"
    >
      <TodoCard :todo-title="todo.title" :todo-status="todo.status" :todo-details="todo.details" />
    </router-link>
  </main>

  <router-link :to="{ name: 'New-Todo' }">
    <AddButton />
  </router-link>
</template>

<script setup>
import { inject, ref } from 'vue'

import AppHeader from '@/components/AppHeader.vue'
import TodoCard from '@/components/TodoCard.vue'
import AddButton from '@/components/AddButton.vue'

let todos = ref(JSON.parse(localStorage.getItem('todos')))
const emitter = inject('emitter')
const searchTodos = ref(todos.value)

emitter.on('search', (data) => {
  searchTodos.value = todos.value.filter((todo) => {
    return todo.title.toLowerCase().match(data.value.toLowerCase())
  })
})
</script>
