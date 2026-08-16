import ogImage from "../assets/og-image.png";


export const siteConfig = {
  name: "PhantomRank",

  // ── Canonical brand description — use this exact sentence verbatim
  // across meta descriptions, schema, about page, and llms.txt.
  description:
    "Search intelligence platform for brands and marketing agencies.",

  // ── One-sentence slogan AI models can quote directly
  slogan: "PhantomRank is an AI search intelligence platform that tracks brand citations, mentions, and share of voice across ChatGPT, Perplexity, Gemini, Claude, and Grok.",

  url: "https://www.phantomrank.com",
  lang: "en",
  locale: "en_US",
  author: "PhantomRank",
  twitter: "@PhantomRank",
  ogImage: ogImage,

  // ── Knowledge Graph / Entity fields
  foundingDate: "2024",
  areaServed: ["IN", "US", "GB", "AU", "CA", "SG"],
  knowsAbout: [
    "AI Visibility Tracking",
    "Generative Engine Optimization",
    "Answer Engine Optimization",
    "AI-Powered SEO",
    "AI Search Agency Strategy",
    "Brand Citation Monitoring",
    "AI Share of Voice Measurement",
    "Search Intelligence",
    "Large Language Model Marketing",
    "Conversational AI Brand Presence",
  ],


  navLinks: [
    { text: "Home", href: "/" },
    { text: "Features", href: "/features" },
    { text: "Pricing", href: "/pricing" },
    { text: "Studio", href: "/studio" },
    { text: "Resources", href: "/learn" },
  ],


  ctaLink: { text: "Get Access", href: "/signup" },


  footerLinks: [
    { text: "About Us", href: "/about" },
    { text: "Terms & Conditions", href: "/terms" },
    { text: "Privacy Policy", href: "/privacy" },
  ],


  socialLinks: {
    twitter: "https://twitter.com/PhantomRank",
    linkedin: "https://linkedin.com/company/phantomrank",
  },
};
