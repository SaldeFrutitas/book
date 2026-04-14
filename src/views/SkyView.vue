<template>
  <div class="w-screen overflow-x-hidden bg-[#1d1d1d]">
    <div ref="section1" class="w-full h-screen bg-[#1d1d1d] flex justify-end overflow-hidden">
      <div
        class="relative h-full w-[calc(100%-3rem)] bg-[#1d1d1d] flex flex-col items-end justify-center overflow-hidden">

        <!-- logoText -->
        <div ref="logoText" class="absolute left-36 z-20 flex top-1/2 -translate-y-1/2">
          <h1 class="text-[12.5rem] mb-1 text-white opacity-0 animate-fade-in delay-1000">Logo</h1>
        </div>

        <div ref="linesGroup" class="absolute inset-0 flex flex-col items-end justify-center">

          <!-- Main Horizontal Row -->
          <div ref="rowMain"
            class="relative h-[598px] w-full border-t border-b border-[#0A77F3] flex items-center justify-end animate-draw-right delay-100">
            <div ref="logo1" class="h-full mr-20 z-10">
              <img src="/imgs/icon-sky-1.svg" alt="LOGO SKY" class="h-full opacity-0 animate-fade-in delay-800" />
            </div>
            <div ref="rowInner1"
              class="absolute w-full h-[427px] border-t border-b border-[#0A77F3] animate-draw-left delay-300"></div>
            <div ref="rowInner2"
              class="absolute w-full h-[144px] border-t border-b border-[#0A77F3] animate-draw-right delay-500"></div>
          </div>

          <!-- Vertical Column 1 -->
          <div ref="colV1"
            class="absolute h-full w-[153px] border-l border-r border-[#0A77F3] mr-76.5 animate-draw-down delay-200">
          </div>
          <!-- Vertical Column 2 -->
          <div ref="colV2"
            class="absolute h-full w-[408px] border-l border-r border-[#0A77F3] mr-43.5 animate-draw-up delay-400">
          </div>
          <!-- Vertical Column 3 -->
          <div ref="colV3" class="absolute h-full w-[596px] border-l border-r border-[#0A77F3] mr-20">
          </div>

        </div>
      </div>
    </div>

    <section ref="section2"
      class="min-h-screen w-full bg-[#f5f5f5] flex justify-end items-center relative overflow-hidden">

      <!-- Línea vertical izquierda -->
      <div ref="sec2LineL" class="absolute top-0 bottom-0 w-[1px] bg-[#0A77F3] left-48"></div>

      <!-- Línea vertical derecha (columna del logo) -->
      <div ref="sec2Col"
        class="absolute top-0 bottom-0 right-76.5 w-[152px] border-l border-r border-[#0A77F3] flex items-center justify-center">
        <div ref="sec2ColInner" class="bg-[#E6E6E6] w-full h-[160px] flex items-center justify-center">
          <img ref="logo2" src="/icons/icon-sky.svg" alt="LOGO SKY" class="h-20" />
          <img ref="logo2b" src="/imgs/logo-sky-marks.svg" alt="LOGO SKY MARKS" class="h-38 mb-2 absolute" />
          <img ref="logo3" src="/imgs/logo-tab.svg" alt="LOGO TAB" class="h-80 mb-2 absolute" />
        </div>
      </div>

      <!-- Borde horizontal central (animado) -->
      <div ref="sec2Border"
        class="absolute right-0 w-[calc(100%-3rem)] border-b border-t h-[160px] border-[#0A77F3] pointer-events-none">
      </div>

      <!-- Contenedor del texto (sin animación de clipPath) -->
      <div class="relative w-[calc(100%-3rem)] h-[160px] flex items-center">
        <h2 ref="sec2Text1" class="text-6xl font-semibold text-[#1d1d1d] absolute left-36">
          The logo stands as<br>the most recognizable<br>symbol of the brand.
        </h2>
        <div ref="sec2Text2" class="absolute left-36 h-full flex flex-col items-start gap-2">
          <p class="text-sm font-normal text-[#0A77F3]">System</p>
          <h2 class="text-6xl font-semibold text-[#1d1d1d]">
            The Sky logo has two <br>expressions.
          </h2>
        </div>
        <div ref="sec2Text3" class="absolute w-1/3 left-36 h-full flex flex-col items-start gap-2">
          <p class="text-sm font-normal text-[#f5f5f5] bg-[#0A77F3] rounded-full px-2.5 py-1">version A</p>
          <h2 class="text-6xl font-semibold text-[#1d1d1d]">
            The full logo
          </h2>
          <p class="text-sm font-light text-[#3D3D3D]">The Sky logo consists of two elements: the glyph and the
            wordmark. It is the primary mark used for high-level brand applications, including partnerships and video.
          </p>
        </div>
        <div ref="sec2Text4" class="absolute w-1/3 left-36 h-full flex flex-col items-start gap-2">
          <p class="text-sm font-normal text-[#f5f5f5] bg-[#0A77F3] rounded-full px-2.5 py-1">version B</p>
          <h2 class="text-6xl font-semibold text-[#1d1d1d]">
            The tab
          </h2>
          <p class="text-sm font-light text-[#3D3D3D]">The Tab combines the glyph within a plane. It is typically
            accompanied by the wordmark elsewhere in the composition. Unlike the full logo, layouts originate from the
            Tab whenever it is used.
          </p>
        </div>
      </div>

    </section>
    <section ref="section3" class="min-h-screen w-full bg-[#1d1d1d] flex justify-end items-center relative">
      <!-- Línea vertical izquierda -->
      <div ref="sec3LineL" class="absolute top-0 bottom-0 w-[1px] bg-[#0A77F3] left-48"></div>
      <div ref="sec3LineR" class="absolute top-0 bottom-0 w-[1px] bg-[#0A77F3] right-44"></div>
      <div class="relative w-[calc(100%-3rem)] h-[114px] flex items-center border-b border-t border-[#0A77F3]">
        <h2 ref="sec3Text1" class="text-[10rem] font-semibold text-[#f5f5f5] absolute left-33">
          Iconography
        </h2>
        <img ref="sec3Nave" src="/icons/icon-nave.svg" alt="LOGO SKY" class="h-16  absolute left-52 -top-30" />
        <div ref="sec3Rocket"
          class="absolute right-82 -top-80 bg-[#f5f5f5] w-16 h-16 flex items-center justify-center rounded-2xl p-2">
          <img src="/icons/icon-rocket.svg" alt="LOGO SKY" class="h-10" />
        </div>
        <div ref="sec3Card" class="bg-[#EAEAEA] w-92 h-92 rounded-3xl absolute right-44 top-52 p-20 shadow-lg">
          <img src="/icons/icon-img.svg" alt="LOGO SKY" class="h-full" />
        </div>
      </div>
    </section>
    <section ref="section4" class="min-h-screen w-full  flex justify-end items-start pt-30 relative  bg-[#f5f5f5]">
      <!-- Línea vertical izquierda -->
      <div ref="sec4LineL" class="absolute top-0 bottom-0 w-[1px] bg-[#0A77F3] left-48"></div>
      <div ref="sec4LineR" class="absolute top-0 bottom-0 w-[1px] bg-[#0A77F3] right-44"></div>
      <div class="relative w-[calc(100%-3rem)] h-[84px] flex items-center border-b border-t border-[#0A77F3]">
        <div ref="sec4Text1" class="absolute left-36 -top-2 flex flex-col gap-8 items-start w-full pb-26">
          <h2 class="text-5xl font-semibold text-[#1d1d1d]">
            Effective icons are clear,<br>intuitive, and easy to scale.
          </h2>
          <p class="text-md font-light text-[#3D3D3D]">
            Our iconography is rooted in these core elements, then enhanced through scale, contrast,<br> and style to
            communicate clearly and express character. </p>
        </div>
        <div class="w-full h-[140px] absolute right-0 -bottom-90 border-b border-t border-[#0A77F3]">
          <div class="absolute -top-10 border-t border-[#0A77F3] w-full pl-36 pr-46 flex items-center justify-between">
            <p class="text-sm font-regular text-[#0a77f3] px-2.5 mt-3">
              Files Icons
            </p>
            <p class="text-sm font-regular text-[#0a77f3] px-2.5 mt-3">
              120 x 120px
            </p>
          </div>
          <div class="h-full bg-[#D9D9D9]/30 absolute right-0 left-36 right-44 top-0 border-l border-r border-[#0A77F3] flex items-center justify-between px-12">
            <img src="/imgs/spot-sky/icon-file.svg" alt="LOGO SKY" class="h-16" />
            <img src="/imgs/spot-sky/icon-png.svg" alt="LOGO SKY" class="h-16" />
            <img src="/imgs/spot-sky/icon-jpg.svg" alt="LOGO SKY" class="h-16" />
            <img src="/imgs/spot-sky/icon-svg.svg" alt="LOGO SKY" class="h-16" />
            <img src="/imgs/spot-sky/icon-mp3.svg" alt="LOGO SKY" class="h-16" />
            <img src="/imgs/spot-sky/icon-video.svg" alt="LOGO SKY" class="h-16" />
            <img src="/imgs/spot-sky/icon-zip.svg" alt="LOGO SKY" class="h-16" />
            <img src="/imgs/spot-sky/icon-pdf.svg" alt="LOGO SKY" class="h-16" />
            <img src="/imgs/spot-sky/icon-doc.svg" alt="LOGO SKY" class="h-16" />
            <img src="/imgs/spot-sky/icon-ppt.svg" alt="LOGO SKY" class="h-16" />
            <img src="/imgs/spot-sky/icon-xls.svg" alt="LOGO SKY" class="h-16" />
          </div>
        </div>
        <div class="w-full h-[120px] absolute right-0 -bottom-130 border-b border-t border-[#0A77F3]">
          <div class="absolute -top-10 w-full pl-36 pr-46 flex items-center justify-between">
            <p class="text-sm font-regular text-[#0a77f3] px-2.5 mt-3">
              Spot Icons
            </p>
            <p class="text-sm font-regular text-[#0a77f3] px-2.5 mt-3">
              64 x 64px
            </p>
          </div>
          <div class="h-full bg-[#D9D9D9]/40 absolute right-0 left-36 right-44 top-0 border-l border-r border-[#0A77F3] flex items-center justify-between px-12">
            <img src="/imgs/spot-sky/icon-cloud.svg" alt="LOGO SKY" class="h-16" />
            <img src="/imgs/spot-sky/icon-star.svg" alt="LOGO SKY" class="h-16" />
            <img src="/imgs/spot-sky/icon-sound.svg" alt="LOGO SKY" class="h-16" />
            <img src="/imgs/spot-sky/icon-eye.svg" alt="LOGO SKY" class="h-16" />
            <img src="/imgs/spot-sky/icon-mail.svg" alt="LOGO SKY" class="h-16" />
            <img src="/imgs/spot-sky/icon-folder.svg" alt="LOGO SKY" class="h-16" />
            <img src="/imgs/spot-sky/icon-isla2.svg" alt="LOGO SKY" class="h-16" />
            <img src="/imgs/spot-sky/icon-isla.svg" alt="LOGO SKY" class="h-16" />
            <img src="/imgs/spot-sky/icon-lock.svg" alt="LOGO SKY" class="h-16" />
            <img src="/imgs/spot-sky/icon-sun.svg" alt="LOGO SKY" class="h-14" />
            <img src="/imgs/spot-sky/icon-moon.svg" alt="LOGO SKY" class="h-14" />
            <img src="/imgs/spot-sky/icon-warning.svg" alt="LOGO SKY" class="h-14" />
          </div>
        </div>

        <div class="w-full h-[80px] absolute right-0 -bottom-160 border-b border-t border-[#0A77F3]">
          <div class="absolute -top-10 w-full pl-36 pr-46 flex items-center justify-between">
            <p class="text-sm font-regular text-[#0a77f3] px-2.5 mt-3">
              UI Icons
            </p>
            <p class="text-sm font-regular text-[#0a77f3] px-2.5 mt-3">
              24 x 24px
            </p>
          </div>
          <div class="h-full bg-[#D9D9D9]/60 absolute right-0 left-36 right-44 top-0 border-l border-r border-[#0A77F3] flex items-center justify-between px-10">
            <span class="flex flex-row items-center gap-2 bg-[#f5f5f5] px-3 py-2 rounded-2xl">
              <img src="/imgs/spot-sky/icon-recover.svg" alt="LOGO SKY" class="h-6" />
              <h2 class="text-md mt-1 font-medium text-[#1d1d1d]">Recover</h2>
            </span>
            <span class="flex flex-row items-center gap-2 bg-[#f5f5f5] px-3 py-2 rounded-2xl">
              <img src="/imgs/spot-sky/icon-delete.svg" alt="LOGO SKY" class="h-6" />
              <h2 class="text-md mt-1 font-medium text-[#1d1d1d]">Delete</h2>
            </span>
            <span class="flex flex-row items-center gap-2 bg-[#f5f5f5] px-3 py-2 rounded-2xl">
              <img src="/imgs/spot-sky/icon-edit.svg" alt="LOGO SKY" class="h-6" />
              <h2 class="text-md mt-1 font-medium text-[#1d1d1d]">Rename</h2>
            </span>
            <span class="flex flex-row items-center gap-2 bg-[#f5f5f5] px-3 py-2 rounded-2xl">
              <img src="/imgs/spot-sky/icon-clip.svg" alt="LOGO SKY" class="h-6" />
              <h2 class="text-md mt-1 font-medium text-[#1d1d1d]">Copy link</h2>
            </span>
            <span class="flex flex-row items-center gap-2 bg-[#f5f5f5] px-3 py-2 rounded-2xl">
              <img src="/imgs/spot-sky/icon-folder.svg" alt="LOGO SKY" class="h-6" />
              <h2 class="text-md mt-1 font-medium text-[#1d1d1d]">New folder</h2>
            </span>
            <span class="flex flex-row items-center gap-2 bg-[#f5f5f5] px-3 py-2 rounded-2xl">
              <img src="/imgs/spot-sky/icon-star.svg" alt="LOGO SKY" class="h-6" />
              <h2 class="text-md mt-1 font-medium text-[#1d1d1d]">Favorite</h2>
            </span>
            <span class="flex flex-row items-center gap-2 bg-[#f5f5f5] px-3 py-2 rounded-2xl">
              <img src="/imgs/spot-sky/icon-folder2.svg" alt="LOGO SKY" class="h-6" />
              <h2 class="text-md mt-1 font-medium text-[#1d1d1d]">Move to folder</h2>
            </span>
            <span class="flex flex-row items-center gap-2 bg-[#f5f5f5] px-3 py-2 rounded-2xl">
              <img src="/imgs/spot-sky/icon-eye.svg" alt="LOGO SKY" class="h-6" />
              <h2 class="text-md mt-1 font-medium text-[#1d1d1d]">Preview</h2>
            </span>
            <span class="flex flex-row items-center gap-2 bg-[#f5f5f5] px-3 py-2 rounded-2xl">
              <img src="/imgs/spot-sky/icon-folder2.svg" alt="LOGO SKY" class="h-6" />
              <h2 class="text-md mt-1 font-medium text-[#1d1d1d]">Upload</h2>
            </span>
            <span class="flex flex-row items-center gap-2 bg-[#f5f5f5] px-3 py-2 rounded-2xl">
              <img src="/imgs/spot-sky/icon-download.svg" alt="LOGO SKY" class="h-5" />
              <h2 class="text-md mt-1 font-medium text-[#1d1d1d]">Download</h2>
            </span>

          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const section1 = ref<HTMLElement | null>(null)
