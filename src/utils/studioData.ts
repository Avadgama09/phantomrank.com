// src/utils/studioData.ts
// Structured Data Source of Truth for PhantomRank Studio

export interface StudioNavCategory {
  id: string;
  number: string;
  name: string;
  description: string;
}

export interface StudioFAQItem {
  question: string;
  answer: string;
}

// ── 1. Compact Service Navigation (Exact Order 01-07) ──
export const studioNavCategories: StudioNavCategory[] = [
  {
    id: "ai-visibility",
    number: "01",
    name: "AI Visibility & Model Optimisation",
    description: "Improve how AI search systems understand, describe, mention and cite your brand.",
  },
  {
    id: "websites-conversion",
    number: "02",
    name: "Websites & Conversion",
    description: "Build faster, clearer websites and landing pages that are ready for search, AI and real customers.",
  },
  {
    id: "seo",
    number: "03",
    name: "SEO",
    description: "Technical, on-page, local, off-page and platform-specific search work.",
  },
  {
    id: "content-strategy",
    number: "04",
    name: "Content Strategy & Production",
    description: "Build the pages, proof and answers customers actually look for.",
  },
  {
    id: "authority-distribution",
    number: "05",
    name: "Authority, Distribution & Seeding",
    description: "Strengthen the third-party signals, sources and communities around your brand.",
  },
  {
    id: "research-strategy",
    number: "06",
    name: "Research & Growth Strategy",
    description: "Find the gaps, competitors, opportunities and priorities before spending on execution.",
  },
  {
    id: "tracking-advisory",
    number: "07",
    name: "Tracking, Reporting & Advisory",
    description: "Keep work tied to what is changing across search, AI visibility and your market.",
  },
];

// ── 2. Frequently Asked Questions ──
export const studioFAQs: StudioFAQItem[] = [
  {
    question: "Is Studio separate from PhantomRank?",
    answer: "No. PhantomRank is the main search intelligence product, and Studio is its execution arm. PhantomRank provides the data, and Studio helps clients act on it with websites, SEO, content, and authority work.",
  },
  {
    question: "Do I need to be a PhantomRank customer to work with Studio?",
    answer: "No. While PhantomRank intelligence powers our diagnostic insights, you can work with Studio directly for a website rebuild, SEO project, content strategy, or technical audit.",
  },
  {
    question: "Can you guarantee AI citations or recommendations?",
    answer: "No. We do not offer guaranteed AI recommendations, fixed rankings, or black-box hacks. We focus on empirical measurement and improving your technical structure, content depth, and credible external sources.",
  },
  {
    question: "Can you work with our existing developer, content team or agency?",
    answer: "Yes. We frequently collaborate with internal marketing teams, developers, and existing agencies—providing the strategy, briefs, or technical specs while working alongside your team to execute.",
  },
  {
    question: "Can we start with one defined project?",
    answer: "Yes. Studio engagements frequently start with a single defined project—such as a website rebuild, technical SEO audit & fix, content cluster rollout, or AI visibility diagnostic.",
  },
];
