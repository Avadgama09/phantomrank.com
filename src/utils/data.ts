import type { Plan, FAQ, Stat, PageMeta } from "../types/types";


// ─── Pricing Plans ──────────────────────────────────────────


export const plans: Plan[] = [
  {
    name: "Free",
    price: "₹0",
    period: "forever",
    description: "Try PhantomRank with a single brand.",
    features: [
      "1 brand",
      "5 AI scans per month",
      "1 competitor tracked",
      "Basic visibility report",
      "Email support",
    ],
    cta: { text: "Get Started Free", href: "/signup", variant: "secondary" },
  },
  {
    name: "Starter",
    price: "₹2,999",
    period: "per month",
    description: "For freelancers and small agencies getting started with AEO.",
    features: [
      "3 brands",
      "30 AI scans per month",
      "3 competitors per brand",
      "Weekly visibility reports",
      "All AI engines",
      "Email support",
    ],
    cta: { text: "Get Access", href: "/signup", variant: "primary" },
  },
  {
    name: "Growth",
    price: "₹7,499",
    period: "per month",
    description: "For growing agencies managing multiple client brands.",
    isPopular: true,
    features: [
      "10 brands",
      "100 AI scans per month",
      "5 competitors per brand",
      "White-label reports",
      "All AI engines",
      "Industry benchmarks",
      "Priority email support",
    ],
    cta: { text: "Get Access", href: "/signup", variant: "primary" },
  },
  {
    name: "Agency",
    price: "₹14,999",
    period: "per month",
    description: "For established agencies with a large client portfolio.",
    features: [
      "25 brands",
      "300 AI scans per month",
      "10 competitors per brand",
      "White-label reports",
      "All AI engines",
      "Industry benchmarks",
      "Reddit intelligence",
      "Priority support",
    ],
    cta: { text: "Get Access", href: "/signup", variant: "primary" },
  },
  {
    name: "Enterprise",
    price: "₹29,999",
    period: "per month",
    description: "For large organisations and agency networks.",
    features: [
      "Unlimited brands",
      "Unlimited AI scans",
      "Unlimited competitors",
      "Custom prompt library",
      "White-label reports",
      "All AI engines",
      "Dedicated CSM",
      "Custom integrations",
      "SLA guarantee",
    ],
    cta: { text: "Contact Sales", href: "/signup", variant: "primary" },
  },
];


// ─── FAQs ───────────────────────────────────────────────────


