import { defineType, defineField } from "sanity";

export const tableBlock = defineType({
  name: "tableBlock",
  title: "Structured Data Table",
  type: "object",
  fields: [
    defineField({
      name: "caption",
      title: "Table Caption / Label (Optional)",
      type: "string",
    }),
    defineField({
      name: "header",
      title: "First Row is Header",
      type: "boolean",
      initialValue: true,
    }),
    defineField({
      name: "rows",
      title: "Table Rows",
      type: "array",
      of: [
        {
          type: "object",
          name: "tableRow",
          title: "Row",
          fields: [
            {
              name: "cells",
              title: "Cells",
              type: "array",
              of: [{ type: "string" }],
            },
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      caption: "caption",
      rows: "rows",
    },
    prepare({ caption, rows }) {
      return {
        title: caption || "Structured Data Table",
        subtitle: `${rows?.length || 0} rows`,
      };
    },
  },
});
