<template>
  <div class="
      bg-[#f5f5f5]
      p-2
      w-screen h-screen
      font-alexandria
    ">
    <div class="
        grid
        grid-cols-10 grid-rows-16
        sm:grid-cols-16 sm:grid-rows-8 gap-2
        grid-flow-row-dense
        w-full h-full
      ">
      <!-- Item 1: sky card -->
      <div @click="$router.push('/skyview')" class="
          col-span-5 row-span-4
          md:col-span-3 md:row-span-4
          flex flex-col justify-between
          bg-[#0A77F3]
          text-[#003470]
          rounded-0 p-2 sm:p-4
          overflow-hidden

          hover:rounded-3xl
          hover:text-[#F5f5f5]
          hover:bg-[#1d1d1d]
          transition-all duration-300 ease-in-out
          cursor-pointer group
        " @mouseenter="onHover(true)" @mouseleave="onHover(false)">
        <!-- solar system -->
        <div class="relative flex w-56">
          <div class="w-24  h-24 top-10 right-12 sm:w-96 sm:h-96 sm:-left-8
              absolute flex items-center justify-center
              transition-opacity duration-300
            ">
            <svg viewBox="0 0 800 800" class="overflow-visible rotate-20 scale-80 sm:scale-100" width="900">
              <!-- Órbitas planetas -->
              <g v-for="(planet, i) in planets" :key="i" transform="rotate(-45  400 400)">
                <!-- Órbita elíptica -->
                <ellipse cx="400" cy="400" :rx="planet.rx" :ry="planet.ry" fill="none" stroke="currentColor"
                  stroke-width="0.5" :stroke-opacity="planet.opacity" />

                <!-- Planeta -->
                <circle :cx="400 + planet.rx * Math.cos(planet.angle)" :cy="400 + planet.ry * Math.sin(planet.angle)"
                  :r="planet.size" fill="currentColor" />
              </g>
              <!-- Sol -->
              <defs>
                <filter id="circle-shadow" x="-50%" y="-50%" width="200%" height="200%">
                  <feDropShadow dx="0" dy="0" stdDeviation="8" flood-color="#0A77F3" flood-opacity="0.8" />
                </filter>
              </defs>
              <circle cx="400" cy="392" r="32" fill="currentColor" stroke="currentColor" />
            </svg>
          </div>
        </div>
        <img src="/imgs/logo-sky-blue.svg" alt="LOGO SKY" class="
            w-auto h-6
            sm:w-auto sm:h-10
            mb-auto mt-1 mr-auto ml-1
            group-hover:invert group-hover:brightness-0
          " />
        <div class="
            text-white
            ml-auto mr-1
            overflow-hidden
            whitespace-nowrap
            w-0
            text-right
            group-hover:w-44
            transition-all
            duration-500
          ">
          <span>Show project</span>
        </div>
      </div>

      <!-- Item 2: care Card -->
      <div @click="$router.push('/careview')" class="
          col-span-5 row-span-4
          md:col-span-5 md:row-span-3
          flex flex-col justify-between
          bg-[#07CBB4]
          rounded-0 p-4
          overflow-hidden

          hover:rounded-3xl
          hover:bg-[#1d1d1d]
          transition-all duration-300 ease-in-out
          cursor-pointer group
        ">
        <svg class="w-auto h-6
            sm:w-auto sm:h-10
            mb-auto mt-1 mr-auto ml-1
            " viewBox="0 0 280 88" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M27.8699 1.0045C27.771 1 27.6675 1 27.5686 1C27.4652 1 27.3662 1 27.2628 1.0045C22.2663 1.17989 18.3761 5.3669 18.3761 10.287V19.4121H9.30047C4.3759 19.4121 0.179893 23.2932 0.00449733 28.2853C0 28.3842 0 28.4877 0 28.5866C0 28.6855 0 28.789 0.00449733 28.8924C0.179893 33.8844 4.3759 37.7656 9.30047 37.7656H21.7626H27.5686H29.8667H33.3791C35.2455 37.7656 36.7611 36.277 36.7611 34.4376V10.287C36.7566 5.3669 32.8665 1.17989 27.8699 1.0045Z"
            fill="#F41752" />
          <g class="group-hover:invert group-hover:brightness-0">
            <path
              d="M84.9958 28.8926C85.0003 28.7892 85.0003 28.6903 85.0003 28.5868C85.0003 28.4879 85.0003 28.3845 84.9958 28.281C84.8204 23.289 80.6244 19.4078 75.6998 19.4078H66.5657V10.3412C66.5657 5.4211 62.6755 1.23409 57.679 1.0587C57.5756 1.0542 57.4766 1.0542 57.3732 1.0542C57.2698 1.0542 57.1708 1.0542 57.0674 1.0587C52.0709 1.23409 48.1807 5.4211 48.1807 10.3412V22.7853V28.5868V30.8805V34.3884C48.1807 36.2548 49.6738 37.7659 51.5087 37.7659H75.6908C80.6289 37.7659 84.8204 33.8802 84.9958 28.8926Z"
              fill="#005249" />
            <path
              d="M27.8699 85.995C27.771 85.9995 27.6675 85.9995 27.5686 85.9995C27.4652 85.9995 27.3662 85.9995 27.2628 85.995C22.2663 85.8196 18.3761 81.6326 18.3761 76.7126V67.5875H9.30047C4.3759 67.5875 0.179893 63.7063 0.00449733 58.7143C0 58.6153 0 58.5119 0 58.4129C0 58.314 0 58.2106 0.00449733 58.1071C0.179893 53.1151 4.3759 49.2339 9.30047 49.2339H21.7626H27.5686H29.8667H33.3791C35.2455 49.2339 36.7611 50.7225 36.7611 52.5619V76.7126C36.7566 81.6326 32.8665 85.8196 27.8699 85.995Z"
              fill="#005249" />
            <path
              d="M84.9958 58.1071C85.0003 58.2106 85.0003 58.3095 85.0003 58.4129C85.0003 58.5119 85.0003 58.6153 84.9958 58.7187C84.8204 63.7108 80.6244 67.592 75.6998 67.592H66.5657V76.6586C66.5657 81.5787 62.6755 85.7657 57.679 85.9411C57.5756 85.9456 57.4766 85.9456 57.3732 85.9456C57.2698 85.9456 57.1708 85.9456 57.0674 85.9411C52.0709 85.7657 48.1807 81.5787 48.1807 76.6586V64.2145V58.4129V56.1193V52.6114C48.1807 50.745 49.6738 49.2339 51.5087 49.2339H75.6908C80.6289 49.2339 84.8204 53.1196 84.9958 58.1071Z"
              fill="#005249" />
            <path
              d="M111 43.7345C111 37.2843 113.294 31.8115 117.877 27.3117C122.465 22.8075 128.057 20.5576 134.648 20.5576C143.449 20.5576 150.129 24.168 154.686 31.3932L145.356 36.5974C142.604 32.7273 139.033 30.7944 134.648 30.7944C131.121 30.7944 128.061 32.0844 125.468 34.6645C122.875 37.2446 121.576 40.2694 121.576 43.7389C121.576 47.2084 122.87 50.2332 125.468 52.8133C128.061 55.3934 131.121 56.6835 134.648 56.6835C139.179 56.6835 142.745 54.777 145.356 50.9641L154.602 56.0803C149.957 63.3627 143.309 66.9995 134.652 66.9995C128.145 66.9995 122.575 64.7188 117.948 60.1618C113.316 55.6004 111 50.1276 111 43.7345Z"
              fill="#005249" />
            <path
              d="M155.157 43.7345C155.157 37.2843 157.447 31.8115 162.021 27.3117C166.6 22.8075 172.188 20.5576 178.788 20.5576C183.653 20.5576 187.99 21.9049 191.794 24.5995V20.9891H202.801V66.0089H191.794V62.9973C187.924 65.6346 183.582 66.9687 178.766 66.9951C172.258 66.9951 166.697 64.7144 162.083 60.1574C157.464 55.6004 155.157 50.1276 155.157 43.7345ZM169.621 34.6601C167.032 37.2402 165.737 40.265 165.737 43.7345C165.737 47.204 167.032 50.2288 169.621 52.8089C172.21 55.389 175.261 56.6791 178.766 56.6791C182.27 56.6791 185.317 55.389 187.91 52.8089C190.504 50.2288 191.794 47.204 191.794 43.7345C191.794 40.265 190.499 37.2402 187.91 34.6601C185.322 32.08 182.275 30.79 178.766 30.79C175.257 30.79 172.21 32.08 169.621 34.6601Z"
              fill="#005249" />
            <path
              d="M208.432 66.0044V20.9891H219.527V25.3128C222.653 22.1999 227.078 20.6149 232.815 20.5576L232.08 32.2517C227.206 32.2517 223.895 33.0971 222.147 34.7922C220.399 36.4873 219.523 39.2568 219.523 43.1005V66.0044H208.432Z"
              fill="#005249" />
            <path
              d="M232.467 43.7345C232.467 37.2843 234.752 31.8115 239.327 27.3117C243.897 22.8075 249.48 20.5576 256.071 20.5576C263.005 20.5576 268.668 22.878 273.053 27.523C277.438 32.1681 279.631 37.7994 279.631 44.4214C279.631 45.1391 279.574 46.1429 279.459 47.433H243.729C244.676 50.3565 246.274 52.6284 248.524 54.2487C250.774 55.869 253.574 56.6791 256.929 56.6791C259.681 56.6791 261.979 56.2212 263.829 55.3054C265.678 54.3896 267.333 52.941 268.795 50.9641L278.081 56.0803C273.264 63.3627 266.215 66.9995 256.925 66.9995C249.871 66.9995 244.033 64.7937 239.406 60.3775C234.783 55.957 232.467 50.4137 232.467 43.7345ZM243.989 38.702H267.937C265.7 33.4273 261.746 30.79 256.071 30.79C253.433 30.79 251.025 31.5209 248.846 32.9826C246.671 34.4444 245.05 36.3509 243.989 38.702Z"
              fill="#005249" />
          </g>
        </svg>

        <div class="
            text-white
            ml-auto mr-1
            overflow-hidden
            whitespace-nowrap
            w-0
            text-right
            group-hover:w-30
            transition-all
            duration-500
          ">
          <span>coming soon...</span>
        </div>
      </div>

      <!-- Item 3: Tall Card -->
      <div class="
          col-span-6 row-span-3
          md:col-span-4 md:row-span-4
          bg-indigo-500
          rounded-0 p-4
          overflow-hidden

          hover:rounded-3xl
          hover:bg-[#1d1d1d]
          transition-all duration-300 ease-in-out
          cursor-pointer group
        ">
        <h1 class="text-xl text-white font-black tracking-tight">Sky Large</h1>
      </div>
      <!-- Item 4: Square Card -->
      <div class="
          col-span-4 row-span-5
          md:col-span-4 md:row-span-2
          bg-[#07CB7D]
          rounded-0 p-4
          overflow-hidden

          hover:rounded-3xl
          hover:bg-[#1d1d1d]
          transition-all duration-300 ease-in-out
          cursor-pointer group
        ">
        <h1 class="text-xl text-white font-black tracking-tight">Sky Large</h1>
      </div>

      <!-- Item 5: Small Card -->
      <div class="
          col-span-4 row-span-6
          md:col-span-4 md:row-span-6
          bg-pink-500
          rounded-0 p-4
          overflow-hidden

          hover:rounded-3xl
          hover:bg-[#1d1d1d]
          transition-all duration-300 ease-in-out
          cursor-pointer group
        ">
        <h1 class="text-xl text-white font-black tracking-tight">Sky Large</h1>
      </div>

      <!-- Item 6:fireweb Card -->
      <div @click="$router.push('/firewebview')" class="
          col-span-6 row-span-4
          md:col-span-4 md:row-span-5
          flex flex-col justify-between
          bg-[#FF242C]
          rounded-0 p-4
          overflow-hidden

          hover:rounded-3xl
          hover:bg-[#1d1d1d]
          transition-all duration-300 ease-in-out
          cursor-pointer group
        ">
        <img src="/imgs/logo-fireweb-white.svg" alt="LOGO fireweb" class="
            w-auto h-6
            sm:w-auto sm:h-10
            mb-auto mt-1 mr-auto ml-1
            group-hover:invert group-hover:brightness-0
        " />
        <a href="https://fireweb.digiapps.com.co" target="_blank" class="
            text-white
            ml-auto mr-1
            overflow-hidden
            whitespace-nowrap
            hover:underline
            w-0
            text-right
            group-hover:w-52
            transition-all
            duration-500
          ">
          <span>fireweb.digiapps.com.co</span>
        </a>
      </div>
      <!-- Item 7: Lü card -->
      <div @click="$router.push('/luview')" class="
          relative
          col-span-2 row-span-2
          md:col-span-1 md:row-span-1
          flex flex-col justify-between
          bg-[#1d1d1d]
          text-[#F5f5f5]
          rounded-0 p-2
          overflow-hidden

          hover:rounded-2xl
          hover:text-[#2B0020]
          hover:bg-[#FF91E3]
          transition-all duration-300 ease-in-out
          cursor-pointer group
        ">
        <h1 class="text-2xl font-semibold tracking-tight">Lü</h1>
        <div class="
          absolute
          w-24 h-24 top-4 -right-4
          translate-y-20
          group-hover:translate-y-0
          transition-all
          duration-300
          ease-out
            ">
          <img src="/imgs/lu.svg" alt="LOGO LÜ" class="invert group-hover:invert-0" />
        </div>

      </div>
      <div class="
          col-span-6 row-span-3
          sm:col-span-5 sm:row-span-4
          bg-violet-500
          rounded-0 p-4
          overflow-hidden

          hover:rounded-3xl
          hover:bg-[#1d1d1d]
          transition-all duration-300 ease-in-out
          cursor-pointer group
        ">
        <h1 class="text-xl text-white font-black tracking-tight">Sky Large</h1>
      </div>
      <div class="
          col-span-4 row-span-3
          sm:col-span-3 sm:row-span-4
          bg-[#C8F069]
          rounded-0 p-4
          overflow-hidden

          hover:rounded-3xl
          hover:bg-[#1d1d1d]
          transition-all duration-300 ease-in-out
          cursor-pointer group
        ">
        <h1 class="text-xl text-white font-black tracking-tight">Sky Large</h1>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  ref,
  reactive,
  onMounted,
} from 'vue';
// import { useRouter } from 'vue-router';

// const router = useRouter();

const speedMultiplier = ref(0);
const HOVER_MULTIPLIER = 1;

function onHover(isHovering: boolean) {
  speedMultiplier.value = isHovering ? HOVER_MULTIPLIER : 0;
}


const planets = reactive([
  { rx: 80, ry: 30, angle: 10, speed: 0.01, size: 3, opacity: 0.8 },
  { rx: 120, ry: 48, angle: 8, speed: 0.009, size: 4, opacity: 0.7 },
  { rx: 180, ry: 65, angle: 2, speed: 0.004, size: 5, opacity: 0.6 },
  { rx: 250, ry: 80, angle: 2.5, speed: 0.002, size: 8, opacity: 0.5 },
  { rx: 310, ry: 95, angle: 1.5, speed: 0.001, size: 2, opacity: 0.4 },
]);

function animate() {
  planets.forEach((planet, index) => {
    planets[index].angle += planet.speed * speedMultiplier.value;
  });
  requestAnimationFrame(animate);
}

onMounted(() => {
  animate();
});
</script>

<style scoped></style>
