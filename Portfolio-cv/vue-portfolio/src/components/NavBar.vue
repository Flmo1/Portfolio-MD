<script setup>
import { ref } from 'vue'
import logo from '../assets/logo/logo.svg'

const menuOpen = ref(false)

function closeMenu() {
  menuOpen.value = false
}

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}
</script>

<template>
  <header class="bg-cream relative">
    
    <!-- Logo plus burger  -->
    <div class="flex justify-between items-center h-20 md:h-24 px-4 md:px-0 md:justify-center py-2">
      
      <!-- logo centered in desktop and to the left in mobile -->
      <router-link 
        to="/" 
        @click="closeMenu"
        class="h-full inline-block group cursor-pointer"
      >
        <img 
          :src="logo" 
          alt="M logo" 
          class="h-full w-auto object-contain transition-all duration-200 group-hover:scale-110 group-hover:rotate-[-3deg] group-hover:drop-shadow-[0_0_12px_rgba(198,93,61,0.6)]" 
        />
      </router-link>
      
      <!-- burger, mobile only -->
      <button
        @click="toggleMenu"
        class="md:hidden flex flex-col gap-1.5 p-2"
        aria-label="Toggle menu"
      >
        <span 
          class="w-7 h-[3px] bg-darkteal transition-transform duration-200"
          :class="{ 'rotate-45 translate-y-[9px]': menuOpen }"
        ></span>
        <span 
          class="w-7 h-[3px] bg-darkteal transition-opacity duration-200"
          :class="{ 'opacity-0': menuOpen }"
        ></span>
        <span 
          class="w-7 h-[3px] bg-darkteal transition-transform duration-200"
          :class="{ '-rotate-45 -translate-y-[9px]': menuOpen }"
        ></span>
      </button>
    </div>
    
    <!-- Nav desktop  -->
    <nav class="hidden md:flex items-center border-t-[3px] border-b-[3px] border-darkteal -mx-[2vw]">
      <router-link to="/" class="flex-1 text-center py-3 font-tech text-darkteal hover:underline">Profile</router-link>
      <router-link to="/#skills" class="flex-1 text-center py-3 font-tech text-darkteal hover:underline">Skills</router-link>
      <router-link to="/projects" class="flex-1 text-center py-3 font-tech text-darkteal hover:underline">Projects</router-link>
      <router-link to="/contact" class="flex-1 text-center py-3 font-tech text-darkteal hover:underline">Contact</router-link>
      <a 
  href="/moises-florez-cv.pdf" 
  download="Moises_Florez_CV.pdf"
  class="px-8 py-3 font-tech text-darkteal border-l-[3px] border-darkteal hover:bg-darkteal hover:text-cream"
>
  Export CV
</a>
      
    </nav>
    
    <!-- Nav mobile -->
    <nav 
      v-show="menuOpen"
      class="md:hidden border-t-[3px] border-b-[3px] border-darkteal bg-cream"
    >
      <router-link 
        to="/" 
        @click="closeMenu"
        class="block text-center py-4 font-tech text-darkteal border-b-[2px] border-darkteal/20 hover:bg-darkteal hover:text-cream transition-colors"
      >
        Profile
      </router-link>
      <router-link 
        to="/#skills" 
        @click="closeMenu"
        class="block text-center py-4 font-tech text-darkteal border-b-[2px] border-darkteal/20 hover:bg-darkteal hover:text-cream transition-colors"
      >
        Skills
      </router-link>
      <router-link 
        to="/projects" 
        @click="closeMenu"
        class="block text-center py-4 font-tech text-darkteal border-b-[2px] border-darkteal/20 hover:bg-darkteal hover:text-cream transition-colors"
      >
        Projects
      </router-link>
      <router-link 
        to="/contact" 
        @click="closeMenu"
        class="block text-center py-4 font-tech text-darkteal border-b-[2px] border-darkteal/20 hover:bg-darkteal hover:text-cream transition-colors"
      >
        Contact
      </router-link>
<a 
  href="/moises-florez-cv.pdf" 
  download="Moises_Florez_CV.pdf"
  @click="closeMenu"
  class="block text-center py-4 font-tech text-darkteal border-b-[2px] border-darkteal/20"
>
  Export CV
</a>

    </nav>
  </header>
</template>