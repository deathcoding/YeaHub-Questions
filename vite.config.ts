import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { visualizer } from "rollup-plugin-visualizer";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), visualizer({ open: true })],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (
            id.includes("highlight.js") ||
            id.includes("markdown-it") ||
            id.includes("dompurify")
          ) {
            return "vendor-markdown";
          }

          if (id.includes("node-modules")) {
            return "vendor-others";
          }
        },
      },
    },
  },
});
