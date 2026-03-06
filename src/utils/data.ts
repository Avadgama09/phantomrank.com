import type { Feature, Plan, FAQ, Stat, PageMeta } from "../types/types";

// ─── Features (10 total) ───────────────────────────────────

export const features: Feature[] = [
  // Market Intelligence
  {
    name: "AI Visibility Tracker",
    slug: "ai-visibility-tracker",
    category: "Market Intelligence",
    status: "live",
    oneLiner:
      "Track how often your brand is mentioned and cited across ChatGPT, Perplexity, Gemini, Claude, Grok, and Copilot.",
    icon: "lucide:radar",
    iconClass: "bg-blue-500/10 text-blue-400",
  },
  {
    name: "Industry Metrics",
    slug: "industry-metrics",
    category: "Market Intelligence",
    status: "live",
    oneLiner:
      "Benchmark your AI visibility against industry averages and see where you stand in your category.",
    icon: "lucide:bar-chart-3",
    iconClass: "bg-purple-500/10 text-purple-400",
  },
  {
    name: "Community Manager",
    slug: "community-manager",
    category: "Market Intelligence",
    status: "live",
    oneLiner:
      "Scan Reddit for brand mentions, category conversations, and competitor comparisons in real time.",
    icon: "lucide:messages-square",
    iconClass: "bg-pink-500/10 text-pink-400",
  },
  {
    name: "Agentic Customer Journey & CRM Brain",
    slug: "agentic-crm",
    category: "Market Intelligence",
    status: "coming-soon",
    oneLiner:
      "Map how AI-driven customer journeys reference your brand at every touchpoint.",
    icon: "lucide:brain-circuit",
    iconClass: "bg-indigo-500/10 text-indigo-400",
  },

  // Content Production
  {
    name: "Hyper-Personalised Engines",
    slug: "hyper-personalized-engines",
    category: "Content Production",
    status: "coming-soon",
    oneLiner:
      "Generate content variations optimised for how each AI engine structures its answers.",
    icon: "lucide:sparkles",
    iconClass: "bg-amber-500/10 text-amber-400",
  },
  {
    name: "AI-Native Content & Creative Production",
    slug: "content-creative-production",
    category: "Content Production",
    status: "coming-soon",
    oneLiner:
      "Produce AI-citation-ready content — articles, briefs, and creatives designed to be picked up by LLMs.",
    icon: "lucide:pen-tool",
    iconClass: "bg-teal-500/10 text-teal-400",
  },

  // Prediction
  {
    name: "Trend Prediction",
    slug: "trend-prediction",
    category: "Prediction",
    status: "coming-soon",
    oneLiner:
      "Forecast emerging topics and queries before they trend inside AI search engines.",
    icon: "lucide:trending-up",
    iconClass: "bg-orange-500/10 text-orange-400",
  },
  {
    name: "Content Performance Prediction",
    slug: "content-performance-prediction",
    category: "Prediction",
    status: "coming-soon",
    oneLiner:
      "Predict how likely a piece of content is to be cited by AI engines before you publish.",
    icon: "lucide:gauge",
    iconClass: "bg-cyan-500/10 text-cyan-400",
  },
  {
    name: "Influencer Vetting & Fraud Detection",
    slug: "influencer-vetting",
    category: "Prediction",
    status: "coming-soon",
    oneLiner:
      "Evaluate influencer credibility and detect engagement fraud using AI-powered signals.",
    icon: "lucide:shield-check",
    iconClass: "bg-emerald-500/10 text-emerald-400",
  },
  {
    name: "Predictive Journey & Budget Optimisation",
    slug: "budget-optimization",
    category: "Prediction",
    status: "coming-soon",
    oneLiner:
      "Allocate marketing spend based on predicted AI visibility ROI across channels.",
    icon: "lucide:calculator",
    iconClass: "bg-rose-500/10 text-rose-400",
  },
];

// ─── Pricing Plans (5 tiers, INR) ──────────────────────────

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
      "All 6 AI engines",
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
      "All 6 AI engines",
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
      "All 6 AI engines",
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
      "All 6 AI engines",
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
    question: "What is AI visibility tracking?",
    answer:
      "AI visibility tracking measures how often your brand is mentioned, cited, or recommended inside AI-generated answers from platforms like ChatGPT, Perplexity, Gemini, and Claude. It's similar to tracking your Google Search rankings, but for AI engines.",
  },
  {
    question: "Which AI platforms does PhantomRank track?",
    answer:
      "PhantomRank currently tracks six major AI platforms: ChatGPT (OpenAI), Perplexity, Gemini (Google), Claude (Anthropic), Grok (xAI), and Microsoft Copilot.",
  },
  {
    question: "How does PhantomRank collect this data?",
    answer:
      "PhantomRank uses synthetic prompting — programmatically querying AI engines with buyer-intent prompts relevant to your industry — to map when and how your brand appears in AI-generated responses. Our methodology is grounded in the Princeton GEO study (KDD 2024).",
  },
  {
    question: "Is this the same as traditional SEO?",
    answer:
      "No. Traditional SEO optimises for search engine result pages (SERPs). AI visibility tracking — sometimes called Answer Engine Optimisation (AEO) or Generative Engine Optimisation (GEO) — focuses on whether AI engines cite your brand in their generated answers. Both are important; PhantomRank covers the AI side.",
  },
  {
    question: "Who is PhantomRank built for?",
    answer:
      "PhantomRank is designed for Indian marketing agencies, SEO teams, and brand managers who need to understand and improve their clients' visibility inside AI search engines.",
  },
  {
    question: "Can I track my competitors?",
    answer:
      "Yes. Every plan includes competitor tracking. PhantomRank shows which brands AI engines recommend instead of yours, so you can see exactly where you're losing share of voice.",
  },
  {
    question: "What are the three core metrics?",
    answer:
      "PhantomRank tracks three core metrics: Brand Mention Rate (how often your brand is named), Citation Frequency (how often your content is linked or referenced), and Share of Voice (your brand's visibility compared to competitors in AI answers).",
  },
  {
    question: "Does PhantomRank guarantee AI rankings?",
    answer:
      "No. PhantomRank is a measurement and tracking tool. We do not manipulate AI outputs or guarantee placements. We give you the data to understand your current AI visibility and make informed decisions to improve it.",
  },
];

// ─── Social Proof Stats ─────────────────────────────────────

export const stats: Stat[] = [
  { label: "AI Engines Tracked", value: "6" },
  { label: "Brands Monitored", value: "0+" },
  { label: "AI Queries Scanned", value: "0+" },
  { label: "Agencies on PhantomRank", value: "0+" },
];

// ─── Page Meta (SEO) ────────────────────────────────────────

export const pageMeta: Record<string, PageMeta> = {
  home: {
    title: "PhantomRank — AI Visibility Tracking for Marketing Agencies",
    description:
      "Track how your brand is cited in ChatGPT, Perplexity, Gemini, and Claude. PhantomRank gives Indian agencies brand mention rates, citation frequency, and share of voice across AI engines.",
  },
  features: {
    title: "Features",
    description:
      "Explore PhantomRank's AI visibility tracking features — from multi-engine scanning and competitor benchmarking to Reddit intelligence and predictive analytics.",
  },
  dashboard: {
    title: "Live Dashboard Demo",
    description:
      "Experience PhantomRank's AI visibility dashboard with sample data. Explore brand mention tracking, competitor analysis, and citation reports — no signup required.",
  },
  methodology: {
    title: "Methodology",
    description:
      "How PhantomRank measures AI visibility: synthetic prompting, multi-engine scanning, and the three core metrics — grounded in the Princeton GEO study (KDD 2024).",
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

  // Feature subpages
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
