import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ mode }: { mode: string }) => ({
  plugins: [react(), tailwindcss()],
  base: mode === 'production' ? '/it4c-design/app/' : '/',
}))
