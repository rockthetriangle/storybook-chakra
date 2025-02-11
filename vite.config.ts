import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// Enable Chakra UI debugging
process.env.DEBUG = "chakra";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  optimizeDeps: {
    include: ["@chakra-ui/react"],
  },
  css: {
    postcss: {},
  },
});
