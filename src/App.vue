<template>
  <div
    class="container relative mx-auto rounded-bl-2xl rounded-br-2xl border-line md:mb-5 md:border-x md:border-b"
  >
    <router-view></router-view>
  </div>
</template>

<script setup></script>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
