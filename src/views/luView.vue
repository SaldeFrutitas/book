<template>
    <div ref="scrollContainer" class="h-[102vh] bg-[#f5f5f5] font-alexandria relative">
        <!-- Container fixed to the viewport -->
        <div class="fixed top-0 left-12 right-0 bottom-0 flex items-center justify-center overflow-hidden pointer-events-none z-0">
            <!-- This div handles the expansion and stays perfectly centered -->
            <div class="relative flex flex-col justify-between overflow-hidden transition-all duration-500 ease-out pointer-events-auto"
                :style="cardWrapperStyle">
                <div 
                    @click="toggleExpand"
                    class="
                        w-full h-full
                        relative
                        flex flex-col justify-center items-center
                        rounded-2xl p-2
                        overflow-hidden
                        transition-all duration-500 ease-in-out
                        cursor-pointer
                        " 
                    :style="{
                        backgroundColor: dynamicBgColor,
                        color: dynamicTextColor
                    }" 
                    :class="[
                        progress > 0 ? '' : 'group hover:text-[#2B0020]',
                        { '!rounded-2xl': progress > 0.95 }
                    ]">
                    <h1 class="text-2xl font-semibold tracking-tight transition-colors duration-300 group-hover:opacity-0 text-center">
                        Lü
                    </h1>
                    <div class="
                        absolute
                        w-24 h-24 -bottom-16 left-0
                        translate-y-4
                        transition-all
                        duration-500
                        ease-out
                        " 
                        :class="[
                            progress <= 0 ? 'group-hover:-translate-y-7' : '',
                            { '!translate-y-0': progress > 0.9 }
                        ]">
                        <img src="/imgs/lu.svg" alt="LOGO LÜ" 
                            class="transition-all duration-300" 
                            :class="[ progress <= 0 ? 'invert-0' : '' ]" />
                    </div>
                </div>
            </div>
        </div>

        <div class="h-full w-full pointer-events-none"></div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue';

const scrollContainer = ref<HTMLElement | null>(null);
const progress = ref(0);

const handleScroll = () => {
    const total = document.documentElement.scrollHeight - window.innerHeight;
    const current = window.scrollY;
    progress.value = Math.max(0, Math.min(1, current / total));
};

const toggleExpand = () => {
    if (progress.value < 0.9) {
        window.scrollTo({ 
            top: document.documentElement.scrollHeight, 
            behavior: 'smooth' 
        });
    }
};

const cardWrapperStyle = computed(() => {
    const p = progress.value;
    const size = 64; // Starting square size (px)
    const width = `calc(${size}px + (100% - ${size}px) * ${p})`;
    const height = `calc(${size}px + (100% - ${size}px) * ${p})`;
    return { width, height };
});

const dynamicBgColor = computed(() => {
    if (progress.value <= 0) return '#FF91E3';
    const p = Math.max(0, (progress.value - 0.6) / 0.4); 
    return `color-mix(in srgb, #FF91E3, #f5f5f5 ${p * 100}%)`;
});

const dynamicTextColor = computed(() => {
    // Ensuring text stays dark or transitions smoothly
    if (progress.value <= 0) return '#2B0020';
    const p = Math.max(0, (progress.value - 0.6) / 0.4);
    return `color-mix(in srgb, #2B0020, #2B0020 ${p * 100}%)`;
});

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll();
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.font-alexandria {
    font-family: 'Alexandria', sans-serif;
}
</style>
