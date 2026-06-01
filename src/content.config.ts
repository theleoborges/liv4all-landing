import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/articles' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      author: z.string().default('Liv & Leo'),
      tags: z.array(z.string()).default([]),
      ogImage: image().optional(),
      draft: z.boolean().default(false),
      featured: z.boolean().default(false),
    }),
});

// Programmatic SEO/GEO "answers" layer — one search question per page.
// Hidden from site nav; discovered via Google + AI assistants. See
// docs/answers-worklist.md for the question pipeline.
const ANSWER_TOPICS = [
  'openclaw',
  'self-hosting',
  'ai-agents',
  'comparisons',
  'use-cases',
  'messaging',
  'security',
  'getting-started',
  'small-business',
] as const;

const ANSWER_INTENTS = ['comparison', 'informational', 'definitional', 'how-to'] as const;

const answers = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/answers' }),
  schema: () =>
    z.object({
      title: z.string(), // <h1> + <title> seed
      question: z.string(), // natural-language query → FAQPage.name
      answer: z.string(), // 1–2 sentence direct answer → FAQPage.acceptedAnswer + on-page lede
      description: z.string().max(160), // meta description (~150 char)
      topic: z.enum(ANSWER_TOPICS),
      intent: z.enum(ANSWER_INTENTS),
      datePublished: z.coerce.date(),
      updated: z.coerce.date().optional(),
      related: z.array(z.string()).default([]), // sibling answer slugs (validated at build by the route)
      draft: z.boolean().default(false),
    }),
});

export const collections = { articles, answers };
