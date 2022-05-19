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
