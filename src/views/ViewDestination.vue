<script setup lang="ts">
import { RouterView } from 'vue-router'
import DestinationPresentation from '@/components/content/contentDestination/DestinationPresentation.vue'
// import DestinationNav from '../components/content/contentDestination/DestinationNav.vue'
import Moon from '../components/content/contentDestination/destinations/Moon.vue'
</script>

<template>
  <div>
    <!-- <DestinationNav /> -->
    <RouterView />
    <!-- <DestinationPresentation
      headerTitle="MOON"
      description="See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites."
      distance="384,400 KM"
      time="3 DAYS"
    /> -->
  </div>
</template>

<style scoped></style>
