<script setup>
defineProps({
  project: {
    type: Object,
    required: true
  }
})

// color of the body based on rarity 
const cartridgeBody = {
  common: 'bg-[#b8a888]',    // beige
  rare: 'bg-rust',           // orange
  legendary: 'bg-[#4a4a4a]', // grey
}
</script>

<template>
  <button 
    class="group cursor-pointer text-left transition-all duration-200 hover:-translate-y-2 w-full"
  >
    <!-- full cartidge body-->
    <div 
      class="relative border-[3px] border-darkteal rounded-t-lg transition-all duration-200 group-hover:shadow-[6px_6px_0_0_rgba(198,93,61,1)]"
      :class="cartridgeBody[project.rarity] || cartridgeBody.common"
    >
      <!-- two columns content -->
      <div class="flex p-3 gap-3">
        
        <!-- the cartridge rectangles, mb there is a way to make ts easier -->
        <div class="flex flex-col justify-center gap-[3px] py-2 w-[15%]">
          <div class="h-[3px] bg-darkteal/60"></div>
          <div class="h-[3px] bg-darkteal/60"></div>
          <div class="h-[3px] bg-darkteal/60"></div>
          <div class="h-[3px] bg-darkteal/60"></div>
          <div class="h-[3px] bg-darkteal/60"></div>
          <div class="h-[3px] bg-darkteal/60"></div>
          <div class="h-[3px] bg-darkteal/60"></div>
          <div class="h-[3px] bg-darkteal/60"></div>
          <div class="h-[3px] bg-darkteal/60"></div>
          <div class="h-[3px] bg-darkteal/60"></div>
          <div class="h-[3px] bg-darkteal/60"></div>
          <div class="h-[3px] bg-darkteal/60"></div>
          <div class="h-[3px] bg-darkteal/60"></div>
          <div class="h-[3px] bg-darkteal/60"></div>
        </div>
        
        <!-- right column -->
        <div class="flex-1 bg-cream border-[3px] border-darkteal">
          
          <!-- Cover  -->
          <div class="aspect-square bg-darkteal flex items-center justify-center overflow-hidden border-b-[3px] border-darkteal">
            <img 
              v-if="project.cover" 
              :src="project.cover" 
              :alt="project.title"
              class="w-full h-full object-cover"
            />
            <span v-else class="font-pixel text-cream text-5xl opacity-40">
              {{ project.title.charAt(0) }}
            </span>
          </div>
          
          <!-- project info -->
          <div class="p-3 bg-cream text-center">
            <h3 class="font-pixel text-xs text-darkteal leading-tight mb-1">
              {{ project.title }}
            </h3>
            <div class="flex items-center justify-center gap-2 mt-2">
              <span class="font-tech-mono text-[9px] text-rust tracking-widest">
                {{ project.genre }}
              </span>
              <span class="font-tech-mono text-[9px] text-darkteal/60">
                • {{ project.year }}
              </span>
            </div>
          </div>
        </div>
      </div>
      
      <!-- inferior notch -->
      <div class="flex justify-center pb-2">
        <div class="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-darkteal/60"></div>
      </div>
      
    </div>
  </button>
</template>