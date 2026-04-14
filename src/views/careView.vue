<template>
    <div class="w-screen overflow-x-hidden bg-[#1d1d1d]">
        <div class="w-full h-screen bg-[#1d1d1d] flex justify-end overflow-hidden">
            <div
                class="relative h-full w-[calc(100%-3rem)] bg-[#1d1d1d] flex flex-col items-end justify-center overflow-hidden">

                <!-- Main Horizontal Row -->
                <div
                    class="relative h-[598px] w-full border-t border-b border-[#0A77F3] flex items-center justify-end animate-draw-right delay-100">
                    <h1 class="text-[13rem] mb-1 text-white absolute left-36 opacity-0 animate-fade-in delay-1000">Logo
                    </h1>
                    <img src="/imgs/icon-sky-1.svg" alt="LOGO SKY"
                        class="h-full mr-20 opacity-0 animate-fade-in delay-800" />

                    <!-- Inner Horizontal 1 -->
                    <div
                        class="absolute w-full h-[430px] border-t border-b border-[#0A77F3] flex items-center justify-center animate-draw-left delay-300">
                    </div>

                    <!-- Inner Horizontal 2 -->
                    <div
                        class="absolute w-full h-[147px] border-t border-b border-[#0A77F3] flex items-center justify-center animate-draw-right delay-500">
                    </div>
                </div>

                <!-- Vertical Column 1 (Down) -->
                <div
                    class="absolute h-full w-[147px] border-l border-r border-[#0A77F3] flex items-center justify-start animate-draw-down delay-200">
                </div>

                <!-- Vertical Column 2 (Up) -->
                <div
                    class="absolute h-full w-[409px] border-l border-r border-[#0A77F3] flex items-end justify-center mr-20 animate-draw-up delay-400">
                </div>

                <!-- Vertical Column 3 (Down) -->
                <div
                    class="absolute h-full w-[596px] border-l border-r border-[#0A77F3] flex items-end justify-center mr-20 animate-draw-down delay-600">
                </div>

            </div>
        </div>
        <section class="min-h-screen w-full bg-[#f5f5f5] flex justify-end">
            <div class="w-[calc(100%-3rem)] p-20 flex flex-col items-start justify-center">
                <h2 class="text-5xl font-semibold text-[#1d1d1d]">The logo stands as<br> the most recognizable symbol
                    <br>of the
                    brand.
                </h2>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
// Logic for Sky project
</script>


<style>
/* Global fix for horizontal scroll, only applied when SkyView is mounted */
body,
html {
    overflow-x: hidden !important;
    position: relative;
    width: 100%;
}

/* Ensure the parent container doesn't overflow */
div.h-screen.w-screen {
    overflow-x: hidden !important;
    width: 100% !important;
    max-width: 100vw;
}
</style>

<style scoped>
.animate-draw-right {

    animation: draw-right 1.2s cubic-bezier(0.65, 0, 0.35, 1) forwards;
}

.animate-draw-left {
    animation: draw-left 1.2s cubic-bezier(0.65, 0, 0.35, 1) forwards;
}

.animate-draw-down {
    animation: draw-down 1.2s cubic-bezier(0.65, 0, 0.35, 1) forwards;
}

.animate-draw-up {
    animation: draw-up 1.2s cubic-bezier(0.65, 0, 0.35, 1) forwards;
}

.animate-fade-in {
    animation: fade-in 0.8s ease-out forwards;
}

.delay-100 {
    animation-delay: 0.1s;
}

.delay-200 {
    animation-delay: 0.2s;
}

.delay-300 {
    animation-delay: 0.3s;
}

.delay-400 {
    animation-delay: 0.4s;
}

.delay-500 {
    animation-delay: 0.5s;
}

.delay-600 {
    animation-delay: 0.6s;
}

.delay-800 {
    animation-delay: 0.8s;
}

.delay-1000 {
    animation-delay: 1.0s;
}

@keyframes draw-right {
    from {
        clip-path: inset(0 100% 0 0);
    }

    to {
        clip-path: inset(0 0 0 0);
    }
}

@keyframes draw-left {
    from {
        clip-path: inset(0 0 0 100%);
    }

    to {
        clip-path: inset(0 0 0 0);
    }
}

@keyframes draw-down {
    from {
        clip-path: inset(0 0 100% 0);
    }

    to {
        clip-path: inset(0 0 0 0);
    }
}

@keyframes draw-up {
    from {
        clip-path: inset(100% 0 0 0);
    }

    to {
        clip-path: inset(0 0 0 0);
    }
}

@keyframes fade-in {
    from {
        opacity: 0;
        transform: translateY(10px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>
