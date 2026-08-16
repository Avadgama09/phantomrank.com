import { defineType, defineField } from "sanity";

export const article = defineType({
  name: "article",
  title: "Article / Guide",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Article Title (H1)",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "primaryCluster",
      title: "Primary Cluster",
      type: "reference",
      to: [{ type: "cluster" }],
      validation: (Rule) => Rule.required(),
      description: "Required: reference to exactly one primary Topic Cluster (Foundations, Measurement, etc.).",
    }),
    defineField({
      name: "majorTopics",
      title: "Associated Major Topics",
      type: "array",
      of: [{ type: "reference", to: [{ type: "pillar" }] }],
      validation: (Rule) => Rule.required().min(1),
      description: "Required: at least one Major Topic (AI SEO, AI Visibility, or both).",
    }),
    defineField({
      name: "contentType",
      title: "Content Type",
      type: "string",
      options: {
        list: [
          { title: "Blog Post", value: "blog" },
          { title: "Case Study", value: "case-study" },
          { title: "How-To Guide", value: "how-to" },
          { title: "Comparison", value: "comparison" },
          { title: "Framework", value: "framework" },
          { title: "Research Study", value: "research-study" },
          { title: "Definition", value: "definition" },
          { title: "Checklist", value: "checklist" },
          { title: "Guide", value: "guide" },
          { title: "Explainer", value: "explainer" },
          { title: "Template", value: "template" },
        ],
      },
      validation: (Rule) => Rule.required(),
      initialValue: "guide",
    }),
    defineField({
      name: "seoStrategyType",
      title: "SEO Strategy Type",
      type: "string",
      options: {
        list: [
          { title: "SEO Target", value: "seo-target" },
          { title: "Keyword Verification Needed", value: "keyword-verification-needed" },
          { title: "Proprietary Enablement", value: "proprietary-enablement" },
          { title: "Research Evidence", value: "research-evidence" },
        ],
      },
      validation: (Rule) => Rule.required(),
      initialValue: "seo-target",
    }),
    defineField({
      name: "audience",
      title: "Target Audience",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Brand Marketer", value: "brand-marketer" },
          { title: "SEO Team", value: "seo-team" },
          { title: "Agency", value: "agency" },
          { title: "Leadership / Client Stakeholder", value: "leadership-client-stakeholder" },
        ],
      },
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: "platforms",
      title: "Relevant AI Platforms",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "ChatGPT Search", value: "chatgpt-search" },
          { title: "Perplexity", value: "perplexity" },
          { title: "Google AI Overviews", value: "google-ai-overviews" },
          { title: "Claude Web Search", value: "claude-web-search" },
          { title: "Gemini Search", value: "gemini-search" },
          { title: "Generic AI Search", value: "generic-ai-search" },
          { title: "Google AI Mode", value: "google-ai-mode" },
          { title: "Multi-Platform", value: "multi-platform" },
        ],
      },
      initialValue: ["multi-platform"],
    }),
    defineField({
      name: "searchIntent",
      title: "Search Intent",
      type: "string",
      options: {
        list: [
          { title: "Informational", value: "informational" },
          { title: "Commercial", value: "commercial" },
          { title: "Transactional", value: "transactional" },
          { title: "Navigational", value: "navigational" },
        ],
      },
      initialValue: "informational",
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt / Summary",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required(),
      description: "Short summary shown on cards and search lists (140-160 chars).",
    }),
    defineField({
      name: "answerSummary",
      title: "Answer Summary (Rendered Visibly Beneath H1)",
      type: "text",
      rows: 4,
      description:
        "Direct answer / key verdict rendered visibly directly below the H1 headline. Required for definition, guide, how-to, framework, checklist, and comparison.",
      validation: (Rule) =>
        Rule.custom((value, context) => {
          const type = (context.document as any)?.contentType;
          const requiredTypes = ["definition", "guide", "explainer", "framework", "checklist", "comparison"];
          if (requiredTypes.includes(type) && !value) {
            return `Answer summary is required for ${type} articles and must be rendered visibly beneath the H1.`;
          }
          return true;
        }),
    }),
    defineField({
      name: "primaryKeyword",
      title: "Primary Keyword",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "body",
      title: "Article Body (Portable Text)",
      type: "portableTextBody",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "faqSection",
      title: "FAQ Section (Optional Visible Editorial Component)",
      type: "array",
      of: [{ type: "faqItem" }],
      description: "Optional list of visible Q&A items.",
    }),
    defineField({
      name: "enableFaqSchema",
      title: "Emit FAQPage JSON-LD Schema",
      type: "boolean",
      description: "Opt-in: set true only when FAQ section is present and mirrors visible content exactly.",
      initialValue: false,
    }),
    defineField({
      name: "sources",
      title: "Source Citations & Bibliography",
      type: "array",
      of: [{ type: "sourceCitation" }],
      description: "List of referenced primary sources, papers, or documentation.",
    }),
    defineField({
      name: "relatedArticles",
      title: "Related Articles",
      type: "array",
      of: [{ type: "reference", to: [{ type: "article" }] }],
    }),
    defineField({
      name: "author",
      title: "Author Profile",
      type: "reference",
      to: [{ type: "author" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "reviewer",
      title: "Expert Reviewer (Optional)",
      type: "reference",
      to: [{ type: "author" }],
      description: "Set ONLY for genuine peer-review or expert technical review.",
    }),
    defineField({
      name: "reviewedAt",
      title: "Reviewed Date",
      type: "datetime",
      description: "Date of genuine expert review.",
    }),
    defineField({
      name: "publishedAt",
      title: "Published Date",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "lastSubstantiveUpdatedAt",
      title: "Last Substantive Updated Date (Optional)",
      type: "datetime",
      description:
        "Only populate when major content updates or structural revisions occur. Standard typo fixes and minor edits use Sanity's automatic _updatedAt timestamp.",
    }),
    defineField({
      name: "editorialStage",
      title: "Internal Editorial Stage (Internal Only)",
      type: "string",
      options: {
        list: [
          { title: "Outline", value: "outline" },
          { title: "Writing", value: "writing" },
          { title: "Ready for Review", value: "readyForReview" },
          { title: "Approved", value: "approved" },
        ],
      },
      initialValue: "outline",
      description: "Internal workflow state. Public visibility is controlled natively by Sanity draft/published state.",
    }),
    defineField({
      name: "featured",
      title: "Featured Article",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "seo",
      title: "SEO Metadata",
      type: "seo",
    }),
    defineField({
      name: "featuredImage",
      title: "Featured Image",
      type: "image",
      options: { hotspot: true },
    }),
  ],
  preview: {
    select: {
      title: "title",
      cluster: "primaryCluster.title",
      type: "contentType",
      media: "featuredImage",
      author: "author.name",
    },
    prepare({ title, cluster, type, media, author }) {
      return {
        title: title || "Untitled Article",
        subtitle: [type?.toUpperCase(), cluster, author].filter(Boolean).join(" • "),
        media,
      };
    },
  },
});
