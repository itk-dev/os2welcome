import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslintPlugin from "vite-plugin-eslint";
import json5Plugin from "vite-plugin-json5";
import tailwindcss from "tailwindcss";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    minify: false,
  },
  plugins: [
    react(),
    json5Plugin(),
    tailwindcss(),
    eslintPlugin({
      cache: false,
      include: ["./src/**/*.js", "./src/**/*.jsx"],
      exclude: [],
    }),
  ],

  server: {
    open: false,
    strictPort: true,
    port: 3000,
    hmr: {
      protocol: "ws",
    },
  },
});
