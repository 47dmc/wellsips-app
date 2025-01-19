import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  ase: '/flexbank-app',
  plugins: [react()],
})
