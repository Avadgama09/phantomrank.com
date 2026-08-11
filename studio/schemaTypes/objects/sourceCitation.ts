import { defineType, defineField } from "sanity";

export const sourceCitation = defineType({
  name: "sourceCitation",
  title: "Source Citation",
  type: "object",
  fields: [
    defineField({
      name: "sourceName",
      title: "Source / Study Name",
      type: "string",
      validation: (Rule) => Rule.required(),
      description: "E.g. OpenAI GPT-4 System Card, Princeton GEO Research Paper",
    }),
    defineField({
      name: "publisher",
      title: "Publisher / Institution",
      type: "string",
      description: "E.g. OpenAI, Princeton University, Stanford AI Lab",
    }),
    defineField({
      name: "url",
      title: "Source URL",
      type: "url",
      validation: (Rule) =>
        Rule.uri({
          scheme: ["http", "https"],
        }),
    }),
    defineField({
      name: "publishedDate",
      title: "Publication Date",
      type: "date",
    }),
    defineField({
      name: "accessedDate",
      title: "Accessed Date",
      type: "date",
    }),
    defineField({
      name: "sourceType",
      title: "Source Type",
      type: "string",
      options: {
        list: [
          { title: "Primary Documentation", value: "primaryDocumentation" },
          { title: "Research Paper", value: "researchPaper" },
          { title: "First-Party Study", value: "firstPartyStudy" },
          { title: "Third-Party Study", value: "thirdPartyStudy" },
          { title: "News / Publication", value: "news" },
          { title: "Other", value: "other" },
        ],
      },
      initialValue: "researchPaper",
    }),
    defineField({
      name: "note",
      title: "Citation Context / Note",
      type: "text",
      rows: 2,
      description: "Brief explanation of how this source was cited or used.",
    }),
  ],
  preview: {
    select: {
      title: "sourceName",
      subtitle: "publisher",
      url: "url",
    },
    prepare({ title, subtitle, url }) {
      return {
        title: title || "Untitled Source",
        subtitle: [subtitle, url].filter(Boolean).join(" • "),
      };
    },
  },
});
