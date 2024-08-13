import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
// import react from "@astrojs/react";
import remarkMath from "remark-math";
import mdx from "@astrojs/mdx";
import node from "@astrojs/node";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://beta4.vahry.my.id",
  integrations: [
    tailwind(),
    // react(),
    mdx({
      remarkPlugins: [remarkMath],
    }),
    sitemap(),
  ],
  output: "hybrid",
  adapter: node({
    mode: "standalone",
  }),
  server: {
    port: 3000,
    host: true,
  },
  experimental: {
    serverIslands: true,
  },
  vite: {
    preview: {
      port: 3000,
      host: true,
    },
  },
});
