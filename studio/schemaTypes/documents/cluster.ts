import { defineType, defineField } from "sanity";

export const cluster = defineType({
  name: "cluster",
  title: "Topic Cluster",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Cluster Title",
      type: "string",
      validation: (Rule) => Rule.required(),
      description: "E.g. Foundations, Measurement, Diagnosis, Optimisation, Operations, Evidence",
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
      name: "pillar",
      title: "Associated Major Topic (Optional)",
      type: "reference",
      to: [{ type: "pillar" }],
      description: "Optional association. Clusters are shared cross-cutting categories.",
    }),
    defineField({
      name: "order",
      title: "Cluster Order (1 to 6)",
      type: "number",
      validation: (Rule) => Rule.required().min(1).max(6),
      description: "1: Foundations, 2: Measurement, 3: Diagnosis, 4: Optimisation, 5: Operations, 6: Evidence",
    }),
    defineField({
      name: "icon",
      title: "Cluster Icon Emoji / Badge",
      type: "string",
    }),
    defineField({
      name: "shortDescription",
      title: "Short Description",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "introduction",
      title: "Cluster Landing Page Guide (Portable Text)",
      type: "portableTextBody",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "primaryKeyword",
      title: "Primary Keyword",
      type: "string",
    }),
    defineField({
      name: "featuredArticles",
      title: "Featured Pinned Articles",
      type: "array",
      of: [{ type: "reference", to: [{ type: "article" }] }],
      description: "Optional manual order of pinned articles on the cluster landing page.",
    }),
    defineField({
      name: "seo",
      title: "SEO Metadata",
      type: "seo",
    }),
    defineField({
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      options: { hotspot: true },
    }),
  ],
  preview: {
    select: {
      title: "title",
      order: "order",
      pillar: "pillar.title",
      slug: "slug.current",
    },
    prepare({ title, order, pillar, slug }) {
      return {
        title: `${order ? `#${order} ` : ""}${title || "Untitled Cluster"}`,
        subtitle: `/learn/${slug || ""}${pillar ? ` (${pillar})` : ""}`,
      };
    },
  },
});
