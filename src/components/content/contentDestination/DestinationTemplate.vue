<script lang="ts" setup>
import { RouterView } from 'vue-router'
import InfoPage from '../InfoPage.vue'
</script>

<template>
  <div class="destination-template">
    <InfoPage
      class="info-page"
      number-page="01"
      info-page="PICK YOUR
    DESTINATION"
    />
    <RouterView />
  </div>
</template>

<style lang="scss" scoped>
.destination-template {
  display: grid;
  place-items: center;
  // max-width: 1050px;
  // margin: 0 auto;
  .info-page {
    padding: 3rem 6rem;
    justify-self: start;
  }
}
</style>
