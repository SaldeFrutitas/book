<template>
  <nav class="
    fixed inset-0 left-0 z-50
    items-center justify-between
    w-12 h-full
    flex flex-col
    py-8
    border-r border-[#0A77F3]
    transition-all duration-300" :style="{ borderColor: routeColor }">
    <!-- Dynamic Project Label -->
    <span class="-rotate-90  font-regular tracking-widest text-md whitespace-nowrap mb-4"
      :style="{ color: routeColor }">
      {{ currentProjectName }}
    </span>

    <!-- Home Button -->
    <router-link to="/" class="flex items-center justify-center w-12 h-12 transition-all duration-500"
      :style="{ backgroundColor: routeColor }">
      <i class="fa-solid fa-ellipsis text-white"></i>
    </router-link>

    <!-- External Link -->
    <a :href="'https://' + currentProjectUrl" target="_blank" class="
        font-regular text-md
        hover:text-white
        hover:underline
        cursor-pointer
        -rotate-90
        whitespace-nowrap
        block
        w-0
      " :style="{ color: routeColor }">
      {{ currentProjectUrl }}
    </a>
  </nav>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const currentProjectName = computed(() => {
  if (route.path.startsWith('/skyview')) return 'Sky';
  if (route.path.startsWith('/firewebview')) return 'Fireweb';
  if (route.path.startsWith('/careview')) return 'Care';
  if (route.path.startsWith('/luview')) return 'Lü';
  return 'Lü Dashboard';
});

const routeColor = computed(() => {
  if (route.path.startsWith('/firewebview')) return '#FF242C';
  if (route.path.startsWith('/skyview')) return '#0A77F3';
  if (route.path.startsWith('/careview')) return '#07CBB4';
  if (route.path.startsWith('/luview')) return '#2B0020';
  return '#1d1d1d';
});

const currentProjectUrl = computed(() => {
  if (route.path.startsWith('/skyview')) return 'sky.digiapps.com.co';
  if (route.path.startsWith('/firewebview')) return 'fireweb.digiapps.com.co';
  if (route.path.startsWith('/careview')) return 'care.digiapps.com.co';
  return 'digiapps.com.co';
});
</script>

<style scoped></style>
