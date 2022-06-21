<script setup lang="ts">
import CrewPresentation from '../CrewPresentation.vue'
import CrewNav from '../CrewNav.vue'
</script>

<template>
  <div class="content-crew">
    <div class="content-presentation">
      <CrewPresentation
        profession="PILOT"
        name="VICTOR GLOVER"
        description="Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
      />
      <CrewNav />
    </div>

    <img
      class="crew-image"
      src="@/assets/crew/image-victor-glover.webp"
      alt="Victor Glover"
    />
  </div>
</template>

<style scoped lang="scss">
@import '@/components/content/contentCrew/crews/crewStyle.scss';
</style>
