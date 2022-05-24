<script setup lang="ts">
defineProps<{
  profession: string
  name: string
  description: string
}>()
</script>

<template>
  <div class="crew-presentation">
    <h4 class="profession">{{ profession }}</h4>
    <h3 class="name">{{ name }}</h3>
    <p class="description">{{ description }}</p>
  </div>
</template>

<style lang="scss" scoped>
// *{
//   margin: 0;
// }

.crew-presentation {
  
  .profession {
    font-size: 32px;
    font-family: 'Bellefair', serif;
    font-weight: 400;
    color: var(--gray);
  }

  .name {
    font-size: 56px;
    font-family: 'Bellefair', serif;
    font-weight: 400;
    color: var(--white);
  }

  .description {
    font-family: 'Barlow Regular', sans-serif;
    font-size: 18px;
    line-height: 1.7;
    color: var(--soft-lilac);
    max-width: 444px;
  }
}
</style>
