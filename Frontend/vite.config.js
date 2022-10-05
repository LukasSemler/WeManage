import { fileURLToPath, URL } from 'url';
//Url für Pfad
import path from 'path';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8080,
  },
  plugins: [
    vue(),
    VitePWA({
      injectRegister: 'auto',
      includeAssets: ['/icon/favicon.ico', 'apple-touch-icon.png'],
      strategies: 'injectManifest',
      srcDir: 'src',
      filename: 'service-worker.js',
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['*/.{js,css,html,ico,png,svg}'],
        cleanupOutdatedCaches: false,
      },
      manifest: {
        name: 'WeManage',
        short_name: 'WeManage',
        description: 'WeManage-Description ',
        theme_color: '#000000',
        icons: [
          {
            src: '/icons/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/icons/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '/icons/android-chrome-maskable-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'maskable',
          },
          {
            src: '/icons/android-chrome-maskable-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
          {
            src: '/icons/apple-touch-icon-60x60.png',
            sizes: '60x60',
            type: 'image/png',
          },
          {
            src: '/icons/apple-touch-icon-76x76.png',
            sizes: '76x76',
            type: 'image/png',
          },
          {
            src: '/icons/apple-touch-icon-120x120.png',
            sizes: '120x120',
            type: 'image/png',
          },
          {
            src: '/icons/apple-touch-icon-152x152.png',
            sizes: '152x152',
            type: 'image/png',
          },
          {
            src: '/icons/apple-touch-icon-180x180.png',
            sizes: '180x180',
            type: 'image/png',
          },
          {
            src: '/icons/apple-touch-icon.png',
            sizes: '180x180',
            type: 'image/png',
          },
          {
            src: '/icons/favicon-16x16.png',
            sizes: '16x16',
            type: 'image/png',
          },
          {
            src: '/icons/favicon-32x32.png',
            sizes: '32x32',
            type: 'image/png',
          },
          {
            src: '/icons/msapplication-icon-144x144.png',
            sizes: '144x144',
            type: 'image/png',
          },
          {
            src: '/icons/mstile-150x150.png',
            sizes: '150x150',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  //! DAS WIRD ERST GANZ ZUM SCHLUSS WENN WIR DEPLOYEN AUSKOMMENTIERT, NOCH BRUACHEN WIR DEN .dist-ORDNER (für Preview)
  build: {
    outDir: path.resolve(__dirname, '../Backend/public'),
  },
});
