import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import customTheme from "./src/assets/custom-theme.json";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx()],
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
