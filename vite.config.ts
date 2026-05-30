import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Use relative base for Vercel (root) and '/Tariva-Tech/' for GitHub Pages
  base: process.env.VERCEL ? '/' : '/Tariva-Tech/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
