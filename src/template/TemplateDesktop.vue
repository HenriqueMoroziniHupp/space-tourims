<script lang="ts" setup></script>

<template>
  <div class="template">
    <slot></slot>
    <!-- Conteudo aqui-->
  </div>
</template>

<style lang="scss" scoped>
.template {
  display: grid;
  place-items: center;
  // display: grid;
  // max-width: 1050px;
  // margin: 0 auto;
}
</style>
