import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [
      react(), 
      tailwindcss(),
      VitePWA({
        registerType: 'autoUpdate',
        injectRegister: false,
        includeAssets: ['icon.svg', 'favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
        manifest: {
          name: 'TeaBrew - 泡茶指南',
          short_name: 'TeaBrew',
          description: '发现二十余种名茶的冲泡秘籍，开启一段静谧的寻味之旅。',
          theme_color: '#F5F5F0',
          background_color: '#F5F5F0',
          display: 'standalone',
          icons: [
            {
              src: 'icon.svg',
              sizes: '192x192',
              type: 'image/svg+xml',
            },
            {
              src: 'icon.svg',
              sizes: '512x512',
              type: 'image/svg+xml',
            },
            {
              src: 'icon.svg',
              sizes: '512x512',
              type: 'image/svg+xml',
              purpose: 'any maskable',
            },
          ],
        },
      })
    ],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
