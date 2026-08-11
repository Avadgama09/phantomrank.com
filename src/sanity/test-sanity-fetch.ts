import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "ppkytbjt",
  dataset: "production",
  apiVersion: "2026-07-01",
  useCdn: false,
});

async function main() {
  console.log("--- TEST 1: PILLAR_QUERY ---");
  const pillar = await client.fetch(`
    *[_type == "pillar" && slug.current == $slug && !(_id in path('drafts.**'))][0]{
      _id,
      title,
      "slug": slug.current,
      icon,
      shortDescription,
      introduction,
      primaryKeyword,
      order,
      seo,
      heroImage
    }
  `, { slug: "ai-seo" });
  console.log("Pillar result:", JSON.stringify(pillar, null, 2));

  console.log("\n--- TEST 2: ALL_CLUSTERS_QUERY ---");
  const clusters = await client.fetch(`
    *[_type == "cluster" && pillar->slug.current == $pillarSlug && !(_id in path('drafts.**'))] | order(order asc) {
      _id,
      title,
      "slug": slug.current,
      order,
      icon,
      shortDescription,
      primaryKeyword,
      "articleCount": count(*[_type in ["article", "researchStudy"] && primaryCluster._ref == ^._id && !(_id in path('drafts.**'))]),
      heroImage
    }
  `, { pillarSlug: "ai-seo" });
  console.log("Clusters result:", JSON.stringify(clusters, null, 2));

  console.log("\n--- TEST 3: CLUSTER_BY_SLUG_QUERY (foundations) ---");
  const foundations = await client.fetch(`
    *[_type == "cluster" && slug.current == $clusterSlug && pillar->slug.current == $pillarSlug && !(_id in path('drafts.**'))][0]{
      _id,
      title,
      "slug": slug.current,
      order,
      icon,
      shortDescription,
      introduction,
      primaryKeyword,
      seo,
      heroImage,
      "pillar": pillar->{
        title,
        "slug": slug.current
      }
    }
  `, { pillarSlug: "ai-seo", clusterSlug: "foundations" });
  console.log("Foundations cluster result:", JSON.stringify(foundations, null, 2));
}

main().catch(console.error);
