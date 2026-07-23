import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://apiclases.inacode.cl',
        changeOrigin: true,
        secure: false, // <-- Permite conectar aunque el SSL del instituto tenga fallas
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})