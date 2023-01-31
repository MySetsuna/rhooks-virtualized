import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8100,
    host: '0.0.0.0'
  },
  build: {
    outDir: 'build',
    manifest: true,
  },
  plugins: [react()],
})
