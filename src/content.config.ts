import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projectSchema = ({ image }: { image: Function }) => z.object({
  title: z.string(),
  category: z.enum(['Web Development', 'Machine Learning', 'Data Science', 'Embedded Systems']),
  description: z.string(),
  image: image(),
  techStack: z.array(z.string()),
  startDate: z.string().optional(),
  endDate: z.string().optional(),
  repoUrl: z.string().url().optional(),
  reportUrl: z.string().optional(),
  demoUrl: z.string().url().optional(),
});

const publicationSchema = z.object({
  title: z.string(),
  conference: z.string(),
  year: z.string(),
  authors: z.array(z.string()),
  description: z.string(),
  paperUrl: z.string().url().optional(),
  repoUrl: z.string().url().optional(),
});

const experienceSchema = z.object({
  order: z.number(),
  period: z.string(),
  title: z.string(),
  institution: z.string(),
  description: z.string(),
  type: z.enum(['education', 'work', 'research']),
  tags: z.array(z.string()),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: projectSchema,
});

const publications = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/publications' }),
  schema: publicationSchema,
});

const experiences = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/experiences' }),
  schema: experienceSchema,
});

export const collections = {
  projects,
  publications,
  experiences,
};
