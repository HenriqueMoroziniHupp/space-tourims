<script setup lang="ts">
import { RouterView } from 'vue-router'
import DestinationPresentation from '@/components/content/contentDestination/DestinationPresentation.vue'
// import DestinationNav from '../components/content/contentDestination/DestinationNav.vue'
import Moon from '../components/content/contentDestination/destinations/Moon.vue'
import TemplateDesktop from '../template/TemplateDesktop.vue'
</script>

<template>
  <div>
    <!-- <DestinationNav /> -->
    <TemplateDesktop>
      <RouterView />
    </TemplateDesktop>
  </div>
</template>

<style scoped></style>
