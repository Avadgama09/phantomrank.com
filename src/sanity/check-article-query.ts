import { sanityFetch } from "./lib/client.js";
import { ALL_PUBLISHED_ARTICLES_QUERY } from "./lib/queries.js";

async function checkSanity() {
  console.log("=== CHECKING SANITY FOR ARTICLES ===");
  // Query 1: All documents regardless of type
  const rawDocs = await sanityFetch<any[]>({
    query: `*[]{ _id, _type, title, slug, publishedAt, primaryCluster, majorTopics, author, "isDraft": _id in path('drafts.**') }`,
  });
  console.log("Raw documents in dataset:", JSON.stringify(rawDocs, null, 2));

  // Query 2: Exact query used by /learn
  const publishedArticles = await sanityFetch<any[]>({
    query: ALL_PUBLISHED_ARTICLES_QUERY,
  });
  console.log("Articles returned by ALL_PUBLISHED_ARTICLES_QUERY:", JSON.stringify(publishedArticles, null, 2));
}

checkSanity().catch(console.error);
