import { defineType, defineField } from "sanity";

export const callout = defineType({
  name: "callout",
  title: "Callout / Alert Box",
  type: "object",
  fields: [
    defineField({
      name: "type",
      title: "Callout Type",
      type: "string",
      options: {
        list: [
          { title: "Note (Blue)", value: "note" },
          { title: "Tip (Green)", value: "tip" },
          { title: "Warning (Yellow)", value: "warning" },
          { title: "Important (Red)", value: "important" },
        ],
      },
      initialValue: "note",
    }),
    defineField({
      name: "title",
      title: "Heading",
      type: "string",
    }),
    defineField({
      name: "text",
      title: "Callout Text",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
  ],
});

export const verdictBox = defineType({
  name: "verdictBox",
  title: "Verdict / Answer Box",
  type: "object",
  fields: [
    defineField({
      name: "heading",
      title: "Box Heading",
      type: "string",
      initialValue: "Key Takeaway",
    }),
    defineField({
      name: "summary",
      title: "Summary Text",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
  ],
});
