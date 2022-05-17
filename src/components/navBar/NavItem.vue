<template>
  <RouterLink class="nav-item" :to="pageLink">
    <strong>{{ pageNumber }}</strong> {{ pageName }}</RouterLink
  >
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'

defineProps<{
  pageNumber: string
  pageName: string
  pageLink: string
}>()
</script>

<style scoped>
.nav-item {
  text-decoration: none;
  color: var(--white);
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 16px;
  letter-spacing: 2px;
  cursor: pointer;
}
</style>
