import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import customTheme from "./src/assets/custom-theme.json";
import markdownIntegration from "@astropub/md";

import mdx from "@astrojs/mdx";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    mdx({
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex],
    }),
    markdownIntegration(),
  ],
  site: "https://blog.uspiri.com",
  base: "/",
  markdown: {
    shikiConfig: {
      themes: {
        light: "github-light",
        dark: customTheme,
      },
    },
  },
});
