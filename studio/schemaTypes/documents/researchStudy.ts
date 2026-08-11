import { defineType, defineField } from "sanity";

export const researchStudy = defineType({
  name: "researchStudy",
  title: "Research Study",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Study Title",
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
      description: "Usually references Cluster #6 (Evidence)",
    }),
    defineField({
      name: "excerpt",
      title: "Executive Summary",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "answerSummary",
      title: "Key Findings Summary",
      type: "text",
      rows: 4,
      description: "Rendered visibly directly below the study title.",
    }),
    defineField({
      name: "methodology",
      title: "Methodology Description",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required(),
      description: "Required: detailed research methodology statement (e.g. sample size, query taxonomy, data pipeline).",
    }),
    defineField({
      name: "sampleSize",
      title: "Sample Size / Volume",
      type: "string",
      description: "E.g. 50,000 AI search prompts across 10 industries",
    }),
    defineField({
      name: "dateRange",
      title: "Research Timeframe",
      type: "string",
      description: "E.g. Jan 2026 – Mar 2026",
    }),
    defineField({
      name: "sources",
      title: "Source Citations & Bibliography",
      type: "array",
      of: [{ type: "sourceCitation" }],
      validation: (Rule) => Rule.required().min(1),
      description: "Required per Rule 5: at least one source citation for empirical research studies.",
    }),
    defineField({
      name: "findings",
      title: "Key Findings (Portable Text)",
      type: "portableTextBody",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "body",
      title: "Full Research Report (Portable Text)",
      type: "portableTextBody",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "downloadablePdf",
      title: "Downloadable Whitepaper / PDF",
      type: "file",
      description: "Optional full report PDF download.",
    }),
    defineField({
      name: "author",
      title: "Lead Researcher / Author",
      type: "reference",
      to: [{ type: "author" }],
      validation: (Rule) => Rule.required(),
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
        "Only populate when major data updates occur. Standard edits use Sanity's automatic _updatedAt timestamp.",
    }),
    defineField({
      name: "seo",
      title: "SEO Metadata",
      type: "seo",
    }),
    defineField({
      name: "featuredImage",
      title: "Cover / Chart Visual",
      type: "image",
      options: { hotspot: true },
    }),
  ],
  preview: {
    select: {
      title: "title",
      sampleSize: "sampleSize",
      media: "featuredImage",
    },
    prepare({ title, sampleSize, media }) {
      return {
        title: title || "Untitled Research Study",
        subtitle: `RESEARCH STUDY • ${sampleSize || "No sample size"}`,
        media,
      };
    },
  },
});
