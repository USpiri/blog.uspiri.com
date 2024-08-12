import { z, defineCollection } from "astro:content";

const post = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    date: z.date(),
    draft: z.boolean().default(false).optional(),
    snippet: z.boolean().default(true).optional(),
    description: z
      .string()
      .max(
        160,
        "For best SEO results, please keep the description under 160 characters.",
      ),
  }),
});

export const collections = {
  post,
};
