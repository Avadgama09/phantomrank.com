import { sanityFetch } from "./lib/client.js";
import { ALL_CLUSTERS_QUERY } from "./lib/queries.js";

async function debugStaticPaths() {
  console.log("=== CHECKING SANITY getStaticPaths() FOR CLUSTERS ===");
  const clusters = await sanityFetch<any[]>({
    query: ALL_CLUSTERS_QUERY,
    params: { pillarSlug: "ai-seo" },
  });

  const clusterPaths = (clusters || []).map((c) => ({
    params: { cluster: c.slug },
  }));

  console.log("Cluster paths returned by getStaticPaths():", JSON.stringify(clusterPaths, null, 2));
}

debugStaticPaths().catch(console.error);