const section2 = ref<HTMLElement | null>(null)
const linesGroup = ref<HTMLElement | null>(null)
const logoText = ref<HTMLElement | null>(null)
const logo1 = ref<HTMLElement | null>(null)
const logo2 = ref<HTMLImageElement | null>(null)
const logo2b = ref<HTMLImageElement | null>(null)
const rowMain = ref<HTMLElement | null>(null)
const rowInner1 = ref<HTMLElement | null>(null)
const rowInner2 = ref<HTMLElement | null>(null)
const colV1 = ref<HTMLElement | null>(null)
const colV2 = ref<HTMLElement | null>(null)
const colV3 = ref<HTMLElement | null>(null)
const sec2Border = ref<HTMLElement | null>(null)
const sec2Col = ref<HTMLElement | null>(null)
const sec2LineL = ref<HTMLElement | null>(null)
const sec2Text1 = ref<HTMLElement | null>(null)
const sec2Text2 = ref<HTMLElement | null>(null)
const sec2Text3 = ref<HTMLElement | null>(null)
const sec2Text4 = ref<HTMLElement | null>(null)
const sec2ColInner = ref<HTMLElement | null>(null)
const logo3 = ref<HTMLImageElement | null>(null)
const section3 = ref<HTMLElement | null>(null)
const sec3LineL = ref<HTMLElement | null>(null)
const sec3LineR = ref<HTMLElement | null>(null)
const sec3Text1 = ref<HTMLElement | null>(null)
const sec3Rocket = ref<HTMLElement | null>(null)
const sec3Nave = ref<HTMLImageElement | null>(null)
const sec3Card = ref<HTMLElement | null>(null)

