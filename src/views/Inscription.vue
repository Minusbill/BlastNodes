<script setup>
import DwqProjectsGrid from '../components/projects/InscriptionProjectsGrid.vue';
import { inject } from '@vercel/analytics';

inject();

</script>

<template>
  <div class="container mx-auto">
    <DwqProjectsGrid />
  </div>
</template>

<style scoped></style>