export const faqs: FAQ[] = [
  {
    question: "What is AI visibility, and how do you actually measure it?",
    answer: "AI visibility is how often, and in what context, your brand shows up when people ask AI assistants like ChatGPT, Gemini, Claude, Grok, or Perplexity for recommendations. Most teams still measure this by manually typing prompts into each chatbot and eyeballing the results — which doesn't scale past a handful of queries. PhantomRank automates that process: it runs your brand through dozens of buyer-journey prompts across all five engines on a schedule, so you get a real measurement instead of a spot-check."
  },
  {
    question: "Is AI visibility a rank, or a probability?",
    answer: "It's a probability, not a rank — and any tool selling you a fixed position is misrepresenting how AI actually works. Because AI answers vary run to run, the useful metric is how often your brand appears across repeated queries — for example, showing up in 6 of 10 runs of the same prompt category, tracked over time. That's how PhantomRank reports visibility: as a trend built from repeated, structured measurement, not a single lucky (or unlucky) snapshot."
  },
  {
    question: "Are GEO, AEO, and AI SEO different from regular SEO?",
    answer: "They're the same discipline evolving, not a separate one — but the mechanics genuinely shift. Traditional SEO optimizes to rank; GEO and AEO optimize to be cited inside a generated answer. That means structure matters more (self-contained sections, clear verdicts, comparison tables) and keyword density matters less. PhantomRank tracks both sides: whether you show up (visibility) and whether AI trusts you enough to cite you as a source (synthesis)."
  },
  {
    question: "Why do AI answers change every time I ask — doesn't that make tracking pointless?",
    answer: "It makes word-for-word tracking pointless, which is exactly why PhantomRank doesn't do that. Instead of comparing exact phrasing, we convert each AI response into a vector embedding and measure its semantic similarity to your brand's core messaging — a method we call semantic resonance. The wording can shift every time the model answers; the underlying meaning, and therefore the resonance score, stays stable enough to actually track over weeks and months."
  },
  {
    question: "How do you avoid prompt bias when testing brand visibility?",
    answer: "By never handing the model your brand name to begin with. If a prompt already contains your brand, you're testing whether the AI can repeat a name you gave it — not whether it surfaces you naturally. PhantomRank runs category-level, persona-based prompts that mirror how real buyers actually ask ('best CRM for a 10-person agency'), so what comes back reflects genuine visibility, not a fed answer."
  },
  {
    question: "Can I track ROI or attribution from AI search traffic?",
    answer: "Partially, and PhantomRank is built to close that gap rather than pretend it doesn't exist. Attribution from AI tools is genuinely harder than from Google — most people don't type 'found you on ChatGPT' into a lead form. What you can do is correlate periods of higher Share of Synthesis with pipeline and self-reported attribution, and track referral traffic from the citations AI does generate. It's directional, not perfect — and we'd rather tell you that than oversell a dashboard that claims otherwise."
  },
  {
    question: "Is there a \"Search Console\" for AI search?",
    answer: "Not from the AI platforms themselves — none of them offer an official visibility dashboard the way Google Search Console does. That's the specific gap PhantomRank fills: one dashboard that queries ChatGPT, Gemini, Claude, Grok, and Perplexity on a recurring schedule and gives you the equivalent view — mentions, citations, and crawl behavior — that Search Console gives you for classic search."
  },
  {
    question: "What kind of content actually gets cited by AI engines?",
    answer: "Content built in self-contained, quotable chunks — not classic long-form narrative blog posts. AI engines pull cleanly from sections that work as standalone answers, put a clear verdict in the first two or three sentences, and use structured formats like comparison tables and FAQs. PhantomRank's Information Gap Analysis tells you which specific topics in your category AI is currently answering badly, so you know exactly where writing this kind of content will move the needle."
  },
  {
    question: "What's the difference between being mentioned and being cited?",
    answer: "A mention means AI named your brand in its answer. A citation means it linked back to your site as a source. The gap between them matters more than most teams realize: a brand mentioned constantly but never cited is winning awareness and losing referral traffic. PhantomRank tracks both separately — AI Share of Voice for mentions, Share of Synthesis for citations — because optimizing for one doesn't automatically improve the other."
  },
  {
    question: "Which AI engines does PhantomRank track?",
    answer: "ChatGPT, Gemini, Claude, Grok, and Perplexity — across 28 model variants — the engines Indian and global buyers actually use for research and recommendations, tracked in one place instead of five separate manual checks."
  },
  {
    question: "What's a \"crawl pool\" gap?",
    answer: "It's when an AI engine crawls your page while researching an answer, reads it, and still chooses to cite a competitor instead. That's not an awareness problem — your site was found — it's a content relevance or authority gap, and it's specific enough to fix."
  },
  {
    question: "Can I control what AI says about my brand?",
    answer: "No tool can guarantee that, and any tool claiming 'control' over AI answers isn't being straight with you. PhantomRank gives you an accurate diagnostic of where you stand today — including the probability-based visibility and semantic resonance scores above — and a content roadmap to close specific, identified gaps."
  }
];


// ─── Social Proof Stats ─────────────────────────────────────


export const stats: Stat[] = [
  { label: "AI engines tracked", value: "5" },
  { label: "Model variants tracked", value: "28" },
  { label: "Brands monitored", value: "// TODO: insert real figure" },
  { label: "Scans run", value: "// TODO: insert real figure" },
];


// ─── Page Meta (SEO) ────────────────────────────────────────


