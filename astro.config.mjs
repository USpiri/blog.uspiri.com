import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import rehypePrettyCode from "rehype-pretty-code";

import mdx from "@astrojs/mdx";

// import minimalTheme from './src/assets/minimal-dark-theme.json';

// https://astro.build/config
export default defineConfig({
  site: "https://blog.uspiri.com",
  base: "/",
  integrations: [tailwind(), sitemap(), mdx()],
  markdown: {
    syntaxHighlight: false,
    rehypePlugins: [
      [
        rehypePrettyCode,
        {
          theme: "dark-plus",
          keepBackground: false,
        },
      ],
    ],
  },
});

