<script setup>
import DevProjectsGrid from '../../components/projects/DevProjectsGrid.vue';
import { inject } from '@vercel/analytics';

inject();

</script>

<template>
  <div class="container mx-auto">
    <DevProjectsGrid />
  </div>
</template>

<style scoped></style>
