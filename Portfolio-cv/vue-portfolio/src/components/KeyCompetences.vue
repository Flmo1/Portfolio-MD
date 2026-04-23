<script setup>
import screenFrame from '../assets/ui/screen.png'
import cssIcon from '../assets/icons/css.png'
import jsIcon from '../assets/icons/js.png'
import htmlIcon from '../assets/icons/html.png'
import vueIcon from '../assets/icons/vue.png'
import tailwindIcon from '../assets/icons/tailwind.png'
import figmaIcon from '../assets/icons/figma.png'
import adobeIcon from '../assets/icons/adobe.png'
import spanishIcon from '../assets/icons/spanish.png'
import englishIcon from '../assets/icons/english.png'

const skills = [
  { name: 'CSS', icon: cssIcon },
  { name: 'JS', icon: jsIcon },
  { name: 'HTML', icon: htmlIcon },
  { name: 'VUE', icon: vueIcon },
  { name: 'TAILWIND', icon: tailwindIcon },
]

const extras = [
  { name: 'FIGMA', icon: figmaIcon },
  { name: 'ADOBE', icon: adobeIcon },
  { name: 'SPANISH', icon: spanishIcon },
  { name: 'ENGLISH', icon: englishIcon },
]
</script>

<template>
  <section id="skills" class="bg-cream py-20 px-8 border-b-[3px] border-darkteal -mx-[2vw] relative overflow-hidden">
    
    <!-- Decorative grid try -->
    <div 
      class="absolute inset-0 pointer-events-none opacity-[0.07]"
      style="background-image: linear-gradient(to right, #1E3A3A 1px, transparent 1px), linear-gradient(to bottom, #1E3A3A 1px, transparent 1px); background-size: 40px 40px;"
    ></div>
    
    <div class="relative">
      
      <!-- Header with indicator decoration -->
      <div class="flex items-center gap-4 mb-2">
        <span class="w-3 h-3 bg-rust animate-pulse"></span>
        <span class="font-tech-mono text-darkteal text-sm tracking-widest">// SYSTEM.SKILLS</span>
      </div>
      
      <h2 class="font-pixel text-3xl md:text-4xl text-darkteal mb-4">
        Key&nbsp;&nbsp;Competences
      </h2>
      
      <p class="font-tech text-darkteal/80 text-lg mb-12 max-w-2xl">
        Technologies and tools I work with on a daily basis.
      </p>
      
      <!-- First row: 5 skills -->
      <div class="flex flex-wrap justify-center gap-2 mb-2">
        <div 
          v-for="skill in skills" 
          :key="skill.name"
          class="relative w-60 h-60 group cursor-pointer transition-all duration-200 hover:-translate-y-2"
        >
          <img 
            :src="screenFrame" 
            alt="" 
            class="absolute inset-0 w-full h-full object-contain [image-rendering:pixelated]" 
          />
          <div class="absolute inset-0 flex flex-col items-center justify-center pt-2 pb-8">
            <img 
              :src="skill.icon" 
              :alt="skill.name" 
              class="w-16 h-16 object-contain [image-rendering:pixelated] transition-all duration-200 group-hover:scale-125 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.9)]" 
            />
            <span class="font-pixel text-xs text-cream mt-2 transition-all duration-200 group-hover:text-rust">
              {{ skill.name }}
            </span>
          </div>
        </div>
      </div>
      
      <!-- Second row: 4 extras ones -->
      <div class="flex flex-wrap justify-center gap-2 mb-12">
        <div 
          v-for="item in extras" 
          :key="item.name"
          class="relative w-60 h-60 group cursor-pointer transition-all duration-200 hover:-translate-y-2"
        >
          <img 
            :src="screenFrame" 
            alt="" 
            class="absolute inset-0 w-full h-full object-contain [image-rendering:pixelated]" 
          />
          <div class="absolute inset-0 flex flex-col items-center justify-center pt-2 pb-8">
            <img 
              :src="item.icon" 
              :alt="item.name" 
              class="w-16 h-16 object-contain [image-rendering:pixelated] transition-all duration-200 group-hover:scale-125 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.9)]" 
            />
            <span class="font-pixel text-xs text-cream mt-2 transition-all duration-200 group-hover:text-rust">
              {{ item.name }}
            </span>
          </div>
        </div>
      </div>
      
      <!-- Contact button -->
      <div class="flex justify-center">
<router-link 
  to="/projects"
  class="bg-rust text-cream px-10 py-4 font-tech-mono border-[3px] border-darkteal shadow-[6px_6px_0_0_rgba(30,58,58,1)] hover:shadow-[3px_3px_0_0_rgba(30,58,58,1)] hover:translate-x-[3px] hover:translate-y-[3px] transition-all duration-150"
>
  VIEW PROJECTS //
</router-link>
      </div>
      
    </div>
  </section>
</template>