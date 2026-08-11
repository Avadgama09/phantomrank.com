import { defineType, defineField } from "sanity";

export const pillar = defineType({
  name: "pillar",
  title: "Pillar (Top-Level Guide)",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Pillar Title",
      type: "string",
      validation: (Rule) => Rule.required(),
      description: "Top-level pillar title (e.g. 'AI SEO')",
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
      description: "Canonical route segment (e.g. 'ai-seo' -> /learn/ai-seo/). Note: /learn/ai-seo/ is the sole canonical 'What Is AI SEO?' guide.",
    }),
    defineField({
      name: "icon",
      title: "Icon Emoji / Name",
      type: "string",
      description: "Visual icon badge (e.g. 🤖 or lucide:bot)",
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
      title: "Pillar Introduction Content",
      type: "portableTextBody",
      description: "Pillar overview and synthesized guide prose.",
    }),
    defineField({
      name: "primaryKeyword",
      title: "Primary Keyword",
      type: "string",
    }),
    defineField({
      name: "order",
      title: "Order Index",
      type: "number",
      initialValue: 1,
      validation: (Rule) => Rule.required(),
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
      slug: "slug.current",
      media: "heroImage",
    },
    prepare({ title, slug, media }) {
      return {
        title: title || "Untitled Pillar",
        subtitle: slug ? `/learn/${slug}` : "",
        media,
      };
    },
  },
});
