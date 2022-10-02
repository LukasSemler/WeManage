import { fileURLToPath, URL } from 'url';
//Url für Pfad
import path from 'path';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8080,
  },
  plugins: [vue()],
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
