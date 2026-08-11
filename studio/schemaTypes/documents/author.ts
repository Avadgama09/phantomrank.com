import { defineType, defineField } from "sanity";

export const author = defineType({
  name: "author",
  title: "Author / Reviewer Profile",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Full Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "jobTitle",
      title: "Job Title / Role",
      type: "string",
      validation: (Rule) => Rule.required(),
      description: "E.g. Head of Search Intelligence, Senior AI Search Strategist",
    }),
    defineField({
      name: "organisation",
      title: "Organisation / Company",
      type: "string",
      initialValue: "PhantomRank",
    }),
    defineField({
      name: "credentials",
      title: "Credentials / Degrees",
      type: "string",
      description: "E.g. M.Sc. Data Science, Former Lead Technical SEO",
    }),
    defineField({
      name: "expertiseAreas",
      title: "Areas of Expertise",
      type: "array",
      of: [{ type: "string" }],
      description: "E.g. Generative Engine Optimization, Vector Search, Technical SEO",
    }),
    defineField({
      name: "shortBio",
      title: "Short Bio",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required(),
      description: "1-2 sentence bio shown on article author cards.",
    }),
    defineField({
      name: "bio",
      title: "Full Bio (Portable Text)",
      type: "portableTextBody",
      description: "Full bio prose for dedicated author profile page.",
    }),
    defineField({
      name: "photo",
      title: "Profile Photo",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "sameAs",
      title: "Social & Verification Links (sameAs)",
      type: "array",
      of: [{ type: "url" }],
      description: "LinkedIn, X/Twitter, Google Scholar, GitHub, Personal website URLs for Person schema.",
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "jobTitle",
      media: "photo",
    },
  },
});
