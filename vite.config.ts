import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'MyH5Components',
      fileName: (format) => `index.${format === 'es' ? 'mjs' : 'js'}`
    },
    rollupOptions: {
      external: ['vue', 'vant'],
      output: {
        globals: {
          vue: 'Vue',
          vant: 'vant'
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') return 'style.css'
          return `assets/[name]-[hash][extname]`
        }
      }
    },
    cssCodeSplit: false
  }
})