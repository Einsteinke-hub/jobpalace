import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // <--- This is the correct React plugin

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()], // <--- ONLY react() plugin here, unless you've added others for specific, *known* reasons
  build: {
    outDir: 'dist',
  },
  base: '/jobpalace/',
})