<template>
  <AppHeader title="Edit todo" :search-bar="false" :main-page="false" />
  <TodoForm
    :new-todo="false"
    :id="todo.id"
    :title="todo.title"
    :status="todo.status"
    :details="todo.details"
  />
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import AppHeader from '@/components/AppHeader.vue'
import TodoForm from '@/components/TodoForm.vue'

const route = useRoute()
const todos = JSON.parse(localStorage.getItem('todos'))

const todo = computed(() => {
  return todos.filter((todo) => todo.id === +route.params.id)[0]
})
</script>
