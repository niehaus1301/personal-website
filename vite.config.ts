import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    include: [
      "@emotion/react",
      "@emotion/styled",
      "@mui/joy/Tooltip",
      "@mui/joy/ListSubheader",
      "@mui/material",
      "@mui/joy",
    ],
  },
  plugins: [
    svgr(),
    react({
      jsxImportSource: "@emotion/react",
      babel: {
        plugins: ["@emotion/babel-plugin"],
      },
    }),
    tsconfigPaths(),
  ],
  resolve: {
    alias: {
      "@mui/material": "@mui/joy",
    },
  },
});
