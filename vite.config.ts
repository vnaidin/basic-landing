import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// Set base for GitHub Pages deployment
export default defineConfig({
  base: "/wallet-landing/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
