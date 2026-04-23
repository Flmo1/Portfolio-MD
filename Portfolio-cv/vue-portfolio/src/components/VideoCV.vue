<script setup>
const videoId = 'n_LsC8YdKBs' // video ID

const embedUrl = `https://www.youtube.com/embed/${videoId}`
const youtubeUrl = `https://www.youtube.com/watch?v=${videoId}`
</script>

<template>
  <section class="bg-darkteal py-20 px-8 border-b-[3px] border-darkteal -mx-[5vw] relative overflow-hidden">
    
    <!-- Scanlines  -->
    <div 
      class="absolute inset-0 pointer-events-none opacity-20"
      style="background-image: repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(232, 228, 201, 0.3) 2px, rgba(232, 228, 201, 0.3) 3px);"
    ></div>
    
    <div class="relative max-w-5xl mx-auto">
      
      <!-- Header con título y "luz LED" decorativa -->
      <div class="flex items-center gap-4 mb-2">
        <span class="w-3 h-3 bg-rust rounded-full animate-pulse"></span>
        <span class="font-tech-mono text-cream text-sm tracking-widest">// NOW PLAYING</span>
      </div>
      
      <h2 class="font-pixel text-3xl md:text-4xl text-cream mb-4">
        Video&nbsp;&nbsp;CV
      </h2>
      
      <p class="font-tech text-cream/80 text-lg mb-10 max-w-2xl">
        Get to know me in 60 seconds. Press play to start.
      </p>
      
      <!-- frame -->
      <div class="bg-cream p-4 md:p-6 border-[3px] border-cream shadow-[8px_8px_0_0_rgba(198,93,61,1)]">
        
        <!-- Barra superior tipo "ventana retro" -->
        <div class="flex items-center justify-between mb-3 pb-3 border-b-2 border-darkteal/20">
          <div class="flex items-center gap-2">
            <span class="w-3 h-3 bg-rust rounded-full"></span>
            <span class="w-3 h-3 bg-darkteal rounded-full"></span>
            <span class="w-3 h-3 bg-darkteal/50 rounded-full"></span>
          </div>
          <span class="font-tech-mono text-xs text-darkteal tracking-wider">
            MOISES_CV.mp4
          </span>
        </div>
        
        <!-- Video -->
        <div class="relative w-full aspect-video bg-darkteal overflow-hidden">
          <iframe
            :src="embedUrl"
            title="Moises Florez - Video CV"
            class="absolute inset-0 w-full h-full"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      
      <!-- Button "Watch on YouTube" -->
      <div class="flex justify-center mt-10">
        <a 
          :href="youtubeUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="bg-rust text-cream px-10 py-4 font-tech-mono border-[3px] border-cream hover:bg-cream hover:text-rust hover:border-rust transition-all duration-200"
        >
          WATCH ON YOUTUBE //
        </a>
      </div>
      
    </div>
  </section>
</template>