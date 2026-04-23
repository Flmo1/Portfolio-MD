<script setup>
defineProps({
  project: {
    type: Object,
    required: true
  }
})

defineEmits(['close'])
</script>

<template>
  <!-- Overlay dark  -->
  <div 
    class="fixed inset-0 bg-black/70 z-40 flex items-center justify-center p-8"
    @click="$emit('close')"
  >
    <!-- window -->
    <div 
      class="bg-cream border-[3px] border-darkteal shadow-[8px_8px_0_0_rgba(198,93,61,1)] max-w-2xl w-full max-h-[80vh] overflow-y-auto"
      @click.stop
    >
      
      <!-- superior bar -->
      <div class="flex items-center justify-between px-4 py-3 border-b-[3px] border-darkteal bg-cream">
        <div class="flex items-center gap-2">
          <span class="w-3 h-3 bg-rust rounded-full"></span>
          <span class="w-3 h-3 bg-darkteal rounded-full"></span>
          <span class="w-3 h-3 bg-darkteal/50 rounded-full"></span>
        </div>
        <span class="font-tech-mono text-xs text-darkteal tracking-wider">
          {{ project.id }}.exe
        </span>
        <button 
          @click="$emit('close')"
          class="font-tech-mono text-darkteal hover:text-rust transition"
        >
          [X]
        </button>
      </div>
      
      <!-- Content -->
      <div class="p-6">
        
        <div class="flex items-center gap-4 mb-2">
          <span class="font-tech-mono text-xs text-rust tracking-widest">
            {{ project.genre }}
          </span>
          <span class="font-tech-mono text-xs text-darkteal/60">
            {{ project.year }}
          </span>
        </div>
        
        <!-- Title -->
        <h2 class="font-pixel text-2xl text-darkteal mb-6">
          {{ project.title }}
        </h2>
        
        <!-- Cover  -->
        <div 
          v-if="project.cover"
          class="aspect-video bg-darkteal border-[3px] border-darkteal mb-6 overflow-hidden"
        >
          <img 
            :src="project.cover" 
            :alt="project.title"
            class="w-full h-full object-contain"
          />
        </div>
        
        <!-- Description -->
        <p class="font-tech text-darkteal text-lg mb-6 leading-relaxed">
          {{ project.description }}
        </p>
        
        <!-- Tech stack -->
        <div class="mb-6">
          <span class="font-tech-mono text-xs text-darkteal/60 tracking-widest mb-2 block">
            // TECH STACK
          </span>
          <div class="flex flex-wrap gap-2">
            <span 
              v-for="t in project.tech" 
              :key="t"
              class="font-tech-mono text-xs bg-darkteal text-cream px-3 py-1"
            >
              {{ t }}
            </span>
          </div>
        </div>
        
        <!-- Links -->
        <div class="flex gap-3 flex-wrap">
          <a 
            v-if="project.links.live"
            :href="project.links.live" 
            target="_blank" 
            rel="noopener"
            class="bg-rust text-cream px-6 py-3 font-tech-mono border-[3px] border-darkteal hover:bg-cream hover:text-rust transition-all"
          >
            LIVE DEMO //
          </a>
          <a 
            v-if="project.links.code"
            :href="project.links.code" 
            target="_blank" 
            rel="noopener"
            class="bg-darkteal text-cream px-6 py-3 font-tech-mono border-[3px] border-darkteal hover:bg-cream hover:text-darkteal transition-all"
          >
            VIEW CODE //
          </a>
          <a 
    v-if="project.links.pdf"
    :href="project.links.pdf" 
    :download="`${project.id}.pdf`"
    class="bg-rust text-cream px-6 py-3 font-tech-mono border-[3px] border-darkteal hover:bg-cream hover:text-rust transition-all"
  >
    DOWNLOAD PDF //
  </a>
        </div>
      </div>
    </div>
  </div>
</template>