<script lang="ts" setup>
import { RouterView } from 'vue-router'
import InfoPage from '../InfoPage.vue'
import TemplateDesktop from '../../../template/TemplateDesktop.vue'
import NavItem from '../../navBar/NavItem.vue'
import DestinationNav from './DestinationNav.vue'
</script>

<template>
  <TemplateDesktop>
    <template v-slot:info-page>
      <InfoPage
        class="info-page"
        number-page="01"
        info-page="PICK YOUR DESTINATION"
    /></template>

    <template v-slot:content>
      <RouterView />
    </template>
  </TemplateDesktop>
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



// .content-destination {
//   display: grid;
//   place-items: center;
//   grid-template-columns: 445px 445px;
//   grid-gap: 10rem;

// }
  


</style>
