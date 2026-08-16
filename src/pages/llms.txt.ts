// src/pages/llms.txt.ts
// Dynamic llms.txt — auto-generated from content collection at build time.
// Spec: https://llmstxt.org/
import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { siteConfig } from "../config/site";

export const GET: APIRoute = async () => {
  const allEntries = await getCollection("learn", (entry) => !entry.data.draft);

  const clusterEntries = allEntries.filter((e) => e.data.pageType === "cluster");
  const articleEntries = allEntries.filter((e) => e.data.pageType === "article");

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
    `## Learn Hub`,
    ``,
    `- [Learn Hub Index](${siteConfig.url}/learn): ${totalArticles} articles across ${totalClusters} topic clusters.`,
    `- [AI Visibility Pillar](${siteConfig.url}/learn/ai-visibility): Category overview for brand visibility in conversational search.`,
    `- [AI SEO Pillar](${siteConfig.url}/learn/ai-seo): Strategy and optimization guides for generative search engines.`,
    ``,
  ];

  for (const cluster of clusterEntries) {
    const clusterSlug = cluster.data.clusterSlug || cluster.slug.split("/").pop() || cluster.slug;
    const clusterTitle = cluster.data.title;
    const clusterDescription = cluster.data.description || "";
    const articlesInCluster = articleEntries.filter((a) => a.data.cluster === clusterSlug);

    lines.push(`### Topic Cluster: ${clusterTitle}`);
    lines.push(``);
    lines.push(`- [${clusterTitle}](${siteConfig.url}/learn/${clusterSlug}): ${clusterDescription}`);
    lines.push(``);

    if (articlesInCluster.length > 0) {
      for (const article of articlesInCluster) {
        const slug = article.slug.split("/").pop() || article.slug;
        lines.push(`  - [${article.data.title}](${siteConfig.url}/learn/${clusterSlug}/${slug})`);
      }
      lines.push(``);
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
