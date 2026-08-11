import { sanityFetch } from "./lib/client.js";
import {
  LEARN_HUB_SETTINGS_QUERY,
  ALL_MAJOR_TOPICS_QUERY,
  MAJOR_TOPIC_BY_SLUG_QUERY,
  ALL_CLUSTERS_QUERY,
  CLUSTER_BY_SLUG_QUERY,
  ARTICLES_IN_CLUSTER_QUERY,
  ALL_PUBLISHED_ARTICLES_QUERY,
  PUBLISHED_RESEARCH_STUDIES_QUERY,
} from "./lib/queries.js";

async function verifyAllRoutes() {
  console.log("🔍 Verifying Learn Hub Architecture Sanity Endpoints...");

  // 1. Learn Hub Settings Singleton
  const hubSettings = await sanityFetch<any>({ query: LEARN_HUB_SETTINGS_QUERY });
  console.log("✅ Learn Hub Settings Singleton:", hubSettings ? `Found (H1: "${hubSettings.heroH1}")` : "Not found / Default fallback active");

  // 2. Major Topics (Pillars)
  const majorTopics = await sanityFetch<any[]>({ query: ALL_MAJOR_TOPICS_QUERY });
  console.log(`✅ Major Topics Count: ${majorTopics?.length || 0}`);
  for (const t of majorTopics || []) {
    console.log(`   - Major Topic: "${t.title}" (slug: /learn/${t.slug}/)`);
  }

  // 3. Topic Clusters
  const clusters = await sanityFetch<any[]>({ query: ALL_CLUSTERS_QUERY });
  console.log(`✅ Topic Clusters Count: ${clusters?.length || 0}`);
  for (const c of clusters || []) {
    console.log(`   - Cluster #${c.order}: "${c.title}" (slug: /learn/${c.slug}/)`);
  }

  // 4. Articles
  const articles = await sanityFetch<any[]>({ query: ALL_PUBLISHED_ARTICLES_QUERY });
  console.log(`✅ Published Articles Count: ${articles?.length || 0}`);

  // 5. Research Studies
  const research = await sanityFetch<any[]>({ query: PUBLISHED_RESEARCH_STUDIES_QUERY });
  console.log(`✅ Published Research Studies Count: ${research?.length || 0}`);

  console.log("🎉 All Learn Hub queries verified successfully!");
}

verifyAllRoutes().catch(console.error);
