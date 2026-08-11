import { defineType, defineField } from "sanity";

export const customTable = defineType({
  name: "customTable",
  title: "Accessible Data Table",
  type: "object",
  fields: [
    defineField({
      name: "caption",
      title: "Table Caption / Title",
      type: "string",
      description: "Optional accessible table title or summary for screen readers.",
    }),
    defineField({
      name: "headers",
      title: "Column Headers",
      type: "array",
      of: [{ type: "string" }],
      description: "List of header titles (e.g. ['Metric', 'Traditional SEO', 'AI Search'])",
      validation: (Rule) => Rule.min(1),
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
            defineField({
              name: "cells",
              title: "Row Cells",
              type: "array",
              of: [{ type: "string" }],
              description: "Cell values in order matching the column headers.",
            }),
          ],
          preview: {
            select: {
              cells: "cells",
            },
            prepare({ cells }) {
              return {
                title: Array.isArray(cells) ? cells.join(" | ") : "Empty Row",
              };
            },
          },
        },
      ],
      validation: (Rule) => Rule.min(1),
    }),
  ],
  preview: {
    select: {
      caption: "caption",
      headers: "headers",
    },
    prepare({ caption, headers }) {
      return {
        title: caption || "Data Table",
        subtitle: Array.isArray(headers) ? `Headers: ${headers.join(", ")}` : "No headers",
      };
    },
  },
});
