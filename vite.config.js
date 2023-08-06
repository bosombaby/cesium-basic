import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'


import cesium from 'vite-plugin-cesium';

//配置@路径别名
import { resolve } from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    cesium({
      rebuildCesium: true
    })
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    }
  },
})
