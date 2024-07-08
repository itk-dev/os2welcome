import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslintPlugin from "vite-plugin-eslint";
import json5Plugin from "vite-plugin-json5";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    json5Plugin(),
    eslintPlugin({
      cache: false,
      include: ["./src/**/*.js", "./src/**/*.jsx"],
      exclude: [],
    }),
  ],
});
