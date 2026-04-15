<template>
  <div class="w-screen overflow-x-hidden bg-[#1d1d1d]">
    <div ref="section1"
      class="
        w-full h-screen
        flex justify-end
        bg-[#1d1d1d] 
        overflow-hidden
      "
    >
      <div
        class="
          relative
          flex flex-col items-end justify-center
          bg-[#1d1d1d]
          w-full h-full

          sm:w-[calc(100%-3rem)]
          overflow-hidden
        "
      >

        <!-- logoText -->
        <div ref="logoText"
          class="
            absolute left-4 z-20
            flex
            -top-3.5
            sm:left-36
            sm:top-1/2 sm:-translate-y-1/2
            transition-all duration-300
          "
        >
          <h1
            class="
              text-white
              mb-1 
              opacity-0

              text-[7.5rem]
              sm:text-[12.5rem]
              animate-fade-in delay-1000
            "
          >
          Logo
          </h1>
        </div>

        <div ref="linesGroup"
          class="absolute inset-0 flex flex-col items-end justify-center
          "
        >

          <!-- Main Horizontal Row -->
          <div
            ref="rowMain"
            class="
              relative
              flex items-center justify-end 
              h-[598px] w-full
              border-t border-b border-[#0A77F3]
              animate-draw-right delay-100
            "
          >
            <div
              ref="logo1"
              class="h-full mr-2 ml-2 mt-17 z-10 sm:mr-20 sm:ml-20 sm:mt-0
              "
            >
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
      class="
        relative overflow-hidden
        flex justify-end items-center
        min-h-screen w-full
        bg-[#f5f5f5]
      "
    >

      <!-- Línea vertical izquierda -->
      <div ref="sec2LineL" class="absolute top-0 bottom-0 w-[1px] bg-[#0A77F3] left-4 sm:left-48"></div>

      <!-- Línea vertical derecha (columna del logo) -->
      <div ref="sec2Col"
        class="
          absolute top-0 bottom-0 right-4
          flex items-center justify-center
          w-20 sm:w-40 md:w-[152px]
          border-l border-r border-[#0A77F3]

          sm:right-76.5
        "
      >
        <div ref="sec2ColInner" class="bg-[#E6E6E6] w-full h-[160px] flex items-center justify-center">
          <img ref="logo2" src="/icons/icon-sky.svg" alt="LOGO SKY" class="h-20 ml-16 sm:ml-0" />
          <img ref="logo2b" src="/imgs/logo-sky-marks.svg" alt="LOGO SKY MARKS" class="h-38 mb-2 absolute -ml-8 sm:ml-0" />
          <img ref="logo3" src="/imgs/logo-tab.svg" alt="LOGO TAB" class="h-80 mb-2 absolute -ml-6 sm:ml-0" />
        </div>
      </div>

      <!-- Borde horizontal central (animado) -->
      <div ref="sec2Border"
        class="absolute right-0 w-full sm:w-[calc(100%-3rem)] border-b border-t h-[160px] border-[#0A77F3] pointer-events-none">
      </div>

      <!-- Contenedor del texto (sin animación de clipPath) -->
      <div class="relative w-full sm:w-[calc(100%-3rem)] h-[100px] sm:h-[160px] flex items-center">
        <h2 ref="sec2Text1" class="text-3xl sm:text-6xl font-semibold text-[#1d1d1d] absolute -top-50 sm:top-0 left-4 sm:left-36">
          The logo stands as<br>the most recognizable<br>symbol of the brand.
        </h2>
        <div ref="sec2Text2" class="absolute left-4 -top-50 sm:top-0 sm:left-36 h-full flex flex-col items-start gap-2">
          <p class="text-sm font-normal text-[#0A77F3]">System</p>
          <h2 class="text-3xl sm:text-6xl font-semibold text-[#1d1d1d]">
            The Sky logo has two <br>expressions.
          </h2>
        </div>
        <div ref="sec2Text3"
          class="
            absolute
            flex flex-col
            items-start gap-2
            w-full h-full
            -top-50 left-6

            sm:top-0 sm:w-1/3
            sm:left-36
          "
        >
          <p class="text-sm font-normal text-[#f5f5f5] bg-[#0A77F3] rounded-full px-2.5 py-1">version A</p>
          <h2 class="text-3xl sm:text-6xl font-semibold text-[#1d1d1d] mb-75 sm:mb-0">
            The full logo
          </h2>
          <p class="text-sm font-light text-[#3D3D3D] pr-10 sm:pr-0">
            The Sky logo consists of two elements: the glyph and the
            wordmark. It is the primary mark used for high-level brand applications, including partnerships and video.
          </p>
        </div>
        <div ref="sec2Text4"
          class="
            absolute
            flex flex-col
            items-start gap-2
            w-full h-full
            -top-50 left-6
            
            sm:top-0 sm:w-1/3
            sm:left-36
          "
        >
          <p class="text-sm font-normal text-[#f5f5f5] bg-[#0A77F3] rounded-full px-2.5 py-1">version B</p>
          <h2 class="text-3xl sm:text-6xl font-semibold text-[#1d1d1d] mb-75 sm:mb-0">
            The tab
          </h2>
          <p class="text-sm font-light text-[#3D3D3D] pr-10 sm:pr-0">
            The Tab combines the glyph within a plane. It is typically
            accompanied by the wordmark elsewhere in the composition. Unlike the full logo, layouts originate from the
            Tab whenever it is used.
          </p>
        </div>
      </div>
    </section>
    
    <section ref="section3"
      class="
        relative
        flex justify-end items-center
        min-h-screen w-full bg-[#1d1d1d]
      "
    >
      <!-- Línea vertical izquierda -->
      <div ref="sec3LineL" class="absolute top-0 bottom-0 w-[1px] bg-[#0A77F3] left-4 sm:left-48"></div>
      <div ref="sec3LineR" class="absolute top-0 bottom-0 w-[1px] bg-[#0A77F3] right-4 sm:right-44"></div>
      <div
        class="
          relative
          flex items-center
          w-full h-[114px]
          border-b border-t border-[#0A77F3]

          sm:w-[calc(100%-3rem)]
        "
      >
        <h2 ref="sec3Text1"
          class="
            absolute left-4
            text-5xl font-semibold text-[#f5f5f5]

            sm:left-33  sm:text-[10rem]
          "
        >
          Iconography
        </h2>
        <img ref="sec3Nave"
          src="/icons/icon-nave.svg"
          alt="LOGO SKY"
          class="h-16 absolute left-4 sm:left-52 -top-30"
        />
        <div ref="sec3Rocket"
          class="
            absolute right-4 -top-50
            flex items-center justify-center 
            w-16 h-16
            p-2 
            bg-[#f5f5f5] rounded-2xl
            
            sm:right-82 sm:-top-80
          "
        >
          <img src="/icons/icon-rocket.svg" alt="LOGO SKY" class="h-10" />
        </div>
        <div ref="sec3Card"
          class="
            absolute right-4 top-52
            bg-[#EAEAEA]
            w-32  h-32
            rounded-3xl p-4
            shadow-lg
           
            sm:p-20 sm:w-92 sm:h-92  sm:right-44
          "
        >
          <img
            src="/icons/icon-img.svg"
            alt="LOGO SKY"
            class="h-full"
          />
        </div>
      </div>
    </section>

    <section ref="section4"
      class="
        relative
        flex justify-end items-start
        min-h-screen w-full 
        pt-30
        bg-[#f5f5f5]
      "
    >
      <!-- Línea vertical izquierda -->
      <div ref="sec4LineL" class="absolute top-0 bottom-0 w-[1px] bg-[#0A77F3] left-4 sm:left-48"></div>
      <div ref="sec4LineR" class="absolute top-0 bottom-0 w-[1px] bg-[#0A77F3] right-4 sm:right-44"></div>
      
      <div
        class="
          relative
          flex items-center
          w-full h-[124px]
          border-b border-t border-[#0A77F3]

          sm:w-[calc(100%-3rem)] sm:h-[83px]
        "
      >
        <div ref="sec4Text1"
          class="
            absolute left-4 -top-14
            flex flex-col items-start
            w-full
            gap-8
            
            sm:left-36  sm:-top-2
          "
        >
          <h2 class="text-2xl font-semibold text-[#1d1d1d] pr-4 sm:pr-0 sm:text-5xl">
            Effective icons are clear,<br>intuitive, and easy to scale.
          </h2>
          <p class="text-sm font-light text-[#3D3D3D] pr-8 sm:text-md sm:pr-0">
            Our iconography is rooted in these core elements, then enhanced through scale, contrast,<br> and style to
            communicate clearly and express character. </p>
        </div>

        <div
          class="
            absolute right-0 -bottom-40
            w-full h-[80px]
            border-b border-t border-[#0A77F3]

            sm:-bottom-80 sm:h-[140px]
          "
        >
          <div
            class="
              absolute -top-10
              flex items-center justify-between
              w-full
              border-t border-[#0A77F3]
              pl-4 pr-4

              sm:pl-36 sm:pr-46
            "
          >
            <p class="text-sm font-regular text-[#0a77f3] px-2.5 mt-3">
              Files Icons
            </p>
            <p class="text-sm font-regular text-[#0a77f3] px-2.5 mt-3">
              120 x 120px
            </p>
          </div>
          <div
            class="
              absolute right-4 left-4 top-0
              h-full px-4
              bg-[#D9D9D9]/30
              border-l border-r border-[#0A77F3]
              overflow-hidden
              
              sm:left-36 sm:right-44 sm:px-12
            "
          >
            <div class="flex items-center justify-start gap-8 sm:gap-12 animate-conveyor-mobile h-full sm:justify-between sm:gap-8">
              <img src="/imgs/spot-sky/icon-file.svg" alt="LOGO SKY" class="h-10 sm:h-16"/>
              <img src="/imgs/spot-sky/icon-png.svg" alt="LOGO SKY" class="h-10 sm:h-16"/>
              <img src="/imgs/spot-sky/icon-jpg.svg" alt="LOGO SKY" class="h-10 sm:h-16" />
              <img src="/imgs/spot-sky/icon-svg.svg" alt="LOGO SKY" class="h-10 sm:h-16" />
              <img src="/imgs/spot-sky/icon-mp3.svg" alt="LOGO SKY" class="h-10 sm:h-16" />
              <img src="/imgs/spot-sky/icon-video.svg" alt="LOGO SKY" class="h-10 sm:h-16" />
              <img src="/imgs/spot-sky/icon-zip.svg" alt="LOGO SKY" class="h-10 sm:h-16" />
              <img src="/imgs/spot-sky/icon-pdf.svg" alt="LOGO SKY" class="h-10 sm:h-16" />
              <img src="/imgs/spot-sky/icon-doc.svg" alt="LOGO SKY" class="h-10 sm:h-16" />
              <img src="/imgs/spot-sky/icon-ppt.svg" alt="LOGO SKY" class="h-10 sm:h-16" />
              <img src="/imgs/spot-sky/icon-xls.svg" alt="LOGO SKY" class="h-10 sm:h-16" />
              <!-- Duplicate for seamless loop -->
              <img src="/imgs/spot-sky/icon-file.svg" alt="LOGO SKY" class="h-10 sm:h-16"/>
              <img src="/imgs/spot-sky/icon-png.svg" alt="LOGO SKY" class="h-10 sm:h-16"/>
              <img src="/imgs/spot-sky/icon-jpg.svg" alt="LOGO SKY" class="h-10 sm:h-16" />
              <img src="/imgs/spot-sky/icon-svg.svg" alt="LOGO SKY" class="h-10 sm:h-16" />
              <img src="/imgs/spot-sky/icon-mp3.svg" alt="LOGO SKY" class="h-10 sm:h-16" />
              <img src="/imgs/spot-sky/icon-video.svg" alt="LOGO SKY" class="h-10 sm:h-16" />
              <img src="/imgs/spot-sky/icon-zip.svg" alt="LOGO SKY" class="h-10 sm:h-16" />
              <img src="/imgs/spot-sky/icon-pdf.svg" alt="LOGO SKY" class="h-10 sm:h-16" />
              <img src="/imgs/spot-sky/icon-doc.svg" alt="LOGO SKY" class="h-10 sm:h-16" />
              <img src="/imgs/spot-sky/icon-ppt.svg" alt="LOGO SKY" class="h-10 sm:h-16" />
              <img src="/imgs/spot-sky/icon-xls.svg" alt="LOGO SKY" class="h-10 sm:h-16" />
            </div>
          </div>
        </div>

        <div
          class="
            absolute right-0 -bottom-65
            w-full h-[64px]
            border-b border-t border-[#0A77F3]
            
            sm:h-[120px] sm:-bottom-120 
          "
        >
          <div
            class="
              absolute -top-10
              flex items-center justify-between
              w-full pl-4  pr-4
              
              sm:pl-36 sm:pr-46
            "
          >
            <p class="text-sm font-regular text-[#0a77f3] px-2.5 mt-3">
              Spot Icons
            </p>
            <p class="text-sm font-regular text-[#0a77f3] px-2.5 mt-3">
              64 x 64px
            </p>
          </div>
          <div
            class="
              absolute right-4 left-4 top-0
              flex items-center justify-between
              h-full px-4 gap-8
              bg-[#D9D9D9]/30
              border-l border-r border-[#0A77F3]
              overflow-hidden
              
              sm:left-36 sm:right-44 sm:px-12
            "
          >
            <div class="flex items-center justify-start gap-10 animate-conveyor h-full sm:justify-between sm:gap-22">
              <img src="/imgs/spot-sky/icon-cloud.svg" alt="LOGO SKY" class="h-8 sm:h-16" />
              <img src="/imgs/spot-sky/icon-star.svg" alt="LOGO SKY" class="h-8 sm:h-16" />
              <img src="/imgs/spot-sky/icon-sound.svg" alt="LOGO SKY" class="h-8 sm:h-16" />
              <img src="/imgs/spot-sky/icon-eye.svg" alt="LOGO SKY" class="h-8 sm:h-16" />
              <img src="/imgs/spot-sky/icon-mail.svg" alt="LOGO SKY" class="h-8 sm:h-16" />
              <img src="/imgs/spot-sky/icon-folder.svg" alt="LOGO SKY" class="h-8 sm:h-16" />
              <img src="/imgs/spot-sky/icon-isla2.svg" alt="LOGO SKY" class="h-8 sm:h-16" />
              <img src="/imgs/spot-sky/icon-isla.svg" alt="LOGO SKY" class="h-8 sm:h-16" />
              <img src="/imgs/spot-sky/icon-lock.svg" alt="LOGO SKY" class="h-8 sm:h-16" />
              <img src="/imgs/spot-sky/icon-sun.svg" alt="LOGO SKY" class="h-8 sm:h-16" />
              <img src="/imgs/spot-sky/icon-moon.svg" alt="LOGO SKY" class="h-8 sm:h-16" />
              <img src="/imgs/spot-sky/icon-warning.svg" alt="LOGO SKY" class="h-8 sm:h-16" />
              <!-- Duplicate for seamless loop -->
              <img src="/imgs/spot-sky/icon-cloud.svg" alt="LOGO SKY" class="h-8 sm:h-16" />
              <img src="/imgs/spot-sky/icon-star.svg" alt="LOGO SKY" class="h-8 sm:h-16" />
              <img src="/imgs/spot-sky/icon-sound.svg" alt="LOGO SKY" class="h-8 sm:h-16" />
              <img src="/imgs/spot-sky/icon-eye.svg" alt="LOGO SKY" class="h-8 sm:h-16" />
              <img src="/imgs/spot-sky/icon-mail.svg" alt="LOGO SKY" class="h-8 sm:h-16" />
              <img src="/imgs/spot-sky/icon-folder.svg" alt="LOGO SKY" class="h-8 sm:h-16" />
              <img src="/imgs/spot-sky/icon-isla2.svg" alt="LOGO SKY" class="h-8 sm:h-16" />
              <img src="/imgs/spot-sky/icon-isla.svg" alt="LOGO SKY" class="h-8 sm:h-16" />
              <img src="/imgs/spot-sky/icon-lock.svg" alt="LOGO SKY" class="h-8 sm:h-16" />
              <img src="/imgs/spot-sky/icon-sun.svg" alt="LOGO SKY" class="h-8 sm:h-16" />
              <img src="/imgs/spot-sky/icon-moon.svg" alt="LOGO SKY" class="h-8 sm:h-16" />
              <img src="/imgs/spot-sky/icon-warning.svg" alt="LOGO SKY" class="h-8 sm:h-16" />
            </div>
          </div>
        </div>

        <div
          class="
            absolute right-0 -bottom-90
            w-full h-[60px] 
            border-b border-t border-[#0A77F3]

            sm:h-[80px] sm:-bottom-150
          "
        >
          <div class="
            absolute -top-10
            flex items-center justify-between
            w-full pl-4  pr-4
              
            sm:pl-36 sm:pr-46"
          >
            <p class="text-sm font-regular text-[#0a77f3] px-2.5 mt-3">
              UI Icons
            </p>
            <p class="text-sm font-regular text-[#0a77f3] px-2.5 mt-3">
              24 x 24px
            </p>
          </div>
          <div
            class="
              absolute right-4 left-4 top-0
              flex items-center justify-between
              h-full px-2
              bg-[#D9D9D9]/30 overflow-hidden
              border-l border-r border-[#0A77F3]
              
              sm:left-36 sm:right-44 sm:px-12
            "
          >
            <div class="flex items-center gap-4 sm:gap-8 animate-conveyor w-full">
              <span class="flex items-center bg-[#f5f5f5] gap-2 px-2 py-1 sm:py-2 sm-px-3 rounded-2xl whitespace-nowrap shrink-0">
                <img src="/imgs/spot-sky/icon-recover.svg" alt="LOGO SKY" class="h-5 sm:h-6" />
                <h2 class=" text-sm sm:text-md mt-1 font-medium text-[#1d1d1d]">Recover</h2>
              </span>
              <span class="flex flex-row items-center gap-2 bg-[#f5f5f5] px-2 py-1 sm:py-2 sm-px-3 rounded-2xl whitespace-nowrap shrink-0">
                <img src="/imgs/spot-sky/icon-delete.svg" alt="LOGO SKY" class="h-5 sm:h-6" />
                <h2 class="text-sm sm:text-md mt-1 font-medium text-[#1d1d1d]">Delete</h2>
              </span>
              <span class="flex flex-row items-center gap-2 bg-[#f5f5f5] px-2 py-1 sm:py-2 sm-px-3 rounded-2xl whitespace-nowrap shrink-0">
                <img src="/imgs/spot-sky/icon-edit.svg" alt="LOGO SKY" class="h-5 sm:h-6" />
                <h2 class="text-sm sm:text-md mt-1 font-medium text-[#1d1d1d]">Rename</h2>
              </span>
              <span class="flex flex-row items-center gap-2 bg-[#f5f5f5] px-2 py-1 sm:py-2 sm-px-3 rounded-2xl whitespace-nowrap shrink-0">
                <img src="/imgs/spot-sky/icon-clip.svg" alt="LOGO SKY" class="h-5 sm:h-6" />
                <h2 class="text-sm sm:text-md mt-1 font-medium text-[#1d1d1d]">Copy link</h2>
              </span>
              <span class="flex flex-row items-center gap-2 bg-[#f5f5f5] px-2 py-1 sm:py-2 sm-px-3 rounded-2xl whitespace-nowrap shrink-0">
                <img src="/imgs/spot-sky/icon-folder.svg" alt="LOGO SKY" class="h-5 sm:h-6" />
                <h2 class="text-sm sm:text-md mt-1 font-medium text-[#1d1d1d]">New folder</h2>
              </span>
              <span class="flex flex-row items-center gap-2 bg-[#f5f5f5] px-2 py-1 sm:py-2 sm-px-3 rounded-2xl whitespace-nowrap shrink-0">
                <img src="/imgs/spot-sky/icon-star.svg" alt="LOGO SKY" class="h-5 sm:h-6" />
                <h2 class="text-sm sm:text-md mt-1 font-medium text-[#1d1d1d]">Favorite</h2>
              </span>
              <span class="flex flex-row items-center gap-2 bg-[#f5f5f5] px-2 py-1 sm:py-2 sm-px-3 rounded-2xl whitespace-nowrap shrink-0 ">
                <img src="/imgs/spot-sky/icon-folder2.svg" alt="LOGO SKY" class="h-5 sm:h-6" />
                <h2 class="text-sm sm:text-md mt-1 font-medium text-[#1d1d1d]">Move to folder</h2>
              </span>
              <span class="flex flex-row items-center gap-2 bg-[#f5f5f5] px-2 py-1 sm:py-2 sm-px-3 rounded-2xl whitespace-nowrap shrink-0">
                <img src="/imgs/spot-sky/icon-eye.svg" alt="LOGO SKY" class="h-5 sm:h-6" />
                <h2 class="text-sm sm:text-md mt-1 font-medium text-[#1d1d1d]">Preview</h2>
              </span>
              <span class="flex flex-row items-center gap-2 bg-[#f5f5f5] px-2 py-1 sm:py-2 sm-px-3 rounded-2xl whitespace-nowrap shrink-0">
                <img src="/imgs/spot-sky/icon-folder2.svg" alt="LOGO SKY" class="h-5 sm:h-6" />
                <h2 class="text-sm sm:text-md mt-1 font-medium text-[#1d1d1d]">Upload</h2>
              </span>
              <span class="flex flex-row items-center gap-2 bg-[#f5f5f5] px-2 py-1 sm:py-2 sm-px-3 rounded-2xl whitespace-nowrap shrink-0 ">
                <img src="/imgs/spot-sky/icon-download.svg" alt="LOGO SKY" class="h-3 sm:h-4" />
                <h2 class="text-sm sm:text-md mt-1 font-medium text-[#1d1d1d]">Download</h2>
              </span>
              <!-- Duplicate for seamless loop -->
              <span class="flex items-center bg-[#f5f5f5] px-2 py-1 sm:py-2 sm-px-3 rounded-2xl whitespace-nowrap shrink-0">
                <img src="/imgs/spot-sky/icon-recover.svg" alt="LOGO SKY" class="h-5 sm:h-6" />
                <h2 class=" text-sm sm:text-md mt-1 font-medium text-[#1d1d1d]">Recover</h2>
              </span>
              <span class="flex flex-row items-center gap-2 bg-[#f5f5f5] px-2 py-1 sm:py-2 sm-px-3 rounded-2xl whitespace-nowrap shrink-0">
                <img src="/imgs/spot-sky/icon-delete.svg" alt="LOGO SKY" class="h-5 sm:h-6" />
                <h2 class="text-sm sm:text-md mt-1 font-medium text-[#1d1d1d]">Delete</h2>
              </span>
              <span class="flex flex-row items-center gap-2 bg-[#f5f5f5] px-2 py-1 sm:py-2 sm-px-3 rounded-2xl whitespace-nowrap shrink-0">
                <img src="/imgs/spot-sky/icon-edit.svg" alt="LOGO SKY" class="h-5 sm:h-6" />
                <h2 class="text-sm sm:text-md mt-1 font-medium text-[#1d1d1d]">Rename</h2>
              </span>
              <span class="flex flex-row items-center gap-2 bg-[#f5f5f5] px-2 py-1 sm:py-2 sm-px-3 rounded-2xl whitespace-nowrap shrink-0">
                <img src="/imgs/spot-sky/icon-clip.svg" alt="LOGO SKY" class="h-5 sm:h-6" />
                <h2 class="text-sm sm:text-md mt-1 font-medium text-[#1d1d1d]">Copy link</h2>
              </span>
              <span class="flex flex-row items-center gap-2 bg-[#f5f5f5] px-2 py-1 sm:py-2 sm-px-3 rounded-2xl whitespace-nowrap shrink-0">
                <img src="/imgs/spot-sky/icon-folder.svg" alt="LOGO SKY" class="h-5 sm:h-6" />
                <h2 class="text-sm sm:text-md mt-1 font-medium text-[#1d1d1d]">New folder</h2>
              </span>
              <span class="flex flex-row items-center gap-2 bg-[#f5f5f5] px-2 py-1 sm:py-2 sm-px-3 rounded-2xl whitespace-nowrap shrink-0">
                <img src="/imgs/spot-sky/icon-star.svg" alt="LOGO SKY" class="h-5 sm:h-6" />
                <h2 class="text-sm sm:text-md mt-1 font-medium text-[#1d1d1d]">Favorite</h2>
              </span>
              <span class="flex flex-row items-center gap-2 bg-[#f5f5f5] px-2 py-1 sm:py-2 sm-px-3 rounded-2xl whitespace-nowrap shrink-0 ">
                <img src="/imgs/spot-sky/icon-folder2.svg" alt="LOGO SKY" class="h-5 sm:h-6" />
                <h2 class="text-sm sm:text-md mt-1 font-medium text-[#1d1d1d]">Move to folder</h2>
              </span>
              <span class="flex flex-row items-center gap-2 bg-[#f5f5f5] px-2 py-1 sm:py-2 sm-px-3 rounded-2xl whitespace-nowrap shrink-0">
                <img src="/imgs/spot-sky/icon-eye.svg" alt="LOGO SKY" class="h-5 sm:h-6" />
                <h2 class="text-sm sm:text-md mt-1 font-medium text-[#1d1d1d]">Preview</h2>
              </span>
              <span class="flex flex-row items-center gap-2 bg-[#f5f5f5] px-2 py-1 sm:py-2 sm-px-3 rounded-2xl whitespace-nowrap shrink-0">
                <img src="/imgs/spot-sky/icon-folder2.svg" alt="LOGO SKY" class="h-5 sm:h-6" />
                <h2 class="text-sm sm:text-md mt-1 font-medium text-[#1d1d1d]">Upload</h2>
              </span>
              <span class="flex flex-row items-center gap-2 bg-[#f5f5f5] px-2 py-1 sm:py-2 sm-px-3 rounded-2xl whitespace-nowrap shrink-0 ">
                <img src="/imgs/spot-sky/icon-download.svg" alt="LOGO SKY" class="h-3 sm:h-4" />
                <h2 class="text-sm sm:text-md mt-1 font-medium text-[#1d1d1d]">Download</h2>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section ref="section5"
      class="
         relative
         flex justify-end items-start
         min-h-screen w-full
      "
    >
       <!-- Línea vertical izquierda -->
       <div ref="sec4LineL" class="absolute top-0 bottom-0 w-[1px] bg-[#0A77F3] left-4 sm:left-48"></div>
      <div ref="sec4LineL" class="absolute top-0 bottom-0 w-[1px] bg-[#0A77F3] right-4 sm:right-44"></div>
      
      <div
        class="
        relative
        flex items-center
        w-full h-[84px]
        pt-30
        border-t border-[#0A77F3]
        
        sm:w-[calc(100%-3rem)]
        "
      >
        <div ref="sec4Text1"
          class="
            absolute left-4 top-10
            flex flex-col items-start
            w-full pb-26 gap-8
            
            sm:left-36 sm:top-30 sm:pb-0
          "
        >
          <h2 class="text-3xl sm:text-5xl font-semibold text-[#f5f5f5] border-b border-[#0A77F3] w-full">
              Icons visually support<br>our brand across surfaces
            </h2>
        </div>
        <div
          class="
            absolute right-0 top-110 z-10
            flex flex-col
            items-center justify-center
            w-full h-full gap-4 
            
            sm:flex-row sm:gap-20 sm:top-140
          "
        >
          <img src="/imgs/screen.png" alt="LOGO SKY" class="w-[330px] sm:w-[600px] rounded-xl" />
          <img src="/imgs/screen2.png" alt="LOGO SKY" class="w-[330px] sm:w-[600px]" />
        </div>
      </div>
    </section>
    
    <section ref="section6"
      class="
      relative
      flex justify-end items-start
      min-h-screen w-full 
      bg-[#1d1d1d]
      "
    >
      <div ref="sec4LineL" class="absolute top-0 bottom-0 w-[1px] bg-[#0A77F3] left-4 sm:left-48 h-30"></div>
      <div ref="sec4LineL" class="absolute top-0 bottom-0 w-[1px] bg-[#0A77F3] right-4 sm:right-44 h-30"></div>
      
      <div
        class="
          relative
          flex flex-col
          items-center
          h-screen w-full
          mt-28 ml-0 pt-26
          border-t border-[#0A77F3]
          
          sm:ml-12 sm:mt-30 sm:pt-0
          sm:flex-row
          sm:w-[calc(100%-3rem)]
        "
      >
        <div ref="sec5Text1" class="flex flex-col gap-8 w-full pl-4 sm:pl-48">
        <h2 class="text-3xl sm:text-5xl font-semibold text-[#f5f5f5] w-auto text-left">
            Planes are a core part <br>of the visual identity
        </h2>
        <p class="text-md font-light text-[#a3a3a3]">
            They structure content and maintain hierarchy, clarity, and cohesion<br> across platforms and devices.</p>
        </div>
        <div
          class="
            absolute right-0 top-50 z-10
            flex items-center justify-center
            w-full h-full
            gap-4 px-4

            sm:gap-20 sm:pr-36 sm:w-1/2 sm:top-10
          "
        >
          <div :class="[
            'relative bg-[#f5f5f5] rounded-2xl flex sm:p-4 p-2 transition-all duration-500 ease-in-out',
            isHorizontal ? 'flex-row w-full sm:w-[900px] h-auto sm:h-[420px]' : 'flex-col w-full sm:w-[600px] h-auto items-center gap-8'
          ]">
            <img src="/imgs/logo-tab2.svg" alt="LOGO SKY" class="absolute top-0 left-4 sm:left-8 w-10 sm:w-auto sm:h-auto " />
            
            <img src="/imgs/menu.svg" alt="LOGO SKY" :class="[
              'absolute w-auto h-auto transition-all duration-500 ease-in-out',
              isHorizontal ? 'bottom-4 sm:bottom-8 left-4 sm:left-8' : 'top-16 sm:top-60 right-4 sm:right-10'
            ]" />
            <div :class="[
              'flex items-center justify-center overflow-hidden rounded-xl transition-all duration-500 ease-in-out',
              isHorizontal ? 'w-1/2 h-full' : 'w-full h-auto'
            ]">
              <img src="/imgs/sauce.png" alt="LOGO SKY" :class="[
                'transition-all duration-500 ease-in-out',
                isHorizontal ? 'w-full h-full object-cover' : 'w-full h-auto object-contain'
              ]" />
            </div>

            <div :class="[
              'flex flex-col gap-4 transition-all duration-500 ease-in-out',
              isHorizontal ? 'w-1/2 justify-center px-4 sm:px-10' : 'w-full justify-center'
            ]">
              <h1 :class="['text-2xl sm:text-5xl text-[#1d1d1d] transition-all duration-500 ease-in-out', isHorizontal ? 'text-center mt-8 sm:mt-24 mx-auto font-bold' : 'text-center font-semibold mt-4 sm:mt-10']">Keep what matters safe.</h1>
              <h1 :class="['text-sm sm:text-lg font-semibold text-[#0A77F3] transition-all duration-500 ease-in-out', isHorizontal ? 'text-center mb-4 mt-auto' : 'text-center mb-4 mt-4 sm:mt-12']">sky.digiapps.com.co</h1>
            </div>
            <div class="absolute -top-14 sm:top-6 right-2 sm:-right-18 flex flex-row sm:flex-col gap-2 z-20 sm:p-2 p-1 rounded-2xl bg-[#f5f5f5]">
              <button
                @click="isHorizontal = true"
                :title="'Cambiar a horizontal'"
                aria-label="Orientación horizontal"
                :class="[
                  'p-2 rounded-xl hover:bg-[#f5f5f5]/80 transition-colors',
                  isHorizontal ? 'ring-2 ring-[#0A77F3] bg-[#0A77F3]/10' : 'bg-[#f5f5f5]'
                ]"
              >
                <img :src="iconHorizontal" alt="Horizontal" class="w-6 h-6 sm:w-8 sm:h-8" />
              </button>
              <button
                @click="isHorizontal = false"
                :title="'Cambiar a vertical'"
                aria-label="Orientación vertical"
                :class="[
                  'p-2 rounded-xl hover:bg-[#f5f5f5]/80 transition-colors',
                  !isHorizontal ? 'ring-2 ring-[#0A77F3] bg-[#0A77F3]/10' : 'bg-[#f5f5f5]'
                ]"
              >
                <img :src="iconVertical" alt="Vertical" class="w-6 h-6 sm:w-8 sm:h-8" />
              </button>
            </div>
          </div>
        </div>  
      </div>
    </section>
    <section ref="section7"
      class="
      relative
      flex flex-col justify-center items-center
      min-h-screen w-full pt-30
      bg-[#1d1d1d]
      "
    >
      <div class="container mx-12 flex flex-col items-center gap-16 sm:gap-40">
      <div class="text-xs sm:text-lg font-light text-[#f5f5f5]/60 w-2/3 mx-auto flex flex-col gap-4">
        <span>
          Sky is a personal project with an ambitious vision, created as the foundation for something much larger. It began as an exploration of how an idea can evolve into a complete digital product.
        </span>
        <span>
          I was responsible for the product design, visual identity, logo, and interface, as well as the front-end development. This involved defining the structure of the system, shaping the user experience, and translating the design into a functional interface.
        </span>
        <span>
          The project reflects my approach to building products by combining design and development to create clear, scalable, and cohesive digital experiences.
        </span>
      </div>
      <a
        href="https://sky.digiapps.com.co/"
        target="_blank"
        class="text-lg font-medium text-[#f5f5f5] hover:text-[#0A77F3] hover:underline transition-colors">
        sky.digiapps.com.co
      </a>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import iconHorizontal from '/icons/icon-horizontal.svg'
import iconVertical from '/icons/icon-vertical.svg'

gsap.registerPlugin(ScrollTrigger)

const isHorizontal = ref(false)

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
const section5 = ref<HTMLElement | null>(null)
const section6 = ref<HTMLElement | null>(null)
const section7 = ref<HTMLElement | null>(null)

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
  gsap.set(logo3.value!, { opacity: 1, clipPath: 'inset(40% 0% 60% 0%)' })

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
      end: '+=350%',
      scrub: 1,
      snap: {
        snapTo: [0, 1 / 7, 2 / 7, 3 / 7, 4 / 7, 5 / 7, 6 / 7, 1],
        duration: { min: 0.3, max: 1.2 },
        ease: 'power2.inOut',
      },
      pin: true,
    }
  })
    .to(sec2Text1.value!, { y: '-120vh', ease: 'none', duration: 1 }, 1)
    .to(sec2Text2.value!, { y: 0, ease: 'none', duration: 1 }, 1)
    .to(sec2Col.value!, { width: `+=${sizeAddedX}px`, x: `+=${sizeAddedX / 2}px`, marginRight: `+=${marginExtraAnimado}px`, ease: 'none', duration: 1 }, 1)
    .to(sec2Border.value!, { height: `+=${sizeAddedY}px`, ease: 'none', duration: 1 }, 1)
    .to(sec2ColInner.value!, { height: `+=${sizeAddedY}px`, backgroundColor: '#E6E6E6', ease: 'none', duration: 1 }, 1)
    .to(sec2Text2.value!, { y: '-120vh', ease: 'none', duration: 1 }, 3)
    .to(sec2Text3.value!, { y: 0, ease: 'none', duration: 1 }, 3)
    .to(logo2.value!, { x: '-90%', opacity: 0, ease: 'none', duration: 0.5 }, 3)
    .to(logo2b.value!, { clipPath: 'inset(0% 0% 0% 0%)', ease: 'none', duration: 0.5 }, 3.3)
    .to(sec2Text3.value!, { y: '-120vh', ease: 'none', duration: 1 }, 5)
    .to(sec2Text4.value!, { y: 0, ease: 'none', duration: 1 }, 5)
    .to(logo2b.value!, { clipPath: 'inset(50% 0% 50% 0%)', ease: 'none', duration: 0.5 }, 5)
    .to(logo3.value!, { clipPath: 'inset(0% 0% 0% 0%)', ease: 'none', duration: 0.5 }, 5.3)
    .to({}, { duration: 1 }, 6)

  // ── SECCIÓN 3 ─────────────────────────────────────────────
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

    ScrollTrigger.create({
      trigger: section3.value,
      start: 'top 80%',
      end: 'bottom top',
      onEnter: runScramble,
      onEnterBack: runScramble,
      onLeave: runScramble,
      onLeaveBack: runScramble,
    })

    ScrollTrigger.create({
      trigger: section3.value,
      start: 'top 80%',
      once: true,
      onEnter: () => {
        gsap.to(sec3LineL.value!, { scaleY: 1, ease: 'power2.out', duration: 1 })
        gsap.to(sec3LineR.value!, { scaleY: 1, ease: 'power2.out', duration: 1, delay: 0.1 })
      }
    })

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

  // ── SECCIÓN 5 ──────────────────────────────────────────────
  if (section5.value) {
    const sec5Images = section5.value.querySelectorAll('img[src*="screen"]')
    if (sec5Images.length) {
      gsap.set(Array.from(sec5Images), { y: 80, opacity: 0 })
      ScrollTrigger.create({
        trigger: section5.value,
        start: 'top 75%',
        onEnter: () => gsap.to(Array.from(sec5Images), { y: 0, opacity: 1, ease: 'power2.out', duration: 0.9, stagger: 0.15 }),
        onLeaveBack: () => gsap.to(Array.from(sec5Images), { y: 80, opacity: 0, duration: 0.4 }),
        onEnterBack: () => gsap.to(Array.from(sec5Images), { y: 0, opacity: 1, ease: 'power2.out', duration: 0.9, stagger: 0.15 }),
      })
    }

    const sec5Title = section5.value.querySelector('h2')
    if (sec5Title) {
      gsap.set(sec5Title, { y: 40, opacity: 0 })
      ScrollTrigger.create({
        trigger: section5.value,
        start: 'top 85%',
        onEnter: () => gsap.to(sec5Title, { y: 0, opacity: 1, ease: 'power2.out', duration: 0.7 }),
        onLeaveBack: () => gsap.to(sec5Title, { y: 40, opacity: 0, duration: 0.3 }),
        onEnterBack: () => gsap.to(sec5Title, { y: 0, opacity: 1, ease: 'power2.out', duration: 0.7 }),
      })
    }
  }

  // ── SECCIÓN 6 ──────────────────────────────────────────────
  if (section6.value) {
    const sec6Card = section6.value.querySelector('.rounded-2xl') as HTMLElement | null
    if (sec6Card) {
      gsap.set(sec6Card, { y: 60, opacity: 0 })
      ScrollTrigger.create({
        trigger: section6.value,
        start: 'top 70%',
        onEnter: () => gsap.to(sec6Card, { y: 0, opacity: 1, ease: 'power3.out', duration: 0.9 }),
        onLeaveBack: () => gsap.to(sec6Card, { y: 60, opacity: 0, duration: 0.4 }),
        onEnterBack: () => gsap.to(sec6Card, { y: 0, opacity: 1, ease: 'power3.out', duration: 0.9 }),
      })
    }

    const sec6TextBlock = section6.value.querySelector('h2')?.closest('div') as HTMLElement | null
    if (sec6TextBlock) {
      gsap.set(sec6TextBlock, { x: -40, opacity: 0 })
      ScrollTrigger.create({
        trigger: section6.value,
        start: 'top 80%',
        onEnter: () => gsap.to(sec6TextBlock, { x: 0, opacity: 1, ease: 'power2.out', duration: 0.8 }),
        onLeaveBack: () => gsap.to(sec6TextBlock, { x: -40, opacity: 0, duration: 0.3 }),
        onEnterBack: () => gsap.to(sec6TextBlock, { x: 0, opacity: 1, ease: 'power2.out', duration: 0.8 }),
      })
    }
  }

  // ── SECCIÓN 7 ──────────────────────────────────────────────
  if (section7.value) {
    const sec7Paragraphs = section7.value.querySelectorAll('span')
    const sec7Link = section7.value.querySelector('a')

    if (sec7Paragraphs.length) {
      gsap.set(Array.from(sec7Paragraphs), { y: 30, opacity: 0 })
      ScrollTrigger.create({
        trigger: section7.value,
        start: 'top 80%',
        onEnter: () => gsap.to(Array.from(sec7Paragraphs), { y: 0, opacity: 1, ease: 'power2.out', duration: 0.7, stagger: 0.18 }),
        onLeaveBack: () => gsap.to(Array.from(sec7Paragraphs), { y: 30, opacity: 0, duration: 0.3 }),
        onEnterBack: () => gsap.to(Array.from(sec7Paragraphs), { y: 0, opacity: 1, ease: 'power2.out', duration: 0.7, stagger: 0.18 }),
      })
    }

    if (sec7Link) {
      gsap.set(sec7Link, { opacity: 0, y: 20 })
      ScrollTrigger.create({
        trigger: section7.value,
        start: 'top 75%',
        onEnter: () => gsap.to(sec7Link, { opacity: 1, y: 0, ease: 'power2.out', duration: 0.6, delay: 0.5 }),
        onLeaveBack: () => gsap.to(sec7Link, { opacity: 0, y: 20, duration: 0.3 }),
        onEnterBack: () => gsap.to(sec7Link, { opacity: 1, y: 0, ease: 'power2.out', duration: 0.6, delay: 0.3 }),
      })
    }
  }

}) // ← cierre de onMounted
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

.animate-conveyor {
  animation: conveyor 30s linear infinite;
}

.animate-conveyor-mobile {
  animation: conveyor 30s linear infinite;
}

@media (max-width: 640px) {
  .animate-conveyor {
    animation: conveyor 20s linear infinite;
  }
}

@keyframes conveyor {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
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
