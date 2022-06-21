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
  display: grid;
  place-items: center;
  margin: 0 auto;

  .info-page {
    padding: 3rem 6rem;
    justify-self: start;
  }
}

@include tablet {
  .template {
    // max-width: 573px;
    .info-page {
      padding: 3rem;
    }
  }
}

@include mobile {
  .template {
    // max-width: 327px;
    .info-page {
      padding: 2rem;
      justify-self: center;
    }
  }
}
</style>
