// src/pages/llms-full.txt.ts
// Full content index for AI RAG (Retrieval-Augmented Generation) indexing.
import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { hubs } from "../config/hubs";
import { siteConfig } from "../config/site";

export const GET: APIRoute = async () => {
  const allEntries = await getCollection("learn");

  const articleEntries = allEntries
    .filter((e) => {
      const cleanId = e.id.replace(/\\/g, "/");
      return !cleanId.endsWith("_index.mdx") && !cleanId.endsWith("_pillar.mdx");
    })
    .sort((a, b) => {
      const da = a.data.publisheddate || "";
      const db = b.data.publisheddate || "";
      return db.localeCompare(da);
    });

  const clusterEntries = allEntries.filter((e) => {
    const cleanId = e.id.replace(/\\/g, "/");
    return cleanId.endsWith("_index.mdx");
  });

  const lines: string[] = [
    `# ${siteConfig.name} — Full Content Index`,
    ``,
    `> ${siteConfig.slogan}`,
    ``,
    `This file contains a structured index of all ${articleEntries.length} articles in the PhantomRank Content Hub,`,
    `organized by 5 primary content hubs and topic clusters. It is intended for AI indexing, RAG pipelines,`,
    `and machine-readable content discovery.`,
    ``,
    `Source: ${siteConfig.url}/learn`,
    `Full index: ${siteConfig.url}/llms.txt`,
    ``,
    `---`,
    ``,
  ];

  for (const hub of hubs) {
    const hubArticles = articleEntries.filter((a) => {
      const p = a.id.replace(/\\/g, "/").split("/");
      return p[0] === hub.slug;
    });

    if (hubArticles.length === 0) continue;

    lines.push(`# Content Hub: ${hub.title}`);
    lines.push(``);
    lines.push(`${hub.description}`);
    lines.push(`URL: ${siteConfig.url}/learn/${hub.slug}`);
    lines.push(``);

    const hubClusters = clusterEntries.filter((c) => {
      const cleanId = c.id.replace(/\\/g, "/");
      return cleanId.startsWith(`${hub.slug}/`);
    });

    const clusterSlugsInOrder = [...new Set(hubArticles.map((a) => a.id.replace(/\\/g, "/").split("/")[1]))];

    for (const clusterSlug of clusterSlugsInOrder) {
      const clusterIndex = hubClusters.find((c) => {
        const cleanId = c.id.replace(/\\/g, "/");
        return cleanId === `${hub.slug}/${clusterSlug}/_index.mdx`;
      });
      const clusterTitle = clusterIndex?.data?.title || clusterSlug.replace(/-/g, " ");
      const shortTitle = clusterTitle.includes(":") ? clusterTitle.split(":")[0].trim() : clusterTitle;
      const clusterDescription = clusterIndex?.data?.description || "";
      const clusterArticles = hubArticles.filter((a) => a.id.replace(/\\/g, "/").split("/")[1] === clusterSlug);

      lines.push(`## Topic Cluster: ${shortTitle}`);
      lines.push(``);
      if (clusterDescription) {
        lines.push(clusterDescription);
        lines.push(``);
      }
      lines.push(`URL: ${siteConfig.url}/learn/${hub.slug}/${clusterSlug}`);
      lines.push(`Articles: ${clusterArticles.length}`);
      lines.push(``);

      for (const article of clusterArticles) {
        const p = article.id.replace(/\\/g, "/").split("/");
        const slug = article.data.slug || p[p.length - 1].replace(/\.mdx$/, "");
        const articleUrl = `${siteConfig.url}/learn/${hub.slug}/${clusterSlug}/${slug}`;

        lines.push(`### ${article.data.title}`);
        lines.push(``);
        lines.push(`URL: ${articleUrl}`);
        if (article.data.publisheddate) lines.push(`Published: ${article.data.publisheddate}`);
        if (article.data.updateddate && article.data.updateddate !== article.data.publisheddate) {
          lines.push(`Updated: ${article.data.updateddate}`);
        }
        lines.push(``);
        if (article.data.description) {
          lines.push(article.data.description);
          lines.push(``);
        }
        if (article.data.keywords?.length) {
          lines.push(`Keywords: ${article.data.keywords.join(", ")}`);
          lines.push(``);
        }
        lines.push(`---`);
        lines.push(``);
      }
    }
  }

  lines.push(`# About PhantomRank`);
  lines.push(``);
  lines.push(siteConfig.description);
  lines.push(``);
  lines.push(`Founded: ${siteConfig.foundingDate}`);
  lines.push(`Website: ${siteConfig.url}`);
  lines.push(`Topics: ${siteConfig.knowsAbout.join(", ")}`);
  lines.push(``);
  lines.push(`PhantomRank monitors brand citations, share of voice, and sentiment across`);
  lines.push(`ChatGPT, Gemini, Claude, Perplexity, and Grok across 28 model variants.`);

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
};
