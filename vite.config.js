import { defineConfig } from "vite";
import { createHtmlPlugin } from "vite-plugin-html";
import pxtorem from "postcss-pxtorem";
import cssnano from "cssnano";

export default defineConfig({
  root: "./src",
  build: {
    outDir: "../dist",
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
      mangle: {
        toplevel: true,
        properties: {
          regex: /^_/,
        },
      },
      format: {
        comments: false,
      },
    },
  },
  plugins: [
    createHtmlPlugin({
      minify: true,
    }),
  ],
  css: {
    postcss: {
      plugins: [
        pxtorem({
          rootValue: 16,
          propList: ["*"],
          unitPrecision: 5,
        }),
        cssnano({
          preset: "default",
        }),
      ],
    },
  },
});
