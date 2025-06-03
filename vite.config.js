import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // <--- This is the correct React plugin

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss(),], // <--- ONLY react() plugin here, unless you've added others for specific, *known* reasons
  build: {
    outDir: 'dist',
  },
  base: '/jobpalace/',
})