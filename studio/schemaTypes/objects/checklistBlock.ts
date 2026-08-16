import { defineType, defineField } from "sanity";

export const checklistBlock = defineType({
  name: "checklistBlock",
  title: "Actionable Checklist / List",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "List Section Title (Optional)",
      type: "string",
    }),
    defineField({
      name: "items",
      title: "List Items",
      type: "array",
      of: [
        {
          type: "object",
          name: "checklistItem",
          title: "Item",
          fields: [
            defineField({
              name: "text",
              title: "Item Text",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "checked",
              title: "Checked / Completed",
              type: "boolean",
              initialValue: false,
            }),
            defineField({
              name: "type",
              title: "Display Type",
              type: "string",
              options: {
                list: [
                  { title: "Checklist", value: "checklist" },
                  { title: "To-Do", value: "todo" },
                  { title: "Do / Don't", value: "do-dont" },
                ],
              },
              initialValue: "checklist",
            }),
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
      items: "items",
    },
    prepare({ title, items }) {
      return {
        title: title || "Checklist / List Block",
        subtitle: `${items?.length || 0} items`,
      };
    },
  },
});
