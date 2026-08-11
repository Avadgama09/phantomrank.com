import { defineType, defineField } from "sanity";

export const faqItem = defineType({
  name: "faqItem",
  title: "FAQ Question & Answer",
  type: "object",
  fields: [
    defineField({
      name: "question",
      title: "Question",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "answer",
      title: "Answer",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required(),
      description: "Answer text must mirror visible on-page content exactly.",
    }),
  ],
  preview: {
    select: {
      title: "question",
      subtitle: "answer",
    },
  },
});
