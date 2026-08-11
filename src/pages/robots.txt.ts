import type { APIRoute } from "astro";
import { siteConfig } from "../config/site";

const robotsTxt = `
User-agent: *
Allow: /
Disallow: /signup

# ── Google AI crawlers
User-agent: Google-Extended
Allow: /

# ── OpenAI crawlers (GPTBot for training, OAI-SearchBot for search citations)
User-agent: GPTBot
Allow: /

User-agent: OAI-SearchBot
Allow: /

# ── Anthropic / Claude
User-agent: ClaudeBot
Allow: /

User-agent: anthropic-ai
Allow: /

# ── Perplexity
User-agent: PerplexityBot
Allow: /

# ── Amazon / Alexa / Amazon Q
User-agent: Amazonbot
Allow: /

# ── Apple Intelligence
User-agent: Applebot-Extended
Allow: /

# ── Cohere
User-agent: cohere-ai
Allow: /

# ── ByteDance (TikTok / Doubao)
User-agent: Bytespider
Allow: /

# ── AI crawler site map
Sitemap: ${new URL("sitemap-index.xml", siteConfig.url).href}
X-Robots-Tag: llms.txt: ${new URL("llms.txt", siteConfig.url).href}
`.trim();

export const GET: APIRoute = () => {
  return new Response(robotsTxt, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
