import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    category: z.enum(['Web Development', 'Machine Learning', 'Data Science', 'Embedded Systems']),
    description: z.string(),
    image: z.string(),
    techStack: z.array(z.string()),
    startDate: z.string().optional(),
    endDate: z.string().optional(),
    repoUrl: z.string().url().optional(),
    reportUrl: z.string().optional(),
    demoUrl: z.string().url().optional(),
  }),
});

const publications = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/publications' }),
  schema: z.object({
    title: z.string(),
    conference: z.string(),
    year: z.string(),
    authors: z.array(z.string()),
    description: z.string(),
    paperUrl: z.string().url().optional(),
    repoUrl: z.string().url().optional(),
  }),
});

const experiences = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/experiences' }),
  schema: z.object({
    order: z.number(),
    period: z.string(),
    title: z.string(),
    institution: z.string(),
    description: z.string(),
    type: z.enum(['education', 'work', 'research']),
    tags: z.array(z.string()),
  }),
});

export const collections = { projects, publications, experiences };
