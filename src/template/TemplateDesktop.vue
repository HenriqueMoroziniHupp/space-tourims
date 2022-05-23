<script lang="ts" setup></script>

<template>
  <div class="template">
    <div class="info-page">
      <slot name="info-page">
        <!-- info-page content here -->
      </slot>
    </div>

    <slot name="content">
      <!-- page content here-->
    </slot>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/base.scss';
.template {
  .info-page {
    padding: 3rem 6rem;
    justify-self: start;
  }
  display: grid;
  place-items: center;
  //   // display: grid;
  // max-width: 1050px;
  // margin: 0 auto;
}

@include tablet {
  .template {
    .info-page {
      padding: 3rem;
    }
  }
}
</style>
