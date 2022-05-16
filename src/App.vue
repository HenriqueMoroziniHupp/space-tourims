<script setup lang="ts">
import NavBar from './components/navBar/NavBar.vue'
import { RouterView } from 'vue-router'

</script>

<template>
  <header class="header">
    <NavBar />
  </header>

  <RouterView/>
</template>

<style scoped></style>
