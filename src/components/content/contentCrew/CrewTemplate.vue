<script setup lang="ts">
import { RouterView } from 'vue-router'
import TemplateDesktop from '../../../template/TemplateDesktop.vue'
import InfoPage from '../InfoPage.vue'
</script>

<template>
  <TemplateDesktop>
    <template v-slot:info-page>
      <InfoPage class="info-page" number-page="02" info-page="MEET YOUR CREW" />
    </template>

    <template v-slot:content>
      <RouterView />
    </template>
  </TemplateDesktop>
</template>

<style lang="scss" scoped></style>
