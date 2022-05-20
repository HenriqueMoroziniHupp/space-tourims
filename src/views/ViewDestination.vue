<script setup lang="ts">
import { RouterView } from 'vue-router'
import DestinationPresentation from '@/components/content/contentDestination/DestinationPresentation.vue'
// import DestinationNav from '../components/content/contentDestination/DestinationNav.vue'
import Moon from '../components/content/contentDestination/destinations/Moon.vue'
import TemplateDesktop from '../template/TemplateDesktop.vue'
import InfoPage from '../components/content/InfoPage.vue'
import DestinationTemplate from '../components/content/contentDestination/DestinationTemplate.vue'
</script>

<template>
  <div>
    <!-- <DestinationNav /> -->
    <!-- <TemplateDesktop>
      <template v-slot:info-page>
        <InfoPage number-page="01" info-page="PICK YOUR DESTINATION"/>
      </template>
      <template v-slot:content><RouterView/></template>
    </TemplateDesktop> -->
    <DestinationTemplate/>
  </div>
</template>

<style scoped></style>
