// src/pages/llms-full.txt.ts
// Full content index for AI RAG (Retrieval-Augmented Generation) indexing.
import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { siteConfig } from "../config/site";

export const GET: APIRoute = async () => {
  const allEntries = await getCollection("learn", (entry) => !entry.data.draft);

  const articleEntries = allEntries
    .filter((e) => e.data.pageType === "article")
    .sort((a, b) => {
      const da = a.data.publishedDate || "";
      const db = b.data.publishedDate || "";
      return db.localeCompare(da);
    });

  const lines: string[] = [
    `# ${siteConfig.name} — Full Content Index`,
    ``,
    `> ${siteConfig.slogan}`,
    ``,
    `This file contains a structured index of all ${articleEntries.length} articles in the PhantomRank Content Hub,`,
    `organized by content hubs and topic clusters. It is intended for AI indexing, RAG pipelines,`,
    `and machine-readable content discovery.`,
    ``,
    `Source: ${siteConfig.url}/learn`,
    `Full index: ${siteConfig.url}/llms.txt`,
    ``,
    `---`,
    ``,
  ];

  for (const article of articleEntries) {
    const clusterSlug = article.data.cluster || "foundations";
    const slug = article.slug.split("/").pop() || article.slug;
    const articleUrl = `${siteConfig.url}/learn/${clusterSlug}/${slug}`;

    lines.push(`### ${article.data.title}`);
    lines.push(``);
    lines.push(`URL: ${articleUrl}`);
    if (article.data.publishedDate) lines.push(`Published: ${article.data.publishedDate}`);
    if (article.data.updatedDate && article.data.updatedDate !== article.data.publishedDate) {
      lines.push(`Updated: ${article.data.updatedDate}`);
    }
    lines.push(``);
    if (article.data.description || article.data.excerpt) {
      lines.push(article.data.description || article.data.excerpt || "");
      lines.push(``);
    }
    if (article.data.primaryKeyword) {
      const keywords = [article.data.primaryKeyword, ...(article.data.secondaryKeywords || [])];
      lines.push(`Keywords: ${keywords.join(", ")}`);
      lines.push(``);
    }
    lines.push(`---`);
    lines.push(``);
  }

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
