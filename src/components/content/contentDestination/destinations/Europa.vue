<script setup lang="ts">
import DestinationPresentation from '../DestinationPresentation.vue'
import DestinationNav from '../DestinationNav.vue'
</script>

<template>
  <div class="content-destination">
    <img
      class="destination-image"
      src="@/assets/destination/image-europa.webp"
      alt="Europa"
    />
    <div class="content-presentation">
      <DestinationNav />
      <DestinationPresentation
        headerTitle="EUROPA"
        description="The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin."
        distance="628 MI. KM"
        time="3 YEARS"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
// All styles of /destinations are here
@import '@/components/content/contentDestination/destinations/destinationsStyle.scss';
</style>
