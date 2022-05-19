<script setup lang="ts">
defineProps<{
  headerTitle: string
  description: string
  distance: string
  time: string
}>()
</script>

<template>

  <div class="destination-presentation">
    <div class="content-text">
      <h2 class="header-title">{{ headerTitle }}</h2>
      <p class="description">{{ description }}</p>
    </div>
    <div class="content-info">
      <!-- <span> -->
      <p class="info-title">AVG. DISTANCE</p>
      <p class="info-title">EST. TRAVEL TIME</p>

      <p class="info-statistic">{{ distance }}</p>
      <!-- </span> -->
      <!-- <span> -->
      <p class="info-statistic">{{ time }}</p>
      <!-- </span> -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
* {
  margin: 0;
}
.destination-presentation {
  .content-text {
    display: grid;

    .header-title {
      font-family: 'Bellefair', serif;
      font-weight: 400;
      font-size: 100px;
      color: var(--white);
      padding-bottom: 2rem;
    }
    .description {
      font-family: 'Barlow Regular', sans-serif;
      font-size: 18px;
      line-height: 1.7;
      color: var(--soft-lilac);
      padding-bottom: 3rem;
    }
  }

  .content-info {
    display: grid;
    gap: 1rem;
    
    grid-template-columns: 1fr 1fr;
    // grid-template-rows: 1fr 1fr;
    justify-items: start;
    border-top: solid 1px var(--gray);
    padding-top: 2rem;

    .info-title {
      font-family: 'Barlow Condensed', sans-serif;
      color: var(--soft-lilac);
      letter-spacing: 2px;
      font-size: 14px;
    }
    .info-statistic {
      font-family: 'Bellefair', serif;
      font-size: 28px;
      color: var(--white);
    }
  }
}
</style>
