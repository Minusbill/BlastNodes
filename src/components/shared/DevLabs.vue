<script setup>

import { ref} from "vue";

const isVisible = ref(false);

</script>

<template>
  <!-- This empty div is only for demo purposes and it's used so you can close the menu on a touchscreen device. Normally you'd handle it differently by not using hover states on mobile, but by using real clicks. -->
  <div class="inset-0" @click="isVisible = false"></div>
  <div class="relative inline-block" @mouseover="isVisible = true" @mouseleave="isVisible = false" @keydown.enter="isVisible = !isVisible">
    <button type="button" class="inline-flex items-center justify-between px-2 py-1 font-medium text-gray-700 transition-all duration-500 rounded-md focus:outline-none focus:text-brand-900 sm:focus:shadow-outline">
      <span class="font-general-medium block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-indigo-600 dark:hover:text-indigo-300  sm:mx-4 mb-2 sm:py-2 ">开发接单平台👨🏽‍💻</span>
      <svg fill="currentColor" viewBox="0 0 20 20" class="flex-shrink-0 w-5 h-5 ml-1">
        <path :class="{ 'rotate-180': isVisible }" class="transition duration-300 ease-in-out origin-center transform" fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
      </svg>
    </button>

    <transition enter-active-class="transition duration-300 ease-out transform" enter-class="-translate-y-3 scale-95 opacity-0" enter-to-class="translate-y-0 scale-100 opacity-100" leave-active-class="transition duration-150 ease-in transform" leave-class="translate-y-0 opacity-100" leave-to-class="-translate-y-3 opacity-0">
      <div v-show="isVisible" class="absolute pt-2">
        <div class="relative py-1 bg-white border border-gray-200 rounded-md shadow-xl">
          <div class="absolute top-0 w-4 h-4 origin-center transform rotate-45 translate-x-5 -translate-y-2 bg-white border-t border-l border-gray-200 rounded-sm pointer-events-none "></div>
          <div class="relative">
            <router-link
                to="/dev/platforms"
                class="font-general-medium block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-indigo-600 dark:hover:text-indigo-300  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark"
                aria-label="CewComer"
            >应用开发</router-link>
            <router-link
                to="/dev/platforms"
                class="font-general-medium block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-indigo-600 dark:hover:text-indigo-300  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark"
                aria-label="About us"
            >安全审计</router-link>
            <router-link
                to="/dev/platforms"
                class="font-general-medium block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-indigo-600 dark:hover:text-indigo-300  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark"
                aria-label="About us"
            >项目顾问</router-link>
            <router-link
                to="/dev/products"
                class="font-general-medium block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-indigo-600 dark:hover:text-indigo-300  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark"
                aria-label="About us"
            >Web3 周边</router-link>
          </div>
        </div>
      </div>
    </transition>
  </div>

</template>

<style scoped>

</style>
