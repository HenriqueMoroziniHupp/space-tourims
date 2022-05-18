<template>
  <RouterLink to="/"
    ><button class="button">
      <p class="button-title">EXPLORE</p>
    </button>
  </RouterLink>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<style scoped lang="scss">
.button {
  // display: grid;
  // place-items: center;
  background-color: var(--white);
  width: 17rem;
  height: 17rem;
  border: none;
  border-radius: 50%;
  transition: all 0.15s ease;
  cursor: pointer;
  .button-title {
    color: var(--dark-blue);
    font-size: 32px;
  }
}

.button:hover {
  box-shadow: 0 0 0 75px rgba($color: #616476, $alpha: 0.4);
  backdrop-filter: blur(1px);
}
</style>
