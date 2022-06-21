<script setup lang="ts">
import CrewPresentation from '../CrewPresentation.vue'
import CrewNav from '../CrewNav.vue'
</script>

<template>
  <div class="content-crew">
    <div class="content-presentation">
      <CrewPresentation
        profession="MISSION SPECIALIST"
        name="MARK SHUTTLEWORTH"
        description="Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
      />
      <CrewNav />
    </div>

    <img
      class="crew-image"
      src="@/assets/crew/image-mark-shuttleworth.webp"
      alt="Mark Shuttleworth"
    />
  </div>
</template>

<style scoped lang="scss">
@import '@/components/content/contentCrew/crews/crewStyle.scss';
</style>
