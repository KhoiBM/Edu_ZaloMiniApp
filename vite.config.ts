import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { visualizer } from 'rollup-plugin-visualizer'
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from '@vant/auto-import-resolver';
import VueRouter from 'unplugin-vue-router/vite'
import ZaloMiniApp from 'zmp-vite-plugin'
import vueJsx from '@vitejs/plugin-vue-jsx'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VueRouter({
    }),
    vue(),
    vueJsx({
      optimize: true,
      transformOn: true,
      enableObjectSlots: true,
    }),
    visualizer(),
    AutoImport({
      resolvers: [VantResolver()],
    }),
    Components({
      resolvers: [VantResolver()],
    }),
    ZaloMiniApp()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  base: './',
  build: {
    assetsInlineLimit: 0,
    // target: 'esnext',
    target: 'es2015',
    minify: 'terser',
    terserOptions: {
      compress: {
        // Remove console.log in production
        drop_console: true,
      },
    },
    rollupOptions: {
      output: {
        format: 'iife', // Use immediately-invoked function expression format
        // Avoid using ES module features in the output
        // inlineDynamicImports: true,
        // manualChunks: {
        //   // Split vendor code
        //   'vue-vendor': ['vue', 'vue-router'],
        //   'ui-vendor': ['zmp-ui', 'shadcn-vue'],
        //   "utils": ['@vueuse/core', 'rxjs'],
        // },
        // Generate hashed filenames for better caching
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/images/[name]-[hash].[ext]'

      },
    },
    cssCodeSplit: false,
    // Optimize asset compression
    // Generate source maps only for production debugging
    sourcemap: false,
  },

  esbuild: {
    target: 'esnext', // or 'esnext'
  },
  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       additionalData: `
  //         @import "@/assets/scss/variables.scss";
  //         @import "@/assets/scss/mixins.scss";
  //       `
  //     }
  //   }
  // },
  optimizeDeps: {
    include: ['vue', 'pinia', '@vueuse/core'],
  },
  server: {
    port: 3001,
    strictPort: true,
    hmr: {
      overlay: true,
    },
  },
})
