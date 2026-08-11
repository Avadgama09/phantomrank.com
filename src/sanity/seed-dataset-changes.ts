// src/sanity/seed-dataset-changes.ts
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

if (!token) {
  console.error("❌ SANITY_API_WRITE_TOKEN is missing from .env.");
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: "2026-07-01",
  token,
  useCdn: false,
});

async function runDatasetChanges() {
  console.log("🚀 Executing Sanity dataset updates...");

  // 1. Create/publish missing AI Visibility pillar document
  const aiVisibilityPillar = {
    _id: "pillar-ai-visibility",
    _type: "pillar",
    title: "AI Visibility",
    slug: { _type: "slug", current: "ai-visibility" },
    icon: "👁️",
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
  console.log("✅ Created & Published Major Topic: AI Visibility (ID: pillar-ai-visibility)");

  // 2. Create/publish missing Learn Hub Settings singleton
  const learnHubSettingsDoc = {
    _id: "learnHubSettings",
    _type: "learnHubSettings",
    heroEyebrow: "PhantomRank Learn",
    heroH1: "AI Search, AI Visibility & AI SEO",
    heroIntro: [
      {
        _key: "hub-intro-block-1",
        _type: "block",
        style: "normal",
        children: [
          {
            _key: "hub-intro-span-1",
            _type: "span",
            text: "Practical guides on how AI search finds, cites and describes brands.",
          },
        ],
      },
    ],
    seoTitle: "AI Search, AI Visibility & AI SEO | PhantomRank Learn",
    seoDescription: "Practical guides on how AI search finds, cites and describes brands.",
  };

  await client.createOrReplace(learnHubSettingsDoc);
  console.log("✅ Created & Published Singleton: Learn Hub Settings (ID: learnHubSettings)");

  // 3. Create/publish default Author document
  // First upload a simple neutral avatar PNG to Sanity assets for required photo field
  const transparentPngBuffer = Buffer.from(
    "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==",
    "base64"
  );
  const imageAsset = await client.assets.upload("image", transparentPngBuffer, {
    filename: "phantomrank-editorial-avatar.png",
  });

  const defaultAuthorDoc = {
    _id: "author-phantomrank-editorial",
    _type: "author",
    name: "PhantomRank Editorial Team",
    slug: { _type: "slug", current: "phantomrank-editorial-team" },
    jobTitle: "Editorial & Research Team",
    organisation: "PhantomRank",
    shortBio: "The PhantomRank Editorial and Research Team conducts empirical research, benchmark audits, and produces technical frameworks for AI Visibility and AI SEO.",
    photo: {
      _type: "image",
      asset: {
        _type: "reference",
        _ref: imageAsset._id,
      },
    },
  };

  await client.createOrReplace(defaultAuthorDoc);
  console.log("✅ Created & Published Default Author: PhantomRank Editorial Team (ID: author-phantomrank-editorial)");

  console.log("🎉 Dataset changes complete!");
}

runDatasetChanges().catch((err) => {
  console.error("❌ Dataset update failed:", err);
  process.exit(1);
});
