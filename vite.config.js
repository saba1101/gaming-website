import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],

  server: {
    port: 5005,
    open: true, 
  },

  build: {
    outDir: 'dist',
    minify: 'terser',
    sourcemap: true,
  },

  resolve: {
    alias: {
      '@': '/src',
    },
  },

  optimizeDeps: {
    include: ['react', 'react-dom'],
  },

  css: {
    modules: true,
    preprocessorOptions: {
      scss: {
        additionalData: `
            @import "@/styles/_variables.scss";
            @import "@/styles/_mixins.scss";
            @import "@/styles/_tokens.scss";
        `,
      },
    },
  },
});
