import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Projects from '../views/Projects.vue'
import Contact from '../views/Contact.vue' 

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/projects', name: 'Projects', component: Projects },
    { path: '/contact', name: 'Contact', component: Contact },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    // If the creen has a hash)
    if (to.hash) {
      // Wait a little so the page renders and then scrolls
      return new Promise((resolve) => {
        setTimeout(() => {
          const element = document.querySelector(to.hash)
          const scrollContainer = document.querySelector('.overflow-y-auto')
          
          if (element && scrollContainer) {
        
            const containerTop = scrollContainer.getBoundingClientRect().top
            const elementTop = element.getBoundingClientRect().top
            const scrollTop = scrollContainer.scrollTop
            const targetPosition = elementTop - containerTop + scrollTop
            
            scrollContainer.scrollTo({
              top: targetPosition,
              behavior: 'smooth'
            })
          }
          resolve()
        }, 100)
      })
    }
  
    const scrollContainer = document.querySelector('.overflow-y-auto')
    if (scrollContainer) {
      scrollContainer.scrollTo({ top: 0, behavior: 'smooth' })
    }
  },
})

export default router