<template>
  <div class="nav-bar">
    <img class="logo" src="@/assets/icon/logo.svg" alt="logo" />
    <hr class="row" />
    <ul class="nav-ul">
      <li>
        <NavItem page-number="00" page-name="HOME" page-link="/" />
      </li>
      <li>
        <NavItem
          page-number="01"
          page-name="DESTINATION"
          page-link="/destination"
        />
        <!-- <RouterLink class="link" to="/destination"><strong>00</strong> DESTINATION</RouterLink> -->
      </li>
      <li>
        <NavItem page-number="02" page-name="CREW" page-link="/crew" />
      </li>
      <li>
        <NavItem
          page-number="03"
          page-name="TECHNOLOGY"
          page-link="/technology"
        />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavItem from './NavItem.vue'
</script>

<style lang="scss" scoped>
.nav-bar {
  .link {
    text-decoration: none;
    color: var(--white);
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 16px;
    letter-spacing: 2px;
    cursor: pointer;
  }
  display: grid;
  align-items: center;
  grid-auto-flow: column;
  grid-template-columns: max-content 2fr 3fr;

  .logo {
    width: 100%;
  }

  .row {
    position: relative;
    border-color: var(--gray);
    width: 100%;
    left: 10%;
    z-index: 1;
  }

  .nav-ul {
    margin: 0;
    background-color: rgba(white, 0.1);
    backdrop-filter: blur(2px);
    padding: 2rem;
    display: grid;
    grid-auto-flow: column;
    justify-content: center;
    align-items: center;
    gap: 4rem;
    list-style-type: none;
  }
}
</style>
