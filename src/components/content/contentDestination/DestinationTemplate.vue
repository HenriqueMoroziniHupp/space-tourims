<script lang="ts" setup>
import { RouterView } from 'vue-router'
import InfoPage from '../InfoPage.vue'
import TemplateDesktop from '../../../template/TemplateDesktop.vue'

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
</style>
