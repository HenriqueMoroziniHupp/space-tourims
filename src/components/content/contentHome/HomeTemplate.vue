<script setup lang="ts">
import HomePresentation from './HomePresentation.vue';
import HomeButton from './HomeButton.vue';
</script>

<template>
  <div class="home-template">
    <HomePresentation class="home-presentation"/>
    <HomeButton class="home-button"/>
  </div>
</template>

<style lang="scss" scoped>
.home-template {
  display: grid;
  grid-template-columns: 450px max-content;
  justify-content: space-around;
  align-items: end;
  // gap: 24rem;
  margin-top: 12rem;
}
</style>
