<!-- components/Breadcrumbs.vue -->
<template>
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li v-for="(crumb, index) in breadcrumbs" :key="index" class="breadcrumb-item">
        <router-link :to="{ path: crumb.path }">{{ crumb.meta.breadcrumb }}</router-link>
      </li>
    </ol>
  </nav>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const breadcrumbs = computed(() => {
  let pathArray = route.path.split('/');
  pathArray = pathArray.filter(p => p); // Remove empty values
  const breadcrumbs = pathArray.reduce((breadcrumbArray, path, index) => {
    const to = '/' + pathArray.slice(0, index + 1).join('/');
    const routeMatch = route.matched.find(r => r.path === to);
    if (routeMatch) {
      breadcrumbArray.push({
        path: to,
        meta: routeMatch.meta
      });
    }
    return breadcrumbArray;
  }, []);

  return breadcrumbs;
});
</script>
