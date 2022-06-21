<script setup lang="ts">
import CrewPresentation from '../CrewPresentation.vue'
import CrewNav from '../CrewNav.vue'
</script>

<template>
  <div class="content-crew">
    <div class="content-presentation">
      <CrewPresentation
        profession="FLIGHT ENGINEER"
        name="ANOUSHEH ANSARI"
        description="Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
      />
      <CrewNav />
    </div>

    <img
      class="crew-image"
      src="@/assets/crew/image-anousheh-ansari.webp"
      alt="Anousheh Ansari"
    />
  </div>
</template>

<style scoped lang="scss">
@import '@/components/content/contentCrew/crews/crewStyle.scss';
</style>
