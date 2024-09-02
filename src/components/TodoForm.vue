<template>
  <form @submit.prevent="addTodo" class="flex flex-col items-start space-y-9 p-5">
    <div class="flex w-full flex-col gap-3">
      <label for="title" class="text-xl text-text">Title</label>
      <input
        v-model="todo.title"
        class="rounded-md border border-text p-2 text-lg text-black placeholder:text-lg placeholder:text-black"
        type="text"
        id="title"
        placeholder="Enter the title"
        required
      />
    </div>

    <div class="flex w-full flex-col gap-3">
      <label for="details" class="text-xl text-text">Details</label>
      <textarea
        v-model="todo.details"
        id="details"
        class="h-[155px] resize-none rounded-md border border-text p-2 placeholder:text-lg placeholder:text-black"
        placeholder="Enter thw details"
        required
      ></textarea>
    </div>

    <div class="flex w-full flex-col gap-3">
      <label for="status" class="text-xl text-text">Todo Status</label>
      <select
        v-model="todo.status"
        id="status"
        placeholder="Status"
        class="rounded-md border border-text p-2"
        required
      >
        <option value="todo">Todo</option>
        <option value="doing">Doing</option>
        <option value="Done">Done</option>
      </select>
    </div>

    <div class="flex w-full justify-between gap-6">
      <button
        :class="newTodo == true ? 'w-full' : 'w-1/2'"
        type="submit"
        class="w-1/2 rounded-md bg-primary px-6 py-3 text-xl font-bold tracking-wide text-white transition-colors hover:bg-opacity-90"
      >
        Save
      </button>
      <button
        v-if="newTodo == false"
        type="button"
        class="w-1/2 rounded-md bg-danger px-6 py-3 text-xl font-bold tracking-wide text-white transition-colors hover:bg-opacity-90"
        @click="deleteTodo"
      >
        Delete
      </button>
    </div>
  </form>
</template>

<script setup>
import { ref, defineProps } from 'vue'

import { useRoute, useRouter } from 'vue-router'

const props = defineProps({
  newTodo: Boolean,
  id: Number,
  title: String,
  details: String,
  status: String
})

const todo = ref({
  id: Date.now() || props.id,
  title: null || props.title,
  details: null || props.details,
  status: null || props.status
})

const route = useRoute()
const router = useRouter()

const addTodo = () => {
  if (route.name === 'New-Todo') {
    if (localStorage.getItem('todos')) {
      const todos = ref(JSON.parse(localStorage.getItem('todos')))
      todos.value.push(todo.value)
      localStorage.setItem('todos', JSON.stringify(todos.value))
      todo.value = {
        id: Date.now(),
        title: null,
        details: null,
        status: null
      }
    } else {
      const todos = ref([])
      todos.value.push(todo.value)
      localStorage.setItem('todos', JSON.stringify(todos.value))
      todo.value = {
        id: Date.now(),
        title: null,
        details: null,
        status: null
      }
    }
  } else {
    const todos = ref(JSON.parse(localStorage.getItem('todos')))

    const updatedTodo = ref({
      id: +route.params.id,
      title: todo.value.title,
      details: todo.value.details,
      status: todo.value.status 
    })

    const index = todos.value.findIndex((todo) => todo.id === +route.params.id)
    todos.value.splice(index, 1, updatedTodo.value)

    localStorage.setItem('todos', JSON.stringify(todos.value))

    todo.value = {
      id: Date.now(),
      title: null,
      details: null,
      status: null
    }
  }

  router.back()
}

const deleteTodo = () => {
  const todos = ref(JSON.parse(localStorage.getItem('todos')))
  const newTodos = ref(todos.value.filter((todo) => todo.id !== +route.params.id))
  localStorage.setItem('todos', JSON.stringify(newTodos.value))
  todo.value = {
    id: Date.now(),
    title: null,
    details: null,
    status: null
  }
  router.back()
}
</script>
