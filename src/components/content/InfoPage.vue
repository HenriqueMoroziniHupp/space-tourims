<template>
  <h2 class="info-page">
    <strong class="number-page">{{ numberPage }}</strong> {{ infoPage }}
  </h2>
</template>

<script setup lang="ts">
defineProps<{
  numberPage: string
  infoPage: string
}>()
</script>

<style scoped lang="scss">
.info-page {
  // don't stylize position component
  // justify-self: start;
  margin: 0;
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 28px;
  letter-spacing: 4px;
  font-weight: 400;
  // padding: 3rem 6rem;
  strong {
    color: var(--gray);
  }
}
</style>
