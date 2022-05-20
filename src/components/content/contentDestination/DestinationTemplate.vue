<script lang="ts" setup>
import { RouterView } from 'vue-router'
import InfoPage from '../InfoPage.vue'
</script>

<template>
  <div class="template">
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
.template {
  .info-page {
    padding: 3rem 6rem;
    justify-self: start;
  }
  display: grid;
  place-items: center;
  //   // display: grid;
  // max-width: 1050px;
  // margin: 0 auto;
}
</style>
