<script setup>
import { onMounted, onUpdated } from 'vue';
import feather from 'feather-icons';
import AboutMe from '@/components/about/AboutMe';
import AboutCounter from '@/components/about/AboutCounter';
import AboutClients from '@/components/about/AboutClients';

onMounted(() => {
  feather.replace();
});

onUpdated(() => {
  feather.replace();
});
</script>

<template>
  <div>
    <!-- About me -->
    <div class="container mx-auto">
      <AboutMe />
    </div>

    <!-- About counter -->
    <AboutCounter />

    <!-- About clients -->
    <div class="container mx-auto">
      <AboutClients />
    </div>
  </div>
</template>

<style scoped></style>
