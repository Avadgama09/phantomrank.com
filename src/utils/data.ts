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
    question: "Isn’t AI visibility data unreliable because LLMs are non-deterministic?",
    answer:
      "We agree that you can’t trust a single manual prompt. AI answers change based on history, location, and model updates. PhantomRank stabilises this by tracking a fixed set of buyer-style prompts across multiple engines and runs, then measuring semantic resonance instead of exact wording. When the phrasing changes but the meaning stays the same, our scores remain stable and trendable.",
  },
  {
    question: "How is PhantomRank different from tools that just give me an ‘AI visibility score’?",
    answer:
      "We don’t sell a single black-box score. PhantomRank splits behaviour into three layers: Mentions (you appear in the text), Citations (your domain is linked), and Crawl Pool (your page was crawled but not cited). On top of that we track intent coverage—category awareness, recommendation, and brand-direct—so you can see where in the journey you are actually winning and where you are only present but not chosen.",
  },
  {
    question: "Why do your reports sometimes differ from what I see when I ask ChatGPT or Perplexity manually?",
    answer:
      "Manual tests inherit your account history, device, and location, so results can feel random. PhantomRank runs clean, standardised sessions with explicit geo-targets and fixed prompt sets. We also log the full crawl pool where possible—the pages AI engines read before answering—so even if the surface text you see manually is slightly different, we can show whether your site is consistently being retrieved and how that changes over time.",
  },
  {
    question: "Can PhantomRank control AI answers or guarantee that my brand will be recommended?",
    answer:
      "No, and we are explicit about that. You can’t control a neural network the way you tweak classic rankings. PhantomRank treats AI engines as searchers. We show you if they can crawl you, how they describe you, which competitors keep winning recommendations, and which information gaps force the model to cite someone else. It’s a diagnostic and alignment layer, not a promise of control.",
  },
  {
    question: "Is this just SEO with a new name? Why should I care about AI visibility on top of traditional SEO?",
    answer:
      "SEO tells you how you rank on lists of links. AI visibility tells you whether assistants recommend you when buyers ask questions like “Which X should I use?” We regularly see brands with strong Google rankings that are completely absent from ChatGPT, Gemini, or Perplexity answers. PhantomRank exists to measure that recommendation surface—how often you are named, recommended, and cited—and to turn it into content and positioning actions, not to replace SEO.",
  },
  {
    question: "What do I actually do if my visibility drops or if PhantomRank flags ‘crawled but not cited’ pages?",
    answer:
      "We don’t just flash a red number. When visibility drops, PhantomRank runs an Information Gain Gap analysis to find the topics where AI is relying on vague, outdated, or competitor-heavy sources. For crawled-but-not-cited URLs, we highlight relevance and structure issues so your content team knows which pages to rewrite and what missing evidence, comparisons, or schema to add. The output is a concrete content roadmap, not just a dashboard.",
  },
  {
    question: "Is PhantomRank overkill if I only manage a few websites? Can’t I just do this manually?",
    answer:
      "You can absolutely test 5–10 prompts manually across a couple of engines. The problem is scale and consistency. Once you want to track 50+ prompts across 5 engines, handle geo-targeting, extract citations, benchmark competitors, and run semantic similarity math, you’re effectively assigning a full-time analyst. PhantomRank automates that loop so freelancers and small agencies get the same depth of data without having to build their own pipelines.",
  },
  {
    question: "Which AI platforms and geographies does PhantomRank actually track?",
    answer:
      "PhantomRank queries the main engines that shape buyer research today: ChatGPT, Gemini, Claude, Grok, Perplexity, and Copilot. All of them run through a standardised API layer so the data is comparable. We also inject explicit location parameters into our prompts, which lets you see how a brand appears in India versus other regions instead of relying on a single global surface.",
  },
  {
    question: "How do you keep the data useful when AI models update so often?",
    answer:
      "Every scan in PhantomRank logs the exact model version used for each engine. When your visibility shifts, we correlate changes with model upgrades, content changes on your site, and shifts in citation sources. Combined with scheduled weekly scans, this helps you separate model noise from real reputation movement so you don’t panic over every small fluctuation.",
  },
  {
    question: "Is PhantomRank just hyping ‘AI visibility’ to sell SaaS?",
    answer:
      "We share the skepticism about hype. AI search is another referral channel, not magic. PhantomRank doesn’t sell secret tricks or “AI SEO hacks”. We expose what the engines already say about your brand, how they source that information, and where they choose competitors over you. The value we add is structured measurement and clear next steps, not fear-based marketing.",
  },
];


// ─── Social Proof Stats ─────────────────────────────────────


export const stats: Stat[] = [
  { label: "AI Engines Tracked", value: "14" },
  { label: "Brands Monitored", value: "20+" },
  { label: "AI Queries Scanned", value: "2500+" },
  { label: "Agencies on PhantomRank", value: "4" },
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