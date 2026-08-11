import { defineType, defineField } from "sanity";

export const learnHubSettings = defineType({
  name: "learnHubSettings",
  title: "Learn Hub Settings",
  type: "document",
  fields: [
    defineField({
      name: "seoTitle",
      title: "SEO Title",
      type: "string",
      description: "Title tag for the main /learn/ page.",
      validation: (Rule) =>
        Rule.custom((title) => {
          if (title && title.length > 65) {
            return "SEO title is over 65 characters and may be truncated.";
          }
          return true;
        }),
    }),
    defineField({
      name: "seoDescription",
      title: "SEO Description",
      type: "text",
      rows: 3,
      description: "Meta description for the main /learn/ page.",
      validation: (Rule) =>
        Rule.custom((desc) => {
          if (desc && desc.length > 165) {
            return "SEO description is over 165 characters and may be truncated.";
          }
          return true;
        }),
    }),
    defineField({
      name: "heroEyebrow",
      title: "Hero Eyebrow (Optional)",
      type: "string",
      description: "Small text badge above H1 (e.g. 'Search Intelligence & AI Visibility Resources').",
    }),
    defineField({
      name: "heroH1",
      title: "Hero H1 Headline",
      type: "string",
      validation: (Rule) => Rule.required(),
      description: "Primary H1 headline for the /learn/ hub.",
    }),
    defineField({
      name: "heroIntro",
      title: "Hero Introduction Prose",
      type: "portableTextBody",
      description: "Introductory prose displayed below the H1 headline.",
    }),
    defineField({
      name: "featuredPillars",
      title: "Featured Major Topics",
      type: "array",
      of: [{ type: "reference", to: [{ type: "pillar" }] }],
      description: "Select Major Topics to highlight on the /learn/ hub.",
    }),
    defineField({
      name: "featuredClusters",
      title: "Featured Topic Clusters",
      type: "array",
      of: [{ type: "reference", to: [{ type: "cluster" }] }],
      description: "Select Topic Clusters to highlight on the /learn/ hub.",
    }),
    defineField({
      name: "featuredArticles",
      title: "Featured Articles / Research",
      type: "array",
      of: [
        { type: "reference", to: [{ type: "article" }, { type: "researchStudy" }] },
      ],
      description: "Hand-picked articles or research studies for the 'Start Here' / Featured section.",
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Learn Hub Settings",
        subtitle: "Singleton settings for /learn/",
      };
    },
  },
});
