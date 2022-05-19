<script setup lang="ts">
import DestinationPresentation from '../DestinationPresentation.vue'
import DestinationNav from '../DestinationNav.vue'
</script>

<template>
  <div class="content-destination">
    <img
      class="destination-image"
      src="@/assets/destination/image-moon.webp"
      alt="Moon"
    />
    <div class="content-presentation">
      <DestinationNav />
      <DestinationPresentation
        headerTitle="MOON"
        description="See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites."
        distance="384,400 KM"
        time="3 DAYS"
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
