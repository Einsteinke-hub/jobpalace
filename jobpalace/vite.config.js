import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  root: '.', // <--- ADD OR ENSURE THIS LINE IS PRESENT AND SET TO '.'
  plugins: [react(),tailwindcss(),],
  build: {
    outDir: 'dist', // Ensure output directory is named 'dist'
  },
  base: '/jobpalace/', // <--- IMPORTANT: Ensure this matches your GitHub Pages base URL
})