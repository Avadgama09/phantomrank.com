// src/sanity/seed.ts
// Seed script for Learn Hub Settings, Major Topics (AI SEO & AI Visibility), and 6 Locked Clusters
import { createClient } from "@sanity/client";
import * as fs from "node:fs";
import * as path from "node:path";

function loadEnv() {
  const envPath = path.resolve(process.cwd(), ".env");
  if (fs.existsSync(envPath)) {
    const envContent = fs.readFileSync(envPath, "utf-8");
    for (const line of envContent.split("\n")) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) continue;
      const eqIdx = trimmed.indexOf("=");
      if (eqIdx > 0) {
        const key = trimmed.slice(0, eqIdx).trim();
        let val = trimmed.slice(eqIdx + 1).trim();
        if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
          val = val.slice(1, -1);
        }
        if (!process.env[key]) {
          process.env[key] = val;
        }
      }
    }
  }
}

loadEnv();

const projectId = process.env.SANITY_PROJECT_ID || process.env.PUBLIC_SANITY_PROJECT_ID || "ppkytbjt";
const dataset = process.env.SANITY_DATASET || process.env.PUBLIC_SANITY_DATASET || "production";
const token = process.env.SANITY_API_WRITE_TOKEN;

if (!projectId || !token) {
  console.log("ℹ️ Skipped seed execution: SANITY_PROJECT_ID or SANITY_API_WRITE_TOKEN environment variables not set in .env.");
} else {
  seedPillarAndClusters().catch(console.error);
}

