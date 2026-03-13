// src/content/config.ts
import { defineCollection, z } from 'astro:content';

/* ──────────────────────────────────────────────
   LEARN collection — pillars, clusters & articles
   ────────────────────────────────────────────── */
const learnCollection = defineCollection({
  type: 'content',
  schema: z.object({
    // Shared across all types
    type: z.enum(['pillar', 'cluster', 'article']).default('article'),
    title: z.string(),
    description: z.string(),
    author: z.string().default('phantomrank-team'),
    publisheddate: z.string(),
    updateddate: z.string(),
    seo: z.object({
      title: z.string(),
      description: z.string(),
    }),
    featuredimage: z.object({
      src: z.string(),
      alt: z.string(),
    }).optional(),
    schematype: z.string().default('Article'),

    // Pillar & cluster fields
    hubslug: z.string().optional(),
    primarykeyword: z.string().optional(),
    secondarykeywords: z.array(z.string()).optional(),
    targetwordcount: z.number().optional(),
    phase: z.number().optional(),
    status: z.string().optional(),
    order: z.number().optional(),

    // Article-specific fields
    slug: z.string().optional(),
    hub: z.string().optional(),
    cluster: z.string().optional(),
    category: z.string().optional(),
    keywords: z.array(z.string()).optional(),
    relatedLinks: z.array(z.object({
      label: z.string(),
      href: z.string(),
    })).optional(),
  }),
});

/* ──────────────────────────────────────────────
   USE-CASES collection
   ────────────────────────────────────────────── */
const useCasesCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      industry: z.string(),
      company: z.object({
        name: z.string(),
        website: z.string().url().optional(),
        logo: image().optional(),
      }),
      feature: z.enum([
        'ai-visibility-tracker',
        'industry-metrics',
        'community-manager',
        'agentic-crm',
        'budget-optimization',
        'content-creative-production',
        'content-performance-prediction',
        'hyper-personalized-engines',
        'influencer-vetting',
        'trend-prediction',
      ]),
      persona: z.array(
        z.enum([
          'Agency Owner',
          'Performance Marketer',
          'Brand Manager',
          'Founder',
          'Strategy Team',
        ]),
      ),
      goal: z.array(
        z.enum([
          'Win Clients',
          'Retain Clients',
          'Optimize Campaigns',
          'Protect Brand',
          'Report to Clients',
        ]),
      ),
      motion: z.enum([
        'Strategy',
        'Reporting',
        'Optimization',
        'Intelligence',
        'Pitch',
        'Launch',
        'Risk',
      ]),
      hero_image: image().optional(),
      og_image: image().optional(),
      screenshots: z.array(
        z.object({
          src: image(),
          alt: z.string(),
          caption: z.string().optional(),
        }),
      ).optional(),
      video: z.object({
        url: z.string().url(),
        title: z.string().optional(),
        thumbnail: image().optional(),
      }).optional(),
      seo: z.object({
        title: z.string().optional(),
        description: z.string().optional(),
      }).optional(),
      draft: z.boolean().default(true),
      published_date: z.date().optional(),
      updated_date: z.date().optional(),
    }),
});

/* ──────────────────────────────────────────────
   RESOURCES collection (legacy — keep for now)
   ────────────────────────────────────────────── */
const resourcesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    topic: z.string(),
    type: z.enum([
      'article',
      'guide',
      'checklist',
      'research',
      'whitepaper',
      'community',
    ]),
    author: z.string().default('PhantomRank'),
    date: z.date().optional(),
    draft: z.boolean().default(true),
  }),
});

export const collections = {
  learn: learnCollection,
  'use-cases': useCasesCollection,
  resources: resourcesCollection,
};