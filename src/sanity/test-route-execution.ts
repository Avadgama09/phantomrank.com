import { sanityFetch } from "./lib/client.js";
import { PILLAR_QUERY, ALL_CLUSTERS_QUERY, CLUSTER_BY_SLUG_QUERY } from "./lib/queries.js";

async function testRoutes() {
  console.log("=== ROUTE 1: /learn/ai-seo/ ===");
  const pillar = await sanityFetch<any>({
    query: PILLAR_QUERY,
    params: { slug: "ai-seo" },
  });
  const clusters = await sanityFetch<any[]>({
    query: ALL_CLUSTERS_QUERY,
    params: { pillarSlug: "ai-seo" },
  });
  console.log("Pillar title:", pillar?.title);
  console.log("Clusters count:", clusters?.length);

  console.log("\n=== ROUTE 2: /learn/ai-seo/foundations/ ===");
  const foundationsCluster = await sanityFetch<any>({
    query: CLUSTER_BY_SLUG_QUERY,
    params: { pillarSlug: "ai-seo", clusterSlug: "foundations" },
  });
  console.log("Foundations title:", foundationsCluster?.title);

  console.log("\n=== ROUTE 3: /learn/ai-seo/measurement/ ===");
  const measurementCluster = await sanityFetch<any>({
    query: CLUSTER_BY_SLUG_QUERY,
    params: { pillarSlug: "ai-seo", clusterSlug: "measurement" },
  });
  console.log("Measurement title:", measurementCluster?.title);
}

testRoutes().catch(console.error);
