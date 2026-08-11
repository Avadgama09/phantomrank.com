export interface StudioServiceGroup {
  name: string;
  services: string[];
}

export interface StudioCategory {
  id: string;
  name: string;
  icon: string;
  summary: string;
  visibleServices: string[];
  groups?: StudioServiceGroup[];
  expandedServices?: string[];
}

export interface StudioWorkflowStep {
  step: string;
  title: string;
  description: string;
  deliverables: string[];
}

export const studioWorkflow: StudioWorkflowStep[] = [
  {
    step: "01",
    title: "Find the gaps",
    description:
      "Audit your current search footprint, AI brand mentions, citation frequency, and technical bottlenecks using empirical intelligence.",
    deliverables: [
      "AI Visibility & Citation Audit",
      "Information-Gap & Keyword Opportunity Mapping",
      "Technical & Crawlability Inspection",
    ],
  },
  {
    step: "02",
    title: "Prioritise the work",
    description:
      "Filter opportunities into an action-oriented execution roadmap focused on immediate visibility gains and long-term authority.",
    deliverables: [
      "Topical Authority & Content Roadmap",
      "Technical Debt & Schema Priority List",
      "Source Domain & Distribution Plan",
    ],
  },
  {
    step: "03",
    title: "Build and publish",
    description:
      "Execute high-performance web development, schema-rich content, structural SEO, and multi-channel entity seeding.",
    deliverables: [
      "Schema & Technical Infrastructure Deployments",
      "AI-Citation Ready Content & Pillar Pages",
      "Contextual Distribution & Authority Seeding",
    ],
  },
  {
    step: "04",
    title: "Track and adjust",
    description:
      "Continuously monitor brand mentions, citation accuracy, sentiment alignment, and competitor movements to refine strategy.",
    deliverables: [
      "Share of Voice & Citation Tracking",
      "Crawl-Pool & Synthesis Monitoring",
      "Quarterly Strategy & Growth Adjustments",
    ],
  },
];

