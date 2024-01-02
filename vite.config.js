import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import dns from 'dns'
import vue from '@vitejs/plugin-vue'
dns.setDefaultResultOrder('verbatim') 
// https://vitejs.dev/config/
export default defineConfig({
  transpileDependencies: true,
  devServer: {
    host: '192.168.31.212',
    port: 5173,
    },
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
