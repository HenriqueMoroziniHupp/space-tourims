<script setup lang="ts">
import CrewPresentation from '../CrewPresentation.vue'
import CrewNav from '../CrewNav.vue'
</script>

<template>
  <div class="content-crew">
    <div class="content-presentation">
      <CrewPresentation
        profession="COMMANDER"
        name="DOUGLAS HURLEY"
        description="Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
      />
      <CrewNav />
    </div>

    <img
      class="crew-image"
      src="@/assets/crew/image-douglas-hurley.webp"
      alt="Douglas Hurley"
    />
  </div>
</template>

<style scoped lang="scss">
@import '@/components/content/contentCrew/crews/crewStyle.scss';

</style>