// Slot-machine scramble: cicla chars al azar antes de aterrizar en el correcto
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// function scrambleLetter(span: HTMLSpanElement, finalChar: string, delayMs: number) {
//   const pool = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%&*?0123456789'
//   const totalMs = 750
//   const frameMs = 45
//   setTimeout(() => {
//     let elapsed = 0
//     const timer = setInterval(() => {
//       elapsed += frameMs
//       const progress = elapsed / totalMs
//       if (progress >= 1) {
//         clearInterval(timer)
//         span.textContent = finalChar
//       } else {
//         // Al inicio casi siempre random, al final casi siempre correcto
//         span.textContent = Math.random() > progress * 0.75
//           ? pool[Math.floor(Math.random() * pool.length)]
//           : finalChar
//       }
//     }, frameMs)
//   }, delayMs)
// }

onMounted(() => {
  const els = {
    section1, section2, linesGroup, logoText, logo1, logo2, logo2b,
    rowMain, rowInner1, rowInner2, colV1, colV2, colV3,
    sec2Border, sec2Col, sec2ColInner, sec2LineL, sec2Text1, sec2Text2, sec2Text3
  }
  if (Object.values(els).some(r => !r.value)) return

  const sizeAddedX = 500
  const marginExtraAnimado = 120
  const sizeAddedY = 500

  // ── ESTADO INICIAL GLOBAL ───────────────────────────────────
  gsap.set([rowMain.value, rowInner1.value, rowInner2.value], { clipPath: 'inset(0% 0% 0% 0%)' })
  gsap.set([colV1.value, colV2.value], { clipPath: 'inset(0% 0% 0% 0%)' })
  gsap.set(colV3.value!, { scaleX: 1, clipPath: 'inset(0% 0% 0% 0%)' })
  gsap.set(logo2.value!, { y: '-20vh', scale: 2, marginLeft: '10px' })
  gsap.set(logo2b.value!, { opacity: 1, clipPath: 'inset(40% 0% 60% 0%)', y: '0%' })
  gsap.set(sec2Border.value!, { y: '-100vh' })
  gsap.set(sec2Col.value!, { y: '-100vh', scale: 3.5, clipPath: 'inset(0% 0% 0% 0%)' })
  gsap.set(sec2LineL.value!, { x: '-117.2vh' })
  gsap.set(sec2Text2.value!, { y: '110vh' })
  gsap.set(sec2Text3.value!, { y: '110vh' })
  gsap.set(sec2Text4.value!, { y: '90vh' })
  gsap.set(sec2ColInner.value!, { backgroundColor: 'transparent' })
  gsap.set(logo3.value!, { opacity: 1, clipPath: 'inset(40% 0% 60% 0%)' }) // empieza oculto igual que logo2b

  // ── SECCIÓN 1 ──────────────────────────────────────────────
  gsap.timeline({
    scrollTrigger: {
      trigger: section1.value!,
      start: 'top top',
      end: 'bottom top',
      scrub: true,
    }
  })
    .to([rowMain.value, rowInner1.value, rowInner2.value], { clipPath: 'inset(0% 0% 100% 0%)', ease: 'none' }, 0)
    .to(colV1.value!, { clipPath: 'inset(0% 100% 0% 0%)', ease: 'none' }, 0)
    .to(colV2.value!, { clipPath: 'inset(0% 50% 0% 50%)', ease: 'none' }, 0)
    .to(colV3.value!, { scaleX: 0.08, ease: 'none' }, 0)
    .to(logo1.value!, { scale: 0, transformOrigin: 'center bottom', ease: 'none' }, 0)
    .to(logoText.value!, { y: -80, ease: 'none' }, 0)
    .to(linesGroup.value!, { y: '50vh', ease: 'none' }, 0)

  // ── SECCIÓN 2 ──────────────────────────────────────────────
  gsap.timeline({
    scrollTrigger: {
      trigger: section2.value!,
      start: 'top bottom',
      end: 'top top',
      scrub: true,
    }
  })
    .to(sec2Border.value!, { y: '0', ease: 'none' }, 0)
    .to(sec2Col.value!, { y: 0, scale: 1, clipPath: 'inset(0% 0% 0% 0%)', ease: 'none' }, 0)
    .to(sec2LineL.value!, { x: '0vh', y: 0, ease: 'none' }, 0)
    .to(logo2.value!, { y: 0, ease: 'none', scale: 1, marginLeft: '0px' }, 0)

  // ── SECCIÓN 2.5 (Cambio de Texto Pinneado) ──────────────────
  gsap.timeline({
    scrollTrigger: {
      trigger: section2.value!,
      start: 'top top',
      end: '+=350%', // ~50vh por fase → pausa + cambio más ágil
      scrub: 1,
      snap: {
        snapTo: [0, 1 / 7, 2 / 7, 3 / 7, 4 / 7, 5 / 7, 6 / 7, 1], // 8 puntos = 7 fases
        duration: { min: 0.3, max: 1.2 },              // cuánto tarda en "volar" al punto
        ease: 'power2.inOut',
      },
      pin: true,
    }
  })
    // FASE 0→1: pausa — el usuario lee el Texto 1

    // FASE 1→2: sale Texto 1, entra Texto 2 + se expande la cuadrícula
    .to(sec2Text1.value!, { y: '-120vh', ease: 'none', duration: 1 }, 1)
    .to(sec2Text2.value!, { y: 0, ease: 'none', duration: 1 }, 1)
    .to(sec2Col.value!, { width: `+=${sizeAddedX}px`, x: `+=${sizeAddedX / 2}px`, marginRight: `+=${marginExtraAnimado}px`, ease: 'none', duration: 1 }, 1)
    .to(sec2Border.value!, { height: `+=${sizeAddedY}px`, ease: 'none', duration: 1 }, 1)
    .to(sec2ColInner.value!, { height: `+=${sizeAddedY}px`, backgroundColor: '#E6E6E6', ease: 'none', duration: 1 }, 1)

    // FASE 2→3: pausa — el usuario lee el Texto 2

    // FASE 3→4: sale Texto 2, entra Texto 3 + cambia el logo
    .to(sec2Text2.value!, { y: '-120vh', ease: 'none', duration: 1 }, 3)
    .to(sec2Text3.value!, { y: 0, ease: 'none', duration: 1 }, 3)
    .to(logo2.value!, { x: '-90%', opacity: 0, ease: 'none', duration: 0.5 }, 3)
    .to(logo2b.value!, { clipPath: 'inset(0% 0% 0% 0%)', ease: 'none', duration: 0.5 }, 3.3)

    // FASE 4→5: pausa — el usuario lee el Texto 3

    // FASE 5→6: sale Texto 3, entra Texto 4 + cambia logo (logo-sky-marks → logo-tab)
    .to(sec2Text3.value!, { y: '-120vh', ease: 'none', duration: 1 }, 5)
    .to(sec2Text4.value!, { y: 0, ease: 'none', duration: 1 }, 5)
    .to(logo2b.value!, { clipPath: 'inset(50% 0% 50% 0%)', ease: 'none', duration: 0.5 }, 5)
    .to(logo3.value!, { clipPath: 'inset(0% 0% 0% 0%)', ease: 'none', duration: 0.5 }, 5.3)

    // FASE 6→7: pausa — el usuario lee el Texto 4
    .to({}, { duration: 1 }, 6)

  // ── SECCIÓN 3: líneas verticales ─────────────────────────────
  if (section3.value && sec3LineL.value && sec3LineR.value) {
    gsap.set(sec3LineL.value, { scaleY: 0, transformOrigin: 'top center' })
    gsap.set(sec3LineR.value, { scaleY: 0, transformOrigin: 'bottom center' })

    const colors = ['#0A77F3', '#07CB7D', '#FFC506', '#FF3F85']
    const pool = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%&*?0123456789'
    const scrambleTargets = [1, 6, 8]

    function runScramble() {
      if (!sec3Text1.value) return
      const text = 'Iconography'
      sec3Text1.value.innerHTML = text
        .split('')
        .map((ch, i) =>
          scrambleTargets.includes(i)
            ? `<span data-final="${ch}">${ch}</span>`
            : ch
        )
        .join('')

      const spans = sec3Text1.value.querySelectorAll('span') as NodeListOf<HTMLSpanElement>
      spans.forEach((span, i) => {
        const finalChar = span.dataset.final!
        const color = colors[Math.floor(Math.random() * colors.length)]
        const delayMs = i * 200
        const totalMs = 750
        const frameMs = 45
        setTimeout(() => {
          span.style.color = color
          let elapsed = 0
          const timer = setInterval(() => {
            elapsed += frameMs
            const progress = elapsed / totalMs
            if (progress >= 1) {
              clearInterval(timer)
              span.textContent = finalChar
            } else {
              span.textContent = Math.random() > progress * 0.75
                ? pool[Math.floor(Math.random() * pool.length)]
                : finalChar
            }
          }, frameMs)
        }, delayMs)
      })
    }

    // Scramble
    ScrollTrigger.create({
      trigger: section3.value,
      start: 'top 80%',
      end: 'bottom top',
      onEnter: runScramble,
      onEnterBack: runScramble,
      onLeave: runScramble,
      onLeaveBack: runScramble,
    })

    // Líneas
    ScrollTrigger.create({
      trigger: section3.value,
      start: 'top 80%',
      once: true,
      onEnter: () => {
        gsap.to(sec3LineL.value!, { scaleY: 1, ease: 'power2.out', duration: 1 })
        gsap.to(sec3LineR.value!, { scaleY: 1, ease: 'power2.out', duration: 1, delay: 0.1 })
      }
    })

    // Rocket
    gsap.set(sec3Rocket.value!, { scale: 0, opacity: 1 })
    gsap.set(sec3Nave.value!, { scale: 0, opacity: 1 })
    ScrollTrigger.create({
      trigger: section3.value,
      start: 'top 90%',
      onEnter: () => gsap.to([sec3Rocket.value!, sec3Nave.value!], { scale: 1, ease: 'back.out(1.7)', duration: 0.6 }),
      onLeaveBack: () => gsap.to([sec3Rocket.value!, sec3Nave.value!], { scale: 0, duration: 0.3 }),
      onLeave: () => gsap.to([sec3Rocket.value!, sec3Nave.value!], { scale: 0, duration: 0.3 }),
      onEnterBack: () => gsap.to([sec3Rocket.value!, sec3Nave.value!], { scale: 1, ease: 'back.out(1.7)', duration: 0.6 }),
    })

    // Card
    gsap.set(sec3Card.value!, { y: 150, opacity: 1 })
    ScrollTrigger.create({
      trigger: sec3Card.value!,
      start: 'top 90%',
      onEnter: () => gsap.to(sec3Card.value!, { y: 0, opacity: 1, ease: 'power2.out', duration: 0.8 }),
      onLeaveBack: () => gsap.to(sec3Card.value!, { y: 150, opacity: 0, duration: 0.4 }),
      onLeave: () => gsap.to(sec3Card.value!, { y: 150, opacity: 0, duration: 0.4 }),
      onEnterBack: () => gsap.to(sec3Card.value!, { y: 0, opacity: 1, ease: 'power2.out', duration: 2.8 }),
    })
  }
})
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
