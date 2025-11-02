import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? '/web_banhang/' : '/', // Base path cho GitHub Pages khi production
  server: {
    port: 3000,
    open: true
  }
})
