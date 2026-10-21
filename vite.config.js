import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' permite hospedar o site na raiz do domínio ou dentro de uma subpasta.
export default defineConfig({
  plugins: [react()],
  base: './',
})
