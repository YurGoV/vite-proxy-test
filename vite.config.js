import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/vite-proxy-test",
  server: {
    proxy: {
      "/api": {
        target: "https://public.api.openprocurement.org", // Replace with your API URL
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  plugins: [react()],
});
