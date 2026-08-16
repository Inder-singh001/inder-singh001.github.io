import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// BASE_PATH is set by the GitHub Pages workflow (site served from /Portfolio/).
// On Vercel and local dev it stays '/'.
export default defineConfig({
  base: process.env.BASE_PATH || '/',
  plugins: [react()],
})
