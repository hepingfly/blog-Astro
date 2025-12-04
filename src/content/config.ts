import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: () =>
    z.object({
      // 必填字段
      title: z.string(),
      description: z.string(),
      pubDatetime: z.date(),

      // 可选字段
      modDatetime: z.date().optional().nullable(),
      author: z.string().default("Site Owner"),
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),
      tags: z.array(z.string()).default(["others"]),
      ogImage: z.string().optional(),
      canonicalURL: z.string().optional(),
      readingTime: z.string().optional(),
    }),
});

export const collections = { blog };
