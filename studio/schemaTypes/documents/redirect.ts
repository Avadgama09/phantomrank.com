import { defineType, defineField } from "sanity";

export const redirect = defineType({
  name: "redirect",
  title: "URL Redirect",
  type: "document",
  fields: [
    defineField({
      name: "fromPath",
      title: "From Path",
      type: "string",
      validation: (Rule) =>
        Rule.required().custom((value) => {
          if (!value) return "From path is required";
          if (!value.startsWith("/")) return "From path must start with a forward slash (e.g. /learn/old-url)";
          return true;
        }),
      description: "Path to redirect from (e.g. /learn/ai-visibility-tracking/track-brand-in-ai-search/why-first-mention-wins-in-ai-chat)",
    }),
    defineField({
      name: "toPath",
      title: "To Path",
      type: "string",
      validation: (Rule) =>
        Rule.required().custom((value) => {
          if (!value) return "To path is required";
          if (!value.startsWith("/") && !value.startsWith("http")) {
            return "To path must be a valid relative path starting with / or an absolute URL";
          }
          return true;
        }),
      description: "Target URL or relative path to redirect to (e.g. /learn/ai-seo/measurement/why-first-mention-wins-in-ai-chat)",
    }),
    defineField({
      name: "statusCode",
      title: "HTTP Status Code",
      type: "number",
      options: {
        list: [
          { title: "301 Permanent Redirect", value: 301 },
          { title: "302 Temporary Redirect", value: 302 },
        ],
      },
      initialValue: 301,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "note",
      title: "Migration Note / Reason",
      type: "string",
      description: "Reason for redirect (e.g. Content Hub URL structure migration)",
    }),
    defineField({
      name: "enabled",
      title: "Enabled",
      type: "boolean",
      initialValue: true,
      description: "Set to false to deactivate redirect without deleting record.",
    }),
  ],
  preview: {
    select: {
      fromPath: "fromPath",
      toPath: "toPath",
      statusCode: "statusCode",
      enabled: "enabled",
    },
    prepare({ fromPath, toPath, statusCode, enabled }) {
      const statusText = enabled ? `${statusCode || 301}` : "DISABLED";
      return {
        title: `${fromPath || "no path"} → ${toPath || "no target"}`,
        subtitle: `Status: ${statusText}`,
      };
    },
  },
});
