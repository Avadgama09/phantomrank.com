// src/pages/llms.txt.ts
// Dynamic llms.txt — auto-generated from content collection at build time.
// Spec: https://llmstxt.org/
import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { hubs } from "../config/hubs";
import { siteConfig } from "../config/site";

export const GET: APIRoute = async () => {
  const allEntries = await getCollection("learn");

  // Build cluster map with normalized path checking
  const clusterEntries = allEntries.filter((e) => {
    const cleanId = e.id.replace(/\\/g, "/");
    return cleanId.endsWith("_index.mdx");
  });
  const articleEntries = allEntries.filter((e) => {
    const cleanId = e.id.replace(/\\/g, "/");
    return !cleanId.endsWith("_index.mdx") && !cleanId.endsWith("_pillar.mdx");
  });

  interface ArticleEntry {
    slug: string;
    title: string;
    href: string;
  }

  interface ClusterEntry {
    clusterSlug: string;
    title: string;
    href: string;
    description: string;
    articles: ArticleEntry[];
  }

  interface HubMap {
    [hubSlug: string]: ClusterEntry[];
  }

  const hubMap: HubMap = {};

  for (const hub of hubs) {
    hubMap[hub.slug] = [];
  }

  for (const cluster of clusterEntries) {
    const cleanId = cluster.id.replace(/\\/g, "/");
    const parts = cleanId.split("/");
    const hubSlug = parts[0];
    const clusterSlug = parts[1];

    if (!hubMap[hubSlug]) continue;

    const clusterArticles: ArticleEntry[] = articleEntries
      .filter((a) => {
        const p = a.id.replace(/\\/g, "/").split("/");
        return p[0] === hubSlug && p[1] === clusterSlug;
      })
      .map((a) => {
        const p = a.id.replace(/\\/g, "/").split("/");
        const slug = a.data.slug || p[p.length - 1].replace(/\.mdx$/, "");
        return {
          slug,
          title: a.data.title,
          href: `${siteConfig.url}/learn/${hubSlug}/${clusterSlug}/${slug}`,
        };
      })
      .sort((a, b) => a.title.localeCompare(b.title));

    const fullTitle = cluster.data.title || clusterSlug.replace(/-/g, " ");
    const shortTitle = fullTitle.includes(":") ? fullTitle.split(":")[0].trim() : fullTitle;

    hubMap[hubSlug].push({
      clusterSlug,
      title: shortTitle,
      href: `${siteConfig.url}/learn/${hubSlug}/${clusterSlug}`,
      description: cluster.data.description || "",
      articles: clusterArticles,
    });
  }

  for (const hub of hubs) {
    hubMap[hub.slug]?.sort((a, b) => a.title.localeCompare(b.title));
  }

  const totalArticles = articleEntries.length;
  const totalClusters = clusterEntries.length;

  const lines: string[] = [
    `# ${siteConfig.name}`,
    ``,
    `> ${siteConfig.slogan}`,
    ``,
    `PhantomRank is built for marketing agencies and brands who need to track and improve how they appear in AI-generated answers. The platform monitors citations, share of voice, and brand sentiment across ChatGPT, Gemini, Claude, Perplexity, and Grok.`,
    ``,
    `## Core Pages`,
    ``,
    `- [Homepage](${siteConfig.url}/): ${siteConfig.slogan}`,
    `- [Features](${siteConfig.url}/features): AI visibility tracking tools including brand citation monitoring, competitor benchmarking, multi-engine scanning, and white-label reporting.`,
    `- [Pricing](${siteConfig.url}/pricing): Subscription plans from free to enterprise, denominated in INR, for agencies and brands.`,
    `- [About PhantomRank](${siteConfig.url}/about): Why PhantomRank was built, what it measures, and how it differs from traditional SEO tools.`,
    `- [Sign Up](${siteConfig.url}/signup): Request access to start tracking brand AI search visibility.`,
    ``,
    `## Learn Hub — 5 Primary Content Hubs`,
    ``,
    `- [Learn Hub Index](${siteConfig.url}/learn): ${totalArticles} articles across ${totalClusters} topic clusters organized into 5 content hubs covering AI Visibility Tracking, GEO, AEO, AI Search Agency Strategy, and AI-Powered SEO.`,
    ``,
  ];

  for (const hub of hubs) {
    const clusters = hubMap[hub.slug] || [];
    if (clusters.length === 0) continue;

    const hubArticleCount = clusters.reduce((sum, c) => sum + c.articles.length, 0);

    lines.push(`### Content Hub: ${hub.title}`);
    lines.push(``);
    lines.push(`${hub.description}`);
    lines.push(``);
    lines.push(`- [${hub.title} — Pillar Page](${siteConfig.url}/learn/${hub.slug}): ${clusters.length} clusters, ${hubArticleCount} articles.`);
    lines.push(``);

    for (const cluster of clusters) {
      lines.push(`#### Topic Cluster: ${cluster.title}`);
      lines.push(``);
      lines.push(`- [${cluster.title}](${cluster.href}): ${cluster.description || `Articles in the ${cluster.title} cluster.`}`);
      lines.push(``);

      if (cluster.articles.length > 0) {
        for (const article of cluster.articles) {
          lines.push(`  - [${article.title}](${article.href})`);
        }
        lines.push(``);
      }
    }
  }

  lines.push(`## Key Definitions`);
  lines.push(``);
  lines.push(`- **AI Visibility**: How often and in what context a brand appears when users ask AI assistants for recommendations.`);
  lines.push(`- **Share of Synthesis**: The percentage of AI-generated answers in a category that cite a specific brand as a source.`);
  lines.push(`- **Entry-Point Dominance**: The advantage gained by being the first brand named in a multi-turn AI chat session.`);
  lines.push(`- **GEO (Generative Engine Optimization)**: The practice of optimising content to earn organic citations in AI-generated answers across platforms like ChatGPT and Perplexity.`);
  lines.push(`- **AEO (Answer Engine Optimization)**: Structuring content so AI answer engines like Google AI Overviews, featured snippets, and voice assistants can extract, summarise, and cite it.`);
  lines.push(``);
  lines.push(`## Index Options`);
  lines.push(``);
  lines.push(`- [Full Content Index](${siteConfig.url}/llms-full.txt): Complete text content of all Learn Hub articles for AI indexing and RAG.`);
  lines.push(`- [Sitemap](${siteConfig.url}/sitemap-index.xml): XML sitemap for all pages.`);
  lines.push(`- [Robots](${siteConfig.url}/robots.txt): Crawler access rules.`);

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
};
