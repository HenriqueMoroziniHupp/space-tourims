<template>
  <div class="crew-nav">
    <ul class="nav-ul">
      <RouterLink to="/crew">
        <li class="nav-item"></li>
      </RouterLink>

      <RouterLink to="/crew/MarkShuttleworth">
        <li class="nav-item"></li>
      </RouterLink>

      <RouterLink to="/crew/VictorGlover">
        <li class="nav-item"></li>
      </RouterLink>

      <RouterLink to="/crew/AnoushehAnsari">
        <li class="nav-item"></li>
      </RouterLink>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<style scoped lang="scss">
.crew-nav {
  .nav-ul {
    margin: 0;
    padding: 1;
    display: grid;
    grid-auto-flow: column;
    gap: 3rem;
    justify-content: start

  }
  .nav-item {
    list-style: none;
    height: 15px;
    width: 15px;
    background-color: var(--gray);
    border-radius: 50%;
    transition: all 0.15s ease;
  }
  .nav-item:hover {
    background-color: var(--white);
  }
}
</style>
