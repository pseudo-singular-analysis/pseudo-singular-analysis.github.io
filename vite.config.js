import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ command, mode }) => {
  // Use GitHub Pages base path only for production builds
  // Use root path for development to avoid asset loading issues
  const base = command === 'build' ? '/pseudo-singular-analysis.github.io/' : '/'

  return {
    plugins: [react(), tailwindcss()],
    server: {
      port: 3000,
    },
    base,
  }
})
