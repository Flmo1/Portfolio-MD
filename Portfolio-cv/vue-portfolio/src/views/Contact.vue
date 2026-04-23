<script setup>
import { ref } from 'vue'
import NavBar from '../components/NavBar.vue'

// Fromspree
const FORMSPREE_URL = 'https://formspree.io/f/maqadevp'

// status
const form = ref({
  name: '',
  email: '',
  subject: '',
  message: '',
})

// send status
const status = ref('idle') // idle | sending | success | error
const errorMessage = ref('')

async function handleSubmit() {
  // Validación básica
  if (!form.value.name || !form.value.email || !form.value.message) {
    errorMessage.value = 'All fields marked with * are required.'
    status.value = 'error'
    return
  }

  status.value = 'sending'
  errorMessage.value = ''

  try {
    const response = await fetch(FORMSPREE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(form.value),
    })

    if (response.ok) {
      status.value = 'success'
      // Limpiar formulario
      form.value = { name: '', email: '', subject: '', message: '' }
    } else {
      throw new Error('Failed to send')
    }
  } catch (err) {
    status.value = 'error'
    errorMessage.value = 'Connection failed. Try again later.'
  }
}

function resetForm() {
  status.value = 'idle'
  errorMessage.value = ''
}
</script>

<template>
  <NavBar />
  
  <section class="bg-darkteal py-20 px-8 border-b-[3px] border-darkteal -mx-[5vw] min-h-screen relative overflow-hidden">
    
    <!-- Scanlines -->
    <div 
      class="absolute inset-0 pointer-events-none opacity-20"
      style="background-image: repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(232, 228, 201, 0.3) 2px, rgba(232, 228, 201, 0.3) 3px);"
    ></div>
    
    <!-- Corner brackets -->
    <div class="absolute top-6 left-6 w-8 h-8 border-t-[3px] border-l-[3px] border-cream pointer-events-none"></div>
    <div class="absolute top-6 right-6 w-8 h-8 border-t-[3px] border-r-[3px] border-cream pointer-events-none"></div>
    <div class="absolute bottom-6 left-6 w-8 h-8 border-b-[3px] border-l-[3px] border-cream pointer-events-none"></div>
    <div class="absolute bottom-6 right-6 w-8 h-8 border-b-[3px] border-r-[3px] border-cream pointer-events-none"></div>
    
    <div class="relative max-w-5xl mx-auto">
      
      <!-- Header -->
      <div class="flex items-center gap-4 mb-2">
        <span class="w-3 h-3 bg-rust animate-pulse"></span>
        <span class="font-tech-mono text-cream text-sm tracking-widest">// CONNECT.TERMINAL</span>
      </div>
      
      <h1 class="font-pixel text-3xl md:text-4xl text-cream mb-4">
        Contact
      </h1>
      
      <p class="font-tech text-cream/80 text-lg mb-12 max-w-2xl">
        Got a question, opportunity, or just want to say hi? Drop me a message.
      </p>
      
      <!-- Grid thingy -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        <!-- FORMULARIO (ocupa 2 columnas) -->
        <div class="lg:col-span-2 bg-cream border-[3px] border-cream shadow-[8px_8px_0_0_rgba(198,93,61,1)]">
          
          <!-- Barra superior tipo ventana -->
          <div class="flex items-center justify-between px-4 py-3 border-b-[3px] border-darkteal bg-cream">
            <div class="flex items-center gap-2">
              <span class="w-3 h-3 bg-rust rounded-full"></span>
              <span class="w-3 h-3 bg-darkteal rounded-full"></span>
              <span class="w-3 h-3 bg-darkteal/50 rounded-full"></span>
            </div>
            <span class="font-tech-mono text-xs text-darkteal tracking-wider">
              NEW_MESSAGE.txt
            </span>
          </div>
          
          <!-- content -->
          <div class="p-6 md:p-8">
            
            <!-- state: SUCCESS -->
            <div v-if="status === 'success'" class="text-center py-12">
              <div class="font-pixel text-2xl text-darkteal mb-4">
                ✓ MESSAGE SENT
              </div>
              <p class="font-tech text-darkteal mb-6">
                Connection established. I'll get back to you soon.
              </p>
              <button
                @click="resetForm"
                class="bg-rust text-cream px-8 py-3 font-tech-mono border-[3px] border-darkteal hover:bg-cream hover:text-rust transition-all"
              >
                SEND ANOTHER //
              </button>
            </div>
            
            <!-- formulary -->
            <div v-else class="space-y-5">
              
              <!-- Name -->
              <div>
                <label class="font-tech-mono text-xs text-darkteal/60 tracking-widest mb-2 block">
                  // NAME *
                </label>
                <input
                  v-model="form.name"
                  type="text"
                  placeholder="Your name"
                  :disabled="status === 'sending'"
                  class="w-full bg-cream border-[3px] border-darkteal px-4 py-3 font-tech text-darkteal text-lg focus:outline-none focus:border-rust transition-colors"
                />
              </div>
              
              <!-- Email -->
              <div>
                <label class="font-tech-mono text-xs text-darkteal/60 tracking-widest mb-2 block">
                  // EMAIL *
                </label>
                <input
                  v-model="form.email"
                  type="email"
                  placeholder="your@email.com"
                  :disabled="status === 'sending'"
                  class="w-full bg-cream border-[3px] border-darkteal px-4 py-3 font-tech text-darkteal text-lg focus:outline-none focus:border-rust transition-colors"
                />
              </div>
              
              <!-- subject -->
              <div>
                <label class="font-tech-mono text-xs text-darkteal/60 tracking-widest mb-2 block">
                  // SUBJECT
                </label>
                <input
                  v-model="form.subject"
                  type="text"
                  placeholder="What's this about?"
                  :disabled="status === 'sending'"
                  class="w-full bg-cream border-[3px] border-darkteal px-4 py-3 font-tech text-darkteal text-lg focus:outline-none focus:border-rust transition-colors"
                />
              </div>
              
              <!-- Message -->
              <div>
                <label class="font-tech-mono text-xs text-darkteal/60 tracking-widest mb-2 block">
                  // MESSAGE *
                </label>
                <textarea
                  v-model="form.message"
                  rows="6"
                  placeholder="Type your message here..."
                  :disabled="status === 'sending'"
                  class="w-full bg-cream border-[3px] border-darkteal px-4 py-3 font-tech text-darkteal text-lg focus:outline-none focus:border-rust transition-colors resize-none"
                ></textarea>
              </div>
              
              <!-- error message -->
              <div v-if="status === 'error'" class="bg-rust/20 border-[3px] border-rust p-3">
                <span class="font-tech-mono text-xs text-rust tracking-widest">
                  ⚠ ERROR: {{ errorMessage }}
                </span>
              </div>
              
              <!-- send button -->
              <div class="pt-2">
                <button
                  @click="handleSubmit"
                  :disabled="status === 'sending'"
                  class="bg-rust text-cream px-8 py-4 font-tech-mono border-[3px] border-darkteal shadow-[6px_6px_0_0_rgba(30,58,58,1)] hover:shadow-[3px_3px_0_0_rgba(30,58,58,1)] hover:translate-x-[3px] hover:translate-y-[3px] transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span v-if="status === 'sending'">TRANSMITTING...</span>
                  <span v-else>SEND // TRANSMIT</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <!-- the decorative info stuff -->
        <div class="space-y-6">
          
          <!-- Status online -->
          <div class="border-[3px] border-cream p-4 bg-darkteal/50">
            <div class="font-tech-mono text-[10px] text-cream/60 tracking-widest mb-2">
              // STATUS
            </div>
            <div class="flex items-center gap-3">
              <span class="w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
              <span class="font-tech-mono text-cream tracking-wider">ONLINE</span>
            </div>
            <div class="mt-3 pt-3 border-t border-cream/30 font-tech-mono text-[10px] text-cream/60 tracking-wider">
              RESPONSE TIME: <span class="text-rust">~24H</span>
            </div>
          </div>
          
          <!-- social media -->
          <div class="border-[3px] border-cream p-4 bg-darkteal/50">
            <div class="font-tech-mono text-[10px] text-cream/60 tracking-widest mb-3">
              // CHANNELS
            </div>
            <div class="space-y-2">
              <a 
                href="https://github.com/Flmo1" 
                target="_blank"
                rel="noopener"
                class="flex items-center justify-between font-tech-mono text-sm text-cream hover:text-rust transition-colors"
              >
                <span>GitHub</span>
                <span class="text-cream/60">→</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/moises-florez/" 
                target="_blank"
                rel="noopener"
                class="flex items-center justify-between font-tech-mono text-sm text-cream hover:text-rust transition-colors"
              >
                <span>LinkedIn</span>
                <span class="text-cream/60">→</span>
              </a>
      
            </div>
          </div>
          
          <!-- location, info -->
          <div class="border-[3px] border-cream p-4 bg-darkteal/50">
            <div class="font-tech-mono text-[10px] text-cream/60 tracking-widest mb-2">
              // LOCATION
            </div>
            <div class="font-tech text-cream text-lg">
              Esbjerg, DK
            </div>
            <div class="font-tech-mono text-[10px] text-cream/60 tracking-wider mt-1">
              OPEN TO REMOTE
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </section>
</template>