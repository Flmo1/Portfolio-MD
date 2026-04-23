<script setup>
import { ref, computed } from 'vue'
import NavBar from '../components/NavBar.vue'
import ProjectCartridge from '../components/ProjectCartridge.vue'
import ProjectModal from '../components/ProjectModal.vue'
import { projects } from '../data/projects.js'

const selectedProject = ref(null)

function openProject(project) {
  selectedProject.value = project
}

function closeProject() {
  selectedProject.value = null
}

// Formatea el contador tipo "02" en vez de "2"
const projectCount = computed(() => 
  projects.length.toString().padStart(2, '0')
)
</script>

<template>
  <NavBar />
  
  <section class="bg-darkteal py-20 px-8 border-b-[3px] border-darkteal -mx-[5vw] min-h-screen relative overflow-hidden">
    
    <!-- Scanlines  -->
    <div 
      class="absolute inset-0 pointer-events-none opacity-20"
      style="background-image: repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(232, 228, 201, 0.3) 2px, rgba(232, 228, 201, 0.3) 3px);"
    ></div>
    

    
    <!-- Corner brackets -->
    <div class="absolute top-6 left-6 w-8 h-8 border-t-[3px] border-l-[3px] border-cream pointer-events-none"></div>
    <div class="absolute top-6 right-6 w-8 h-8 border-t-[3px] border-r-[3px] border-cream pointer-events-none"></div>
    <div class="absolute bottom-6 left-6 w-8 h-8 border-b-[3px] border-l-[3px] border-cream pointer-events-none"></div>
    <div class="absolute bottom-6 right-6 w-8 h-8 border-b-[3px] border-r-[3px] border-cream pointer-events-none"></div>
    
    <div class="relative max-w-6xl mx-auto">
      
      <!-- Header row: info system + counter -->
      <div class="flex justify-between items-start mb-8 flex-wrap gap-4">
        <div>
          <div class="flex items-center gap-4 mb-2">
            <span class="w-3 h-3 bg-rust animate-pulse"></span>
            <span class="font-tech-mono text-cream text-sm tracking-widest">// GAME.LIBRARY</span>
          </div>
          
          <h1 class="font-pixel text-3xl md:text-4xl text-cream mb-4">
            Projects
          </h1>
          
          <p class="font-tech text-cream/80 text-lg max-w-2xl">
            Select a cartridge to view project details.
          </p>
        </div>
        
        <!-- Inventory -->
        <div class="border-[3px] border-cream p-3 bg-darkteal/50 min-w-[180px]">
          <div class="font-tech-mono text-[10px] text-cream/60 tracking-widest mb-1">
            // INVENTORY
          </div>
          <div class="flex items-baseline gap-2">
            <span class="font-pixel text-2xl text-rust">{{ projectCount }}</span>
            <span class="font-tech-mono text-cream/60 text-sm">items</span>
          </div>
          <div class="mt-2 pt-2 border-t border-cream/30">
            <div class="font-tech-mono text-[9px] text-cream/60 tracking-wider">
              STATUS: <span class="text-rust">ACTIVE</span>
            </div>
          </div>
        </div>
      </div>
      
      <!-- loading bar, decorative -->
      <div class="mb-10 max-w-md">
        <div class="flex justify-between items-center mb-2">
          <span class="font-tech-mono text-[10px] text-cream/60 tracking-widest">
            LOADING CARTRIDGES
          </span>
          <span class="font-tech-mono text-[10px] text-rust tracking-widest animate-pulse">
            100%
          </span>
        </div>
        <div class="h-2 border-[2px] border-cream bg-darkteal overflow-hidden">
          <div class="h-full w-full bg-rust"></div>
        </div>
      </div>
      
      <!-- Grid of cardtriges -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <ProjectCartridge
          v-for="project in projects"
          :key="project.id"
          :project="project"
          @click="openProject(project)"
        />
      </div>
      
      <!--  "Press START" -->
      <div class="flex justify-center mt-12">
        <div class="font-pixel text-cream/60 text-sm tracking-widest animate-pulse">
          ▸ SELECT A CARTRIDGE TO CONTINUE ◂
        </div>
      </div>
      
    </div>
  </section>
  
  <!-- details  -->
  <ProjectModal 
    v-if="selectedProject" 
    :project="selectedProject" 
    @close="closeProject"
  />
</template>