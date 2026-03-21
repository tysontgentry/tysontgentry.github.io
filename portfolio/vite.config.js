import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// For GitHub user site (username.github.io) keep base: '/'
// For project pages use: base: '/repo-name/'
export default defineConfig({
  plugins: [react()],
  base: '/',
})
