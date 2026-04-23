import portfolioCover from '../assets/projects/portfolio-cv.png'
import skarntydenCover from '../assets/projects/skarntyden.png'
import recipe_pageCover from '../assets/projects/recipe_page.png'
import be4cookingCover from '../assets/projects/be4cooking.png'
import lowkeyCover from '../assets/projects/lowkey.png'
import bikezCover from '../assets/projects/bikez.png'

// Projects data

export const projects = [
  {
    id: 'project-1',
    title: 'Portfolio CV',
    genre: 'WEBSITE',
    year: '2026',
    description: 'My personal portfolio website with a retro TV aesthetic. Built from scratch with Vue 3, featuring pixel art skill screens and an embedded video CV.',
  cover: portfolioCover,
    tech: ['Vue 3', 'Vite', 'Tailwind v4'],
    links: {
      live: null,
      code: 'https://github.com/tu-usuario/portfolio-cv',
    },
    rarity: 'legendary',
  },
  {
    id: 'project-2',
    title: 'Skarntyden',
    genre: 'WEBSITE',
    year: '2025',
    description: 'Worked in a full web and design project for Skarntyden, a local amateur theatre group. I was responsible for all the design and development of certtain sections of the website.',
    cover: skarntydenCover,
    tech: ['HTML', 'CSS', 'JS'],
    links: {
      live: null,
      code: 'https://github.com/gergopinter77-lgtm/1st-semester-exam-project-BrotherLionheart'
      ,
    },
    rarity: 'legendary',
  },
  
  
  {
    id: 'project-3',
    title: 'Recipe page',
    genre: 'WEBSITE',
    year: '2025',
    description: 'A simple recipe page built with HTML, CSS as part of a mandatory assigment for my studies.',
    cover: recipe_pageCover,
    tech: ['HTML', 'CSS', 'JavaScript'],
    links: {
      live: null,
      code: 'https://github.com/Flmo1/Recipe_page_mandatory',
    },
    rarity: 'rare',
  },
  {
    id: 'project-4',
    title: 'BE4COOKING',
    genre: 'Prototyping',
    year: '2025',
    description: 'BE4COOKING is a prototype of a recipe app focused on sustainability. It was built using Figma and focusing on UX design.',
    cover: be4cookingCover,
    tech: ['Figma'],
    links: {
      live: null,
      code: 'https://www.figma.com/proto/XGPuyBhKHsW1DJJ9n2Myzf/Untitled?node-id=29-169&starting-point-node-id=3%3A246&t=GyDn3xPLRXpzHtBs-1',
    },
    rarity: 'rare',
  },
  {
    id: 'project-5',
    title: 'Lowkey bar',
    genre: 'DESIGN',
    year: '2025',
    description: 'Did visual identity and branding for the University bar (SEA Esbjerg) as part of a project for my studies.',
    cover: lowkeyCover,
    tech: ['Adobe InDesign', 'Adobe Illustrator'],
    links: {
      live: null,
      code: null,
      pdf: '/lowkey.pdf',
    },
    rarity: 'common',
  },
  {
    id: 'project-6',
    title: 'Bikez',
    genre: 'Design',
    year: '2026',
    description: 'Currently working on the visual identity and UX/UI for Bikez, a biking app focused on sustainability.',
    cover: bikezCover,
    tech: ['Figma', 'Adobe Illustrator'],
    links: {
      live: null,
      code: null,
      pdf: '/bikez.pdf',
    },
    rarity: 'common',
  },
]