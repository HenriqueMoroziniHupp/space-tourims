<script setup lang="ts">
import NavBar from './components/navBar/NavBar.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <main class="template">
    <header class="header">
      <NavBar />
    </header>

    <RouterView />
  </main>
</template>

<style scoped lang="scss">
.template {
  max-width: 1440px;
  margin: 0 auto;
}
</style>
