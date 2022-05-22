<script setup lang="ts">
import DestinationPresentation from '../DestinationPresentation.vue'
import DestinationNav from '../DestinationNav.vue'
</script>

<template>
  <div class="content-destination">
    <img
      class="destination-image"
      src="@/assets/destination/image-titan.webp"
      alt="Moon"
    />
    <div class="content-presentation">
      <DestinationNav />
      <DestinationPresentation
        headerTitle="TITAN"
        description="The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn."
        distance="1.6 BI. KM"
        time="7 YEARS"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
// All styles of /destinations are here
@import '@/components/content/contentDestination/destinations/destinationsStyle.scss';
</style>
