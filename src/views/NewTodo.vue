<template>
  <AppHeader title="Add a todo" :search-bar="false" :main-page="false" />
  <TodoForm :new-todo="true" />
</template>

<script setup>
import AppHeader from '@/components/AppHeader.vue'
import TodoForm from '@/components/TodoForm.vue'
</script>
