import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const projectCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    category: z.enum(['Fun', 'Projects', 'Brands']).default('Fun'),
    description: z.string(),
    sortDate: z.string().optional(),
    date: z.string().optional(),
    coverImage: z.string().optional(),
    maskImage: z.string().optional(),
    floatingCardImage: z.string().optional(),
    role: z.string().optional(),
    link: z.string().optional(),
    alignRight: z.boolean().default(false),
    marginTop: z.number().optional(),
    fitImage: z.boolean().default(false),
  }),
});

export const collections = {
  'projects': projectCollection,
};
