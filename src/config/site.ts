import ogImage from "../assets/og-image.png";


export const siteConfig = {
  name: "PhantomRank",
  description:
    "Search intelligence platform for brands and marketing agencies. Track how your brand is cited in ChatGPT, Perplexity, Gemini, Claude, and other AI tools — mentions, citations, and share of voice across AI assistants.",
  url: "https://www.phantomrank.com",
  lang: "en",
  locale: "en_US",
  author: "PhantomRank",
  twitter: "@PhantomRank",
  ogImage: ogImage,


  navLinks: [
    { text: "Home", href: "/" },
    { text: "Features", href: "/features" },
    { text: "Pricing", href: "/pricing" },
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
