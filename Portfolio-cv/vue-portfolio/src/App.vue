<script setup>
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import tvFrame from './assets/ui/tv-frame.png'

const router = useRouter()
const glitchActive = ref(false)

router.beforeEach((to, from, next) => {
  // hash scroller 
  const scrollToHash = (hash) => {
    if (!hash) return
    setTimeout(() => {
      const element = document.querySelector(hash)
      const scrollContainer = document.querySelector('.overflow-y-auto')
      
      if (element) {
        if (scrollContainer) {
          const containerTop = scrollContainer.getBoundingClientRect().top
          const elementTop = element.getBoundingClientRect().top
          const scrollTop = scrollContainer.scrollTop
          const targetPosition = elementTop - containerTop + scrollTop
          
          scrollContainer.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          })
        } else {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }, 100)
  }
  
  
  if (from.name && to.name !== from.name) {
    glitchActive.value = true
    
    setTimeout(() => {
      next()
  
      if (to.hash) {
        scrollToHash(to.hash)
      }
    }, 200)
    
    setTimeout(() => {
      glitchActive.value = false
    }, 500)
    return
  }
  
  // same page, different hash
  if (to.path === from.path && to.hash && to.hash !== from.hash) {
    next()
    scrollToHash(to.hash)
    return
  }
  
  // anything else
  next()
})
</script>

<template>
  <!-- Mobile: scroll normal. Desktop tv  -->
  <div class="md:fixed md:inset-0 md:overflow-hidden">
    
    <div class="hidden md:block min-h-screen bg-cream p-[5vw] crt-effect"></div>
    
    <!-- scrollable area -->
    <div class="md:absolute md:inset-0 md:px-[5vw] md:overflow-y-auto bg-cream min-h-screen">
      <router-view />
    </div>

    <!-- Overlay glitch effect) -->
    <div 
      class="glitch-overlay"
      :class="{ active: glitchActive }"
    ></div>

    <!-- tv desktop frame -->
    <div 
      class="hidden md:block absolute inset-0 pointer-events-none z-50 bg-no-repeat bg-cover bg-center"
      :style="{ backgroundImage: `url(${tvFrame})` }"
    ></div>
  </div>
</template>