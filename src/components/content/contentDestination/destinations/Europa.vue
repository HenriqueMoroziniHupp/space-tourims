<script setup lang="ts">
import DestinationPresentation from '../DestinationPresentation.vue'
import DestinationNav from '../DestinationNav.vue'
</script>

<template>
  <div class="content-destination">
    <img
      class="destination-image"
      src="@/assets/destination/image-europa.webp"
      alt="Moon"
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
.content-destination {
  display: grid;
  place-items: center;
  grid-template-columns: 445px 445px;
  grid-gap: 10rem;
  .destination-image {
    height: 92%;
  }

  .content-presentation {
    display: grid;
    gap: 2rem;
    // align-self: end;
    // height: max-content;
  }

}
</style>
