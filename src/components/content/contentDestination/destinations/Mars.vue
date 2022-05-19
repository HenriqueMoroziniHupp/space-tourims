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
