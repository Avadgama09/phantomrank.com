import { defineType, defineField } from "sanity";

export const statsBlock = defineType({
  name: "statsBlock",
  title: "Stat / Data Callout",
  type: "object",
  fields: [
    defineField({
      name: "stat",
      title: "Stat Value / Percentage",
      type: "string",
      validation: (Rule) => Rule.required(),
      description: "E.g. 53%, 10,000+, 4.8x",
    }),
    defineField({
      name: "label",
      title: "Label / Metric Measured",
      type: "string",
      validation: (Rule) => Rule.required(),
      description: "E.g. of B2B AI searches cite primary source domains",
    }),
    defineField({
      name: "context",
      title: "Context / Subtext (Optional)",
      type: "string",
      description: "E.g. Based on 10k prompts audited Jan-Feb 2026",
    }),
    defineField({
      name: "source",
      title: "Source Reference (Optional)",
      type: "string",
      description: "E.g. PhantomRank Research / Search Intelligence Audit 2026",
    }),
  ],
  preview: {
    select: {
      stat: "stat",
      label: "label",
    },
    prepare({ stat, label }) {
      return {
        title: `${stat || ""} — ${label || "Stat Block"}`,
      };
    },
  },
});
