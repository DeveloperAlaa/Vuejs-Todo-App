<template>
  <header class="relative flex flex-col items-center bg-primary p-6 text-white">
    <router-link :to="{ name: 'Todos' }" v-if="mainPage == false">
      <span class="absolute left-5 top-4 rotate-180 text-[200%]">&#10140;</span>
    </router-link>
    <h2 class="mb-5 text-2xl">{{ title }}</h2>
    <div class="mb-5 flex items-center justify-center w-full" v-if="searchBar == true">
      <input
        v-model="searchValue"
        @change="watchSearch"
        class="rounded-bl-full rounded-tl-full w-[100%] md:w-[60%] lg:w-[55%] bg-semiTransparent px-3 py-2 outline-none placeholder:text-xl placeholder:text-white"
        type="search"
        placeholder="Search"
      />
      <button class="rounded-br-full rounded-tr-full bg-white px-3 py-2 text-base text-primary">
        Search
      </button>
    </div>
    <div
      class="absolute bottom-[-1px] left-0 h-5 w-full rounded-tl-full rounded-tr-full bg-white"
    ></div>
  </header>
</template>

<script setup>
import { ref, defineProps, inject } from 'vue'

defineProps({
  title: String,
  searchBar: Boolean,
  mainPage: Boolean
})

const searchValue = ref("")

const emitter = inject("emitter")


const watchSearch = () => {
  emitter.emit("search", searchValue)
}

</script>
