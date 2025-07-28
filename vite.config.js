import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Currency_Convertor/', 
  plugins: [react()],
})