export const pageMeta: Record<string, PageMeta> = {
  home: {
    title: "PhantomRank — Search Intelligence for Brands & Agencies",
    description:
      "PhantomRank is a search intelligence platform that shows how AI assistants and search engines talk about your brand. Brands and agencies use PhantomRank to track AI share of voice, citations, and answer placement across ChatGPT, Perplexity, Gemini, Claude, and other AI tools.",
  },
  features: {
    title: "Features",
    description:
      "Explore PhantomRank's search intelligence and AI visibility features — from competitor benchmarking and multi-engine scanning to Reddit intelligence and predictive analytics.",
  },
  "use-cases": {
    title: "Industry Use Cases",
    description:
      "Discover how marketing agencies use PhantomRank to track and improve AI visibility for clients across 20+ industries.",
  },
  pricing: {
    title: "Pricing",
    description:
      "PhantomRank pricing plans for agencies of every size — from free single-brand tracking to enterprise-grade unlimited AI visibility monitoring. All plans in INR.",
  },
  studio: {
    title: "PhantomRank Studio — Digital Marketing & AI Visibility Execution",
    description:
      "PhantomRank shows where your brand is missing from search and AI answers. Studio turns those findings into websites, SEO, content, and authority work.",
  },
  "chatgpt-ads": {
    title: "ChatGPT Ads: Strategy, Setup & Management | PhantomRank",
    description:
      "ChatGPT Ads are now available in India. Learn how they work, how to target conversational intent, measure conversions and build a smarter AI advertising strategy.",
  },
  resources: {
    title: "Resources",
    description:
      "Learn about AI visibility tracking, Answer Engine Optimisation (AEO), and how to get your brand cited by AI search engines. Guides, articles, and tools for Indian agencies.",
  },
  signup: {
    title: "Get Access",
    description:
      "Sign up for PhantomRank and start tracking your brand's AI visibility across ChatGPT, Perplexity, Gemini, Claude, Grok, and Copilot.",
  },
  about: {
    title: "About Us",
    description:
      "PhantomRank is building the visibility layer for AI search — helping Indian marketing agencies track and improve how brands appear in AI-generated answers.",
  },
  terms: {
    title: "Terms & Conditions",
    description: "Terms and conditions for using PhantomRank.",
  },
  privacy: {
    title: "Privacy Policy",
    description:
      "How PhantomRank collects, uses, and protects your data. Our privacy policy for users and agency clients.",
  },
  "features/ai-visibility-tracker": {
    title: "AI Visibility Tracker",
    description:
      "Track how often your brand is mentioned and cited across ChatGPT, Perplexity, Gemini, Claude, Grok, and Copilot with PhantomRank's AI Visibility Tracker.",
  },
  "features/industry-metrics": {
    title: "Industry Metrics",
    description:
      "Benchmark your AI visibility against industry averages. See where your brand stands compared to your category with PhantomRank's Industry Metrics.",
  },
  "features/community-manager": {
    title: "Community Manager",
    description:
      "Scan Reddit for brand mentions, category conversations, and competitor comparisons in real time with PhantomRank's Community Manager.",
  },
  "features/agentic-crm": {
    title: "Agentic Customer Journey & CRM Brain",
    description:
      "Map how AI-driven customer journeys reference your brand at every touchpoint. Coming soon to PhantomRank.",
  },
  "features/hyper-personalized-engines": {
    title: "Hyper-Personalised Engines",
    description:
      "Generate content variations optimised for how each AI engine structures its answers. Coming soon to PhantomRank.",
  },
  "features/content-creative-production": {
    title: "AI-Native Content & Creative Production",
    description:
      "Produce AI-citation-ready content — articles, briefs, and creatives designed to be picked up by LLMs. Coming soon to PhantomRank.",
  },
  "features/trend-prediction": {
    title: "Trend Prediction",
    description:
      "Forecast emerging topics and queries before they trend inside AI search engines. Coming soon to PhantomRank.",
  },
  "features/content-performance-prediction": {
    title: "Content Performance Prediction",
    description:
      "Predict how likely a piece of content is to be cited by AI engines before you publish. Coming soon to PhantomRank.",
  },
  "features/influencer-vetting": {
    title: "Influencer Vetting & Fraud Detection",
    description:
      "Evaluate influencer credibility and detect engagement fraud using AI-powered signals. Coming soon to PhantomRank.",
  },
  "features/budget-optimization": {
    title: "Predictive Journey & Budget Optimisation",
    description:
      "Allocate marketing spend based on predicted AI visibility ROI across channels. Coming soon to PhantomRank.",
  },
};