<script setup lang="ts">
import DestinationPresentation from '../DestinationPresentation.vue'
import DestinationNav from '../DestinationNav.vue'
</script>

<template>
  <div class="content-destination">
    <img
      class="destination-image"
      src="@/assets/destination/image-mars.webp"
      alt="Moon"
    />
    <div class="content-presentation">
      <DestinationNav />
      <DestinationPresentation
        headerTitle="MARS"
        description="Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!"
        distance="225 MI. KM"
        time="9 MONTHS"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
// All styles of /destinations are here
@import '@/components/content/contentDestination/destinations/destinationsStyle.scss';

</style>
