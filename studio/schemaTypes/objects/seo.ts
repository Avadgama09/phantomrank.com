import { defineType, defineField } from "sanity";

export const seo = defineType({
  name: "seo",
  title: "SEO Metadata",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "SEO Title",
      type: "string",
      description: "Title used in browser tabs and search engine result snippets.",
      validation: (Rule) =>
        Rule.custom((title) => {
          if (title && title.length > 65) {
            return "SEO title is over 65 characters and may be truncated by search engines.";
          }
          return true;
        }),
    }),
    defineField({
      name: "description",
      title: "SEO Description",
      type: "text",
      rows: 3,
      description: "Meta description for search engine result snippets.",
      validation: (Rule) =>
        Rule.custom((description) => {
          if (description && description.length > 165) {
            return "SEO description is over 165 characters and may be truncated by search engines.";
          }
          return true;
        }),
    }),
    defineField({
      name: "ogImage",
      title: "OpenGraph / Social Image",
      type: "image",
      description: "Custom social share card image. Falls back to default site OpenGraph image.",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "noIndex",
      title: "Hide from Search Engines (noindex)",
      type: "boolean",
      description: "Set to true to instruct search engines not to index this page.",
      initialValue: false,
    }),
  ],
});
