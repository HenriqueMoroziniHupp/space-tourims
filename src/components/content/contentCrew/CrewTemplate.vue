<script setup lang="ts">
import InfoPage from '../InfoPage.vue'
</script>

<template>
  <div class="crew-destination">
    <InfoPage class="info-page" number-page="02" info-page="MEET YOUR CREW" />
  </div>
</template>

<style lang="scss" scoped>
.crew-template {
  display: grid;
  place-items: center;

  .info-page {
    padding: 3rem 6rem;

  }
}
</style>
