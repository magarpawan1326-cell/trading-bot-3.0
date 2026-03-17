import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    sourcemap: false,
    target: 'esnext',
    minify: 'terser',
    terserOptions: {
      compress: {
        dropConsole: true,
      },
    },
    chunkSizeWarningLimit: 500,
  },
  optimizeDeps: {
    include: ['some-package']
  },
});