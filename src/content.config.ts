import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const docs = defineCollection({
  loader: glob({ pattern: '[!._]*.md', base: './src/content/docs' }),
  schema: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    badge: z.string().optional(),
    sidebar: z.any().optional(),
    pageClass: z.string().optional(),
  }),
});

export const collections = { docs };
