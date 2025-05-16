import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5000, // This is the port I want to use for my app.
    host: true, // This will allow the app to be accessed from other devices on the same network.
    open: true, // This will open the app in the browser when the server starts.
    proxy: {
      "/api": {
        target: "http://localhost:5000", // This is the target server for the proxy.
      },
    },
  },
});





// This is my first config file that I moved on from to hard bind the port to 5000.
// import path from 'path';

// export default defineConfig({
//   plugins: [react()],
//   resolve: {
//     alias: {
//       '@': path.resolve(__dirname, './src'),
//     },
//   },
// });