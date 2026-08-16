// src/content/config.ts
import { defineCollection, z } from 'astro:content';

/* ──────────────────────────────────────────────
   LEARN collection — pillars, clusters & MDX articles
   ────────────────────────────────────────────── */
const learnCollection = defineCollection({
  type: 'content',
  schema: z
    .object({
      pageType: z.enum(['pillar', 'cluster', 'article']).default('article'),
      title: z.string(),
      description: z.string().optional(),
      excerpt: z.string().optional(),
      slug: z.string().optional(),
      cluster: z
        .enum([
          'foundations',
          'measurement',
          'diagnosis',
          'optimisation',
          'operations',
          'evidence',
        ])
        .optional(),
      clusterSlug: z.string().optional(),
      topics: z.array(z.string()).default(['ai-seo', 'ai-visibility']),
      parentPillars: z.array(z.string()).optional(),
      primaryKeyword: z.string().optional(),
      secondaryKeywords: z.array(z.string()).optional(),
      canonicalUrl: z.string().optional(),
      targetDepth: z.number().optional(),
      order: z.number().optional(),
      author: z.string().default('PhantomRank Editorial Team'),
      publishedDate: z.string().optional(),
      updatedDate: z.string().optional(),
      seo: z
        .object({
          title: z.string(),
          description: z.string(),
        })
        .optional(),
      featuredImage: z
        .object({
          src: z.string(),
          alt: z.string(),
        })
        .optional(),
      answerSummary: z.string().optional(),
      contentType: z.string().default('guide'),
      platforms: z.array(z.string()).optional(),
      searchIntent: z.string().optional(),
      dataPoints: z.any().optional(),
      draft: z.boolean().default(false),
    })
    .passthrough(),
});

export const collections = {
  learn: learnCollection,
};