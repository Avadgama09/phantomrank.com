import { defineType, defineField } from "sanity";

export const calloutBlock = defineType({
  name: "calloutBlock",
  title: "Insight / Callout Box",
  type: "object",
  fields: [
    defineField({
      name: "type",
      title: "Callout Type",
      type: "string",
      options: {
        list: [
          { title: "Tip (Blue)", value: "tip" },
          { title: "Warning (Red)", value: "warning" },
          { title: "Insight (Green)", value: "insight" },
          { title: "Key Finding (Purple)", value: "key-finding" },
        ],
      },
      validation: (Rule) => Rule.required(),
      initialValue: "tip",
    }),
    defineField({
      name: "icon",
      title: "Custom Icon / Emoji (Optional)",
      type: "string",
    }),
    defineField({
      name: "content",
      title: "Callout Content (Rich Text)",
      type: "array",
      of: [
        {
          type: "block",
          styles: [{ title: "Normal", value: "normal" }],
          lists: [],
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
              { title: "Code", value: "code" },
            ],
            annotations: [
              {
                name: "link",
                type: "object",
                title: "URL",
                fields: [{ name: "href", type: "url" }],
              },
            ],
          },
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      type: "type",
      icon: "icon",
    },
    prepare({ type, icon }) {
      return {
        title: `Callout [${(type || "tip").toUpperCase()}]`,
        subtitle: icon ? `Icon: ${icon}` : "",
      };
    },
  },
});
