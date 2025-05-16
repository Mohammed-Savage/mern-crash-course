import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    open: true, // This will open the app in the browser when the server starts.
    proxy: {
      "/api": {
        target: "http://localhost:5000",
      },
    },
  },
});

// export default defineConfig({
//   plugins: [react()],
//   server: {
//     port: 5000, // This is the port I want to use for my app.
//     host: true, // This will allow the app to be accessed from other devices on the same network.
//     open: true, // This will open the app in the browser when the server starts.
//     proxy: {
//       "/api": {
//         target: "http://localhost:5000", // This is the target server for the proxy.
//         changeOrigin: true, // This will change the origin of the host header to the target URL.
//       },
//     },
//   },
// });


