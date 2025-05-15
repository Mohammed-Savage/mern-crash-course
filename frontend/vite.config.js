import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vite.dev/config/
// This was the original code vite loaded with:
// export default defineConfig({
//   plugins: [react()],
// })

// This is what I added to make it work with paths:
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});