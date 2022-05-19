<script setup lang="ts">
import NavItem from '../../navBar/NavItem.vue';
</script>

<template>
  <div class="destination-nav">
    <ul class="nav-ul">
      <li class="nav-li">
        <NavItem page-name="MOON" page-link="/"/>
      </li>
      <li class="nav-li">
       <NavItem page-name="MARS" page-link="/mars"/>
      </li>
      <li class="nav-li">
       <NavItem page-name="EUROPA" page-link="europa"/>
      </li>
      <li class="nav-li">
        <NavItem page-name="TITAN" page-link="titan" />
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">

.destination-nav{
  .nav-ul{
    margin: 0;
    padding: 0;
    display: grid;
    grid-auto-flow: column;
    justify-content: start;
    gap: 2rem;
    list-style-type: none;
  }
}

</style>
