// src/config/hubs.ts — Single source of truth for hub metadata

export interface Hub {
  slug: string;
  title: string;
  description: string;
  icon: string;
}

export const hubs: Hub[] = [
  {
    slug: "ai-visibility-tracking",
    title: "AI Visibility Tracking",
    description:
      "Learn how to track brand mentions, citations, and share of voice across AI search engines.",
    icon: "📡",
  },
  {
    slug: "generative-engine-optimization",
    title: "Generative Engine Optimization",
    description:
      "Understand how to optimize content for ChatGPT, Perplexity, Gemini, and other answer engines.",
    icon: "⚡",
  },
  {
    slug: "answer-engine-optimization",
    title: "Answer Engine Optimization",
    description:
      "Explore AI Overviews, featured snippets, schema markup, and direct-answer SEO strategy.",
    icon: "🎯",
  },
  {
    slug: "ai-search-agency-strategy",
    title: "AI Search Agency Strategy",
    description:
      "Agency-focused playbooks for selling, reporting, and operationalizing AI visibility services.",
    icon: "🏢",
  },
  {
    slug: "ai-powered-seo",
    title: "AI-Powered SEO",
    description:
      "Guides, examples, tools, workflows, and practical tutorials for modern AI-assisted SEO.",
    icon: "🤖",
  },
];

export function getHubBySlug(slug: string): Hub | undefined {
  return hubs.find((h) => h.slug === slug);
}