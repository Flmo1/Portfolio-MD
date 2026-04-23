<script setup>
import portrait from '../assets/images/portrait.png'
</script>

<template>
  <section id="profile" class="grid grid-cols-1 md:grid-cols-2 md:h-[500px] border-b-[3px] border-darkteal -mx-[2vw]">
    
    <!-- Left: panel de texto (siempre visible) -->
    <div class="bg-darkteal text-cream p-6 md:p-10 flex flex-col justify-between md:min-h-0 min-h-[400px]">
      <div>
        <h1 class="font-tech text-4xl md:text-6xl mb-4 md:mb-6 leading-tight">
          Junior Front-end<br>Developer.
        </h1>
        <p class="font-tech text-base md:text-lg max-w-md leading-relaxed">
          Moises is a junior front-end developer from Colombia. 
          He has developed skills within the future of Web development. 
          He has strong competences with CSS, HTML, JS and VUE and can 
          work proficiently with modern AI prompting.
        </p>
      </div>
      
<a 
  href="/moises-florez-cv.pdf" 
  download="Moises_Florez_CV.pdf"
  class="mt-6 md:mt-8 border border-cream px-6 md:px-8 py-3 md:py-4 font-tech-mono text-cream w-fit hover:bg-cream hover:text-darkteal transition"
>
  DOWNLOAD // CV
</a>
    </div>
    
  
    
  <!-- picture in desktop -->
    <div class="hidden md:flex bg-rust overflow-hidden items-center justify-center">
      <img 
        :src="portrait" 
        alt="Moises Florez" 
        class="w-80 h-full object-cover object-center" 
      />
    </div>
    
    <!-- mobile only decorative stuff -->
    <div class="md:hidden bg-rust p-6 relative overflow-hidden min-h-[300px]">
      
      <!-- Scanlines -->
      <div 
        class="absolute inset-0 pointer-events-none opacity-20"
        style="background-image: repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(30, 58, 58, 0.4) 2px, rgba(30, 58, 58, 0.4) 3px);"
      ></div>
      
      <!-- Corner brackets -->
      <div class="absolute top-3 left-3 w-6 h-6 border-t-[3px] border-l-[3px] border-cream pointer-events-none"></div>
      <div class="absolute top-3 right-3 w-6 h-6 border-t-[3px] border-r-[3px] border-cream pointer-events-none"></div>
      <div class="absolute bottom-3 left-3 w-6 h-6 border-b-[3px] border-l-[3px] border-cream pointer-events-none"></div>
      <div class="absolute bottom-3 right-3 w-6 h-6 border-b-[3px] border-r-[3px] border-cream pointer-events-none"></div>
      
      <div class="relative h-full flex flex-col justify-between">
        
        <!--  status effect thingy -->
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2">
            <span class="w-2 h-2 bg-cream animate-pulse"></span>
            <span class="font-tech-mono text-cream text-xs tracking-widest">// ONLINE</span>
          </div>
          <span class="font-tech-mono text-cream/80 text-xs tracking-wider">
            SYS_v2.6
          </span>
        </div>
        
        <!-- Middle, DEV  -->
        <div class="flex flex-col items-center justify-center py-8">
          <div class="font-pixel text-cream text-6xl mb-2">
            M.F
          </div>
          <div class="font-tech-mono text-cream/80 text-xs tracking-[0.3em]">
            [ DEV // 2026 ]
          </div>
        </div>
        
        <!-- Bottom: stats -->
        <div class="grid grid-cols-3 gap-2 border-t-[2px] border-cream/30 pt-3">
          <div class="text-center">
            <div class="font-pixel text-cream text-base">CO</div>
            <div class="font-tech-mono text-cream/60 text-[9px] tracking-widest mt-1">
              ORIGIN
            </div>
          </div>
          <div class="text-center border-x-[2px] border-cream/30">
            <div class="font-pixel text-cream text-base">DK</div>
            <div class="font-tech-mono text-cream/60 text-[9px] tracking-widest mt-1">
              BASE
            </div>
          </div>
          <div class="text-center">
            <div class="font-pixel text-cream text-base">∞</div>
            <div class="font-tech-mono text-cream/60 text-[9px] tracking-widest mt-1">
              IDEAS
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </section>
</template>