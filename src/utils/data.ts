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
    question: "How does Generative Engine Optimization differ from traditional SEO?",
    answer: "Traditional SEO is about fighting for a position on a list of blue links. Generative Engine Optimization is about structuring your content so an AI model chooses it as the definitive answer. While having great SEO is a solid foundation, it is not the whole picture. We know from recent industry analysis that 71 percent of sources appear on only one AI platform. To win in this new environment, your content needs to provide unique data that the AI does not already have in its training weights. In fact, <a href='https://fuelonline.com/how-to-get-cited-in-chatgpt-search-seo-strategy/' target='_blank' rel='noopener noreferrer' class='text-primary underline'>data from 2026 GEO studies</a> reveals that pages with a fact to word ratio of 1 to 80 are 4.2 times more likely to be cited in ChatGPT.",
  },
  {
    question: "Why is my client ranking on page one of Google but completely invisible in ChatGPT and Perplexity?",
    answer: "We hear this frustration from agencies every day. Ranking high on Google does not guarantee an AI citation because AI models use entirely different retrieval pipelines. First, you might be caught in the mention source divide. A brand might be talked about widely online, but <a href='https://drli.blog/posts/citation-attention/' target='_blank' rel='noopener noreferrer' class='text-primary underline'>Dr Robert Li's recent meta analysis</a> shows that only 3 to 27 brands per industry actually earn authoritative source citations. Second, you should check your technical setup. Many websites unintentionally block AI crawlers like OAI SearchBot or PerplexityBot at the server or CDN level. If these bots cannot crawl your clients site, they simply cannot cite them.",
  },
  {
    question: "If AI answers generate fewer clicks, how do we prove the ROI of tracking AI visibility?",
    answer: "It is true that AI citations generate a lower click through rate than traditional search. Industry experts call this the authority traffic paradox. But the traffic you do get is highly qualified, and getting cited actually boosts your overall search performance. <a href='https://www.seerinteractive.com' target='_blank' rel='noopener noreferrer' class='text-primary underline'>Research from Seer Interactive</a> found that when your brand is cited in a Google AI Overview, you actually get 35 percent more organic clicks and 91 percent more paid clicks compared to when you are not cited at all. If your clients are not cited during the research phase, their competitors are winning the business before a click even happens.",
  },
  {
    question: "What specific content formats do AI search engines actually prefer to cite?",
    answer: "AI engines look for extreme clarity and extractability. They heavily favor the Bottom Line Up Front approach. You should structure your answers in self contained blocks of 40 to 60 words placed directly under question based headings. They also rely heavily on community consensus to validate facts. Data shows that Reddit accounts for nearly 47 percent of <a href='https://wellows.com/blog/perplexity-search-visibility-tips/' target='_blank' rel='noopener noreferrer' class='text-primary underline'>Perplexity citations</a> and appears in over 140 percent of ChatGPT prompts. You need to back up your claims with proper Article and FAQ schema markup so the machines can easily read and verify your data.",
  },
  {
    question: "Which AI platforms does PhantomRank monitor and how is the data collected?",
    answer: "PhantomRank actively tracks visibility across the exact platforms that are reshaping digital discovery today. This includes ChatGPT, which recently surpassed 100 million weekly active users in India alone and 700 million globally. We also track Perplexity, a platform that has reached 30 million monthly users with searches growing by 40 percent every single month. Furthermore, we monitor Gemini, Claude, Grok, and Microsoft Copilot. We use programmatic querying to ask these engines buyer intent questions that are highly relevant to your clients, giving your agency real time data on exactly when and where your brands are recommended.",
  },
  {
    question: "How do we optimize specifically for Anthropic Claude?",
    answer: "Claude requires a very unique approach because it operates on a Constitutional AI framework that prioritizes honesty and harmlessness. While it drives a smaller volume of traffic, <a href='https://www.convertmate.io/research/claude-visibility' target='_blank' rel='noopener noreferrer' class='text-primary underline'>ConvertMate research from 2026</a> reveals that Claude users generate an exceptional 4.56 dollar average session value, which is the highest among all major AI assistants. To get cited by Claude, your content must be highly objective. Providing balanced comparisons or including explicit risk and limitation sections actually gives you a 1.7 times citation boost. Claude also uses Brave Search instead of Google or Bing for live web retrieval, so you must ensure your clients sites are indexed there as well.",
  },
  {
    question: "Does technical SEO still matter for Generative Engine Optimization?",
    answer: "Yes, technical health is the absolute baseline for AI visibility. If an AI crawler experiences a timeout or cannot parse your site structure, it simply moves on to the next candidate. We know that pages using clear headings and schema show <a href='https://www.airops.com/blog/how-to-test-content-visibility-in-perplexity-and-chatgpt' target='_blank' rel='noopener noreferrer' class='text-primary underline'>2.8 times higher citation rates</a> than poorly structured pages. You must ensure your clients have impeccable Article, FAQ, and Organization schema markup so the AI can easily map your specific insights to the users query. Furthermore, metrics like site speed and stability remain critical because fast sites increase the confidence score for retrieval agents.",
  },
  {
    question: "Can we use PhantomRank to reverse engineer what competitors are doing right in AI search?",
    answer: "Absolutely. Competitor intelligence is built into every plan we offer. PhantomRank reveals exactly which domains and community platforms AI models are recommending instead of your clients. Because AI models synthesize data from multiple places, you are often competing against forums, review aggregators, and direct competitors all at once. By seeing exactly who is stealing your Share of Voice, your agency can adjust content strategies to reclaim those lost citations and prove your strategic value.",
  },
];

// ─── Social Proof Stats ─────────────────────────────────────

export const stats: Stat[] = [
  { label: "AI Engines Tracked", value: "4" },
  { label: "Brands Monitored", value: "10+" },
  { label: "AI Queries Scanned", value: "900+" },
  { label: "Agencies on PhantomRank", value: "2" },
];

// ─── Page Meta (SEO) ────────────────────────────────────────

export const pageMeta: Record<string, PageMeta> = {
  home: {
    title: "PhantomRank — AI Visibility Tracking for Marketing Agencies",
    description: "Track how your brand is cited in ChatGPT, Perplexity, Gemini, and Claude. PhantomRank gives Indian agencies brand mention rates, citation frequency, and share of voice across AI engines.",
  },
  features: {
    title: "Features",
    description: "Explore PhantomRank's AI visibility tracking features — from multi-engine scanning and competitor benchmarking to Reddit intelligence and predictive analytics.",
  },
  dashboard: {
    title: "Live Dashboard Demo",
    description: "Experience PhantomRank's AI visibility dashboard with sample data. Explore brand mention tracking, competitor analysis, and citation reports — no signup required.",
  },
  "use-cases": {
    title: "Industry Use Cases",
    description: "Discover how marketing agencies use PhantomRank to track and improve AI visibility for clients across 20+ industries.",
  },
  pricing: {
    title: "Pricing",
    description: "PhantomRank pricing plans for agencies of every size — from free single-brand tracking to enterprise-grade unlimited AI visibility monitoring. All plans in INR.",
  },
  resources: {
    title: "Resources",
    description: "Learn about AI visibility tracking, Answer Engine Optimisation (AEO), and how to get your brand cited by AI search engines. Guides, articles, and tools for Indian agencies.",
  },
  signup: {
    title: "Get Access",
    description: "Sign up for PhantomRank and start tracking your brand's AI visibility across ChatGPT, Perplexity, Gemini, Claude, Grok, and Copilot.",
  },
  about: {
    title: "About Us",
    description: "PhantomRank is building the visibility layer for AI search — helping Indian marketing agencies track and improve how brands appear in AI-generated answers.",
  },
  terms: {
    title: "Terms & Conditions",
    description: "Terms and conditions for using PhantomRank.",
  },
  privacy: {
    title: "Privacy Policy",
    description: "How PhantomRank collects, uses, and protects your data. Our privacy policy for users and agency clients.",
  },
  "features/ai-visibility-tracker": {
    title: "AI Visibility Tracker",
    description: "Track how often your brand is mentioned and cited across ChatGPT, Perplexity, Gemini, Claude, Grok, and Copilot with PhantomRank's AI Visibility Tracker.",
  },
  "features/industry-metrics": {
    title: "Industry Metrics",
    description: "Benchmark your AI visibility against industry averages. See where your brand stands compared to your category with PhantomRank's Industry Metrics.",
  },
  "features/community-manager": {
    title: "Community Manager",
    description: "Scan Reddit for brand mentions, category conversations, and competitor comparisons in real time with PhantomRank's Community Manager.",
  },
  "features/agentic-crm": {
    title: "Agentic Customer Journey & CRM Brain",
    description: "Map how AI-driven customer journeys reference your brand at every touchpoint. Coming soon to PhantomRank.",
  },
  "features/hyper-personalized-engines": {
    title: "Hyper-Personalised Engines",
    description: "Generate content variations optimised for how each AI engine structures its answers. Coming soon to PhantomRank.",
  },
  "features/content-creative-production": {
    title: "AI-Native Content & Creative Production",
    description: "Produce AI-citation-ready content — articles, briefs, and creatives designed to be picked up by LLMs. Coming soon to PhantomRank.",
  },
  "features/trend-prediction": {
    title: "Trend Prediction",
    description: "Forecast emerging topics and queries before they trend inside AI search engines. Coming soon to PhantomRank.",
  },
  "features/content-performance-prediction": {
    title: "Content Performance Prediction",
    description: "Predict how likely a piece of content is to be cited by AI engines before you publish. Coming soon to PhantomRank.",
  },
  "features/influencer-vetting": {
    title: "Influencer Vetting & Fraud Detection",
    description: "Evaluate influencer credibility and detect engagement fraud using AI-powered signals. Coming soon to PhantomRank.",
  },
  "features/budget-optimization": {
    title: "Predictive Journey & Budget Optimisation",
    description: "Allocate marketing spend based on predicted AI visibility ROI across channels. Coming soon to PhantomRank.",
  },
};
