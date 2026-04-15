<template>
  <nav
    class="
      fixed bottom-0 left-0 right-0 z-50
      flex sm:flex-col
      items-center justify-between
      w-full h-12 flex-row
      px-0 py-0

      sm:w-12 sm:h-full
      sm:top-0 sm:left-0 sm:right-auto sm:bottom-auto
      sm:py-8 sm:px-0
      sm:border-r sm:border-[#0A77F3]
      transition-all duration-300"
    :style="{ borderColor: routeColor}
    "
  >

    <!-- Home Button -->
    <router-link to="/"
      class="
        flex items-center justify-center
        w-full h-12
        px-4 my-auto

        sm:w-12
        transition-all duration-500"

      :style="{ backgroundColor: routeColor }
      "
    >
      <i class="fa-solid fa-ellipsis text-white"></i>
    </router-link>

    <!-- External Link -->
    <a
      :href="'https://' + currentProjectUrl"
      target="_blank"
      class="
        font-regular text-xs text-center
        mr-4
        rotate-0
        hidden
        
        whitespace-nowrap
        block cursor-pointer

        hover:text-white
        hover:underline

        sm:w-0 w-full sm:mr-0
        sm:text-md 
        sm:-rotate-90 sm:inline-block
        
        transition-all duration-300
      "
      :style="{ color: routeColor }
      "
    >
      {{ currentProjectUrl }}
    </a>
  </nav>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

// const currentProjectName = computed(() => {
//   if (route.path.startsWith('/skyview')) return 'Sky';
//   if (route.path.startsWith('/firewebview')) return 'Fireweb';
//   if (route.path.startsWith('/careview')) return 'Care';
//   if (route.path.startsWith('/luview')) return 'Lü';
//   return 'Lü Dashboard';
// });

const routeColor = computed(() => {
  if (route.path.startsWith('/firewebview')) return '#FF242C';
  if (route.path.startsWith('/skyview')) return '#0A77F3';
  if (route.path.startsWith('/careview')) return '#07CBB4';
  if (route.path.startsWith('/luview')) return '#2B0020';
  return '#1d1d1d';
});

const currentProjectUrl = computed(() => {
  if (route.path.startsWith('/firewebview')) return 'fireweb.digiapps.com.co';
  if (route.path.startsWith('/careview')) return 'care.digiapps.com.co';
  if (route.path.startsWith('/skyview')) return 'sky.digiapps.com.co';
  return 'digiapps.com.co';
});
</script>

<style scoped></style>
