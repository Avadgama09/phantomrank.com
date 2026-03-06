import type { APIRoute } from "astro";
import { siteConfig } from "../config/site";

const robotsTxt = `
User-agent: *
Allow: /
Disallow: /signup

User-agent: GPTBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Bytespider
Allow: /

Sitemap: ${new URL("sitemap-index.xml", siteConfig.url).href}
`.trim();

export const GET: APIRoute = () => {
  return new Response(robotsTxt, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
