import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3000
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, '../src'),
      '@example': resolve(__dirname, '.')
    }
  },
  assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg'],
  build: {
    assetsInlineLimit: 4096
  }
}) 