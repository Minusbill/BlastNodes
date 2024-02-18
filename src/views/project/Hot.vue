<script setup>
import BTCProjectsGrid from '../../components/hot/hotProjectsGrid.vue';
import { inject } from '@vercel/analytics';

inject();

</script>

<template>
  <div class="container mx-auto">
    <BTCProjectsGrid />
  </div>
</template>

<style scoped></style>