export async function seedPillarAndClusters() {
  if (!projectId || !token) return;

  const client = createClient({
    projectId,
    dataset,
    apiVersion: "2026-07-01",
    token,
    useCdn: false,
  });

  console.log("🚀 Seeding Learn Hub Settings, Major Topics, and 6 Locked Clusters...");

  // 1. Learn Hub Settings Singleton (controls /learn/)
  const hubSettingsDoc = {
    _id: "learnHubSettings",
    _type: "learnHubSettings",
    heroEyebrow: "Search Intelligence & AI Visibility",
    heroH1: "Learn How AI Search Is Changing Brand Discovery",
    heroIntro: [
      {
        _key: "hub-intro-block-1",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "hub-intro-span-1",
            _type: "span",
            text: "Guides, empirical research, and practical frameworks for AI Visibility, AI SEO, and the changing search journey.",
          },
        ],
      },
    ],
    seoTitle: "AI Search, AI Visibility & AI SEO Resources | PhantomRank",
    seoDescription: "Guides, research, and practical frameworks for AI Visibility, AI SEO, and the changing search journey.",
  };

  await client.createOrReplace(hubSettingsDoc);
  console.log("✅ Seeded Singleton: Learn Hub Settings (controls /learn/)");

  // 2. Major Topic 1: AI SEO (Preserve existing pillar-ai-seo ID)
  const aiSeoPillar = {
    _id: "pillar-ai-seo",
    _type: "pillar",
    title: "AI SEO",
    slug: { _type: "slug", current: "ai-seo" },
    icon: "",
    shortDescription: "The optimization programme and discipline for search intelligence, GEO, AEO, and AI visibility.",
    primaryKeyword: "AI SEO",
    order: 1,
    introduction: [
      {
        _key: "pillar-ai-seo-intro-block-1",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "pillar-ai-seo-intro-span-1",
            _type: "span",
            text: "AI SEO is the active optimization discipline of structuring brand content, technical schema, and entity presence to earn citation and recommendation across AI search engines.",
          },
        ],
      },
    ],
    seo: {
      title: "AI SEO: Improve AI Visibility in ChatGPT, Gemini & Google | PhantomRank",
      description: "Master AI SEO, Answer Engine Optimization (AEO), and Generative Engine Optimization (GEO). Built for brands and marketing agencies.",
    },
  };

  await client.createOrReplace(aiSeoPillar);
  console.log("✅ Seeded Major Topic: AI SEO (/learn/ai-seo/)");

  // 3. Major Topic 2: AI Visibility (New Major Topic document)
  const aiVisibilityPillar = {
    _id: "pillar-ai-visibility",
    _type: "pillar",
    title: "AI Visibility",
    slug: { _type: "slug", current: "ai-visibility" },
    icon: "",
    shortDescription: "PhantomRank's measurable product outcome: tracking brand mentions, citations, answer placement, and competitive representation.",
    primaryKeyword: "AI visibility tracking",
    order: 2,
    introduction: [
      {
        _key: "pillar-ai-vis-intro-block-1",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "pillar-ai-vis-intro-span-1",
            _type: "span",
            text: "AI Visibility measures your brand's true representation, citation presence, and recommendation placement across conversational AI engines.",
          },
        ],
      },
    ],
    seo: {
      title: "AI Visibility: Track & Measure Brand Presence in AI Search | PhantomRank",
      description: "Measure brand citations, answer placement, representation accuracy, and competitive Share of Synthesis across AI platforms.",
    },
  };

  await client.createOrReplace(aiVisibilityPillar);
  console.log("✅ Seeded Major Topic: AI Visibility (/learn/ai-visibility/)");

  // 4. The 6 Locked Clusters (Preserve existing cluster IDs)
  const lockedClusters = [
    {
      id: "cluster-foundations",
      order: 1,
      title: "Foundations",
      slug: "foundations",
      icon: "",
      shortDescription: "Core principles of AI Search, LLM retrieval mechanics, and GEO vs traditional SEO.",
      primaryKeyword: "AI SEO foundations",
    },
    {
      id: "cluster-measurement",
      order: 2,
      title: "Measurement",
      slug: "measurement",
      icon: "",
      shortDescription: "AI Share of Voice, Share of Synthesis, brand citation tracking, and retention metrics.",
      primaryKeyword: "AI visibility measurement",
    },
    {
      id: "cluster-diagnosis",
      order: 3,
      title: "Diagnosis",
      slug: "diagnosis",
      icon: "",
      shortDescription: "Identifying crawl pool gaps, missing brand context, and citation leakage across AI engines.",
      primaryKeyword: "AI search diagnosis",
    },
    {
      id: "cluster-optimisation",
      order: 4,
      title: "Optimisation",
      slug: "optimisation",
      icon: "",
      shortDescription: "Direct-answer formatting, structured data, and citation-ready content patterns.",
      primaryKeyword: "generative engine optimization",
    },
    {
      id: "cluster-operations",
      order: 5,
      title: "Operations",
      slug: "operations",
      icon: "",
      shortDescription: "Agency workflows, prompt testing, client reporting, and multi-brand visibility management.",
      primaryKeyword: "AI search agency strategy",
    },
    {
      id: "cluster-evidence",
      order: 6,
      title: "Evidence",
      slug: "evidence",
      icon: "",
      shortDescription: "Benchmark datasets, empirical research studies, industry reports, and case studies.",
      primaryKeyword: "AI search benchmarks",
    },
  ];

  for (const c of lockedClusters) {
    const clusterDoc = {
      _id: c.id,
      _type: "cluster",
      title: c.title,
      slug: { _type: "slug", current: c.slug },
      order: c.order,
      icon: c.icon,
      shortDescription: c.shortDescription,
      primaryKeyword: c.primaryKeyword,
      introduction: [
        {
          _key: `${c.id}-intro-block-1`,
          _type: "block",
          style: "normal",
          children: [
            {
              _key: `${c.id}-intro-span-1`,
              _type: "span",
              text: `Overview guide for the ${c.title} cluster. Deep-dive articles, frameworks, and teardowns in this topic.`,
            },
          ],
        },
      ],
      seo: {
        title: `${c.title} — AI SEO & Visibility Cluster | PhantomRank`,
        description: c.shortDescription,
      },
    };

    await client.createOrReplace(clusterDoc);
    console.log(`✅ Seeded Cluster #${c.order}: ${c.title} (/learn/${c.slug})`);
  }

  console.log("🎉 Seeding complete! Learn Hub Settings, 2 Major Topics, and 6 Cluster documents ready.");
}
