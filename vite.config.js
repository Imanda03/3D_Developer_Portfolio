import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // three.js is one lazy chunk, fetched only once a 3D scene mounts.
    chunkSizeWarningLimit: 1400,
    rollupOptions: {
      output: {
        // Keep the 3D stack out of the entry chunk so text paints before WebGL loads.
        manualChunks(id) {
          if (!id.includes("node_modules")) return;
          if (/[\\/](three|three-stdlib|@react-three|troika-[^\\/]+|maath|camera-controls|three-mesh-bvh)[\\/]/.test(id)) return "three";
          if (id.includes("framer-motion") || id.includes("motion-dom") || id.includes("motion-utils")) return "motion";
        },
      },
    },
  },
});