export const studioCategories: StudioCategory[] = [
  {
    id: "research-strategy",
    name: "Research & Growth Strategy",
    icon: "lucide:compass",
    summary:
      "Empirical market, search-intent, and competitor intelligence to define your growth roadmap before building.",
    visibleServices: [
      "Keyword & Search-Intent Research",
      "Topic-Cluster & Content Opportunity Planning",
      "Competitor Content-Gap & Backlink Analysis",
      "Buyer-Journey & Customer-Question Mapping",
    ],
    expandedServices: [
      "Market & Category Positioning Analysis",
      "Brand Messaging & Semantic Alignment",
      "Local-Market Opportunity Research",
      "SEO & AI Visibility Growth Roadmap",
    ],
  },
  {
    id: "seo",
    name: "SEO",
    icon: "lucide:search",
    summary:
      "Full-spectrum search engine optimisation divided across five specialized core pillars.",
    visibleServices: [
      "On-page structural & meta optimization",
      "Technical audits & Core Web Vitals",
      "Google Business Profile & Local Map-Pack",
      "Digital PR & High-Authority Backlink Outreach",
      "Next.js, Webflow & E-commerce Platform SEO",
    ],
    groups: [
      {
        name: "On-page SEO",
        services: [
          "Title tags and meta descriptions",
          "Heading and page structure optimization",
          "Keyword-to-page semantic mapping",
          "Internal linking architecture",
          "Image & media asset SEO",
          "Content refreshes & decay cleanup",
        ],
      },
      {
        name: "Technical SEO",
        services: [
          "Comprehensive technical SEO audits",
          "Crawlability and indexation fixes",
          "Core Web Vitals & speed performance",
          "XML sitemaps & robots.txt architecture",
          "Canonicalisation & duplicate content resolution",
          "Redirect chains & broken-link cleanup",
          "JavaScript rendering & hydration checks",
          "Mobile-first indexing optimization",
          "International & multilingual hreflang SEO",
          "Structured data & JSON-LD schema markup",
        ],
      },
      {
        name: "Local SEO",
        services: [
          "Google Business Profile setup and optimisation",
          "Local landing page architecture",
          "Map-pack visibility & geo-targeting",
          "NAP and directory consistency checks",
          "Local citation building & audit",
          "Review generation & reputation strategy",
          "City & neighbourhood keyword targeting",
        ],
      },
      {
        name: "Off-page SEO",
        services: [
          "Backlink profile & toxicity audit",
          "Strategic link-building & outreach",
          "Digital PR & editorial placement",
          "Partner and resource-link outreach",
          "Industry directory & listing placements",
          "Unlinked-brand-mention reclamation",
          "Disavow & toxic link review",
        ],
      },
      {
        name: "Platform SEO",
        services: [
          "Shopify & E-commerce SEO",
          "WordPress & Headless CMS SEO",
          "Webflow architecture & SEO",
          "Next.js, React & SSR SEO",
          "Programmatic SEO (pSEO) builds",
        ],
      },
    ],
  },
  {
    id: "websites-conversion",
    name: "Websites & Conversion",
    icon: "lucide:layout-template",
    summary:
      "High-performance, SEO-first websites and landing pages built for speed, accessibility, and buyer conversion.",
    visibleServices: [
      "Single-Page & Business Brochure Websites",
      "High-Converting Landing Page Design",
      "Full Website Redesigns & Copywriting",
      "Speed, Mobile & Core Web Vitals Enhancements",
    ],
    expandedServices: [
      "Service & E-commerce Website Builds",
      "CMS Setup & Headless Integrations",
      "Conversion Rate Optimisation (CRO)",
      "Forms, CRM & Analytics Integrations",
      "Design Systems & Component Libraries",
      "Ongoing Website Maintenance & Security",
    ],
  },
  {
    id: "content-strategy-production",
    name: "Content Strategy & Production",
    icon: "lucide:file-text",
    summary:
      "Topical authority clusters, expert editorial writing, and structured content designed to answer complex search intent.",
    visibleServices: [
      "Topical Authority & Content Strategy",
      "SEO Content Briefs & Editorial Calendars",
      "Pillar Pages & In-Depth Blog Articles",
      "Comparison, Alternative & Use-Case Pages",
    ],
    expandedServices: [
      "Service & Industry Landing Page Copy",
      "Location-Specific Content Assets",
      "FAQ & Help-Centre Content Hubs",
      "Case Studies & Customer Stories",
      "Thought-Leadership & Executive Content",
      "Content Refreshes & Decay Reclamation",
      "Human Editing, Fact-Checking & Schema Formatting",
    ],
  },
  {
    id: "ai-visibility-model-optimisation",
    name: "AI Visibility & Model Optimisation",
    icon: "lucide:sparkles",
    summary:
      "Measurement, content structuring, and source alignment to ensure AI assistants understand and reference your brand.",
    visibleServices: [
      "AI Brand Mention & Citation Audits",
      "Crawled-but-Not-Cited Diagnostics",
      "Brand-Description & Semantic Alignment",
      "Information-Gap & Citation-Gap Research",
      "AI Competitor Benchmarking & Share of Synthesis",
      "Model-Specific Recommendations across ChatGPT, Gemini, Perplexity/Sonar, Claude & Grok",
    ],
    expandedServices: [
      "Entity & Knowledge-Graph Optimization",
      "Source-Domain Ecosystem Analysis",
      "AI Buyer-Prompt & Intent Mapping",
      "AI Perception & Sentiment Alignment",
      "Perplexity & Sonar Source Optimization",
      "ChatGPT & SearchGPT Structuring",
      "Google Gemini & Knowledge Graph Integration",
      "Claude & Grok Reference Optimization",
      "Multi-Model Citation Reporting & Monitoring",
    ],
  },
  {
    id: "authority-distribution-seeding",
    name: "Authority, Distribution & Seeding",
    icon: "lucide:share-2",
    summary:
      "Multi-channel content seeding, community engagement, and digital PR to build authentic brand entity presence across the web.",
    visibleServices: [
      "Source & Citation Ecosystem Mapping",
      "Reddit & Community Visibility Strategy",
      "Digital PR & Third-Party Placements",
      "Brand Entity Consistency Across Web Directory & Profiles",
    ],
    expandedServices: [
      "Quora & Q&A Platform Visibility Strategy",
      "Industry Directory & Resource Page Outreach",
      "Review-Platform & Marketplace Optimization",
      "Founder & Executive Profile Optimization",
      "Knowledge-Base & Documentation Strategy",
      "Partnership Content & Co-Marketing Placements",
    ],
  },
  {
    id: "tracking-reporting-advisory",
    name: "Tracking, Reporting & Advisory",
    icon: "lucide:bar-chart-3",
    summary:
      "Ongoing search and AI visibility monitoring combined with strategic growth advisory to keep your acquisition moving forward.",
    visibleServices: [
      "AI Visibility & Citation Monitoring",
      "Keyword Rank & Organic Performance Reporting",
      "Competitor Movement & Backlink Audits",
      "Monthly Growth Advisory & Planning Calls",
    ],
    expandedServices: [
      "Technical SEO & Health Monitoring",
      "Local SEO & Map-Pack Tracking",
      "Share of Synthesis & Mention Alerts",
      "Quarterly Growth & Roadmap Planning",
      "Fractional SEO & AI Visibility Advisory",
      "Internal Team Training & Strategy Playbooks",
    ],
  },
];
