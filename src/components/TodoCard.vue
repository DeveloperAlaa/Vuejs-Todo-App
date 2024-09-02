<template>
  <div
    class="las flex w-full items-start gap-7 overflow-hidden border-b border-line p-5 transition-colors last-of-type:rounded-bl-2xl last-of-type:rounded-br-2xl hover:bg-slate-100"
  >
    <span
      class="text-md flex aspect-square w-16 items-center justify-center rounded-full p-2 font-semibold capitalize text-slate-900"
      :class="defineStatus()"
      >{{ todoStatus }}</span
    >
    <div class="flex flex-col gap-2">
      <h3 class="text-xl text-[#094067]">{{ todoTitle }}</h3>
      <p class="max-w-[250px] truncate text-[#094067]">{{ todoDetails }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  todoTitle: String,
  todoDetails: String,
  todoStatus: String
})

const defineStatus = () => {
  return props.todoStatus === 'todo'
    ? 'bg-danger'
    : props.todoStatus === 'doing'
      ? 'bg-yellow-300'
      : 'bg-green-300'
}
</script>
