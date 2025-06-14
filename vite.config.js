import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsilwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsilwindcss()
  ],
  base: '/vishal-portfolio/'
})
