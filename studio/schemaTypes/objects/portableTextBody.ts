import { defineType, defineArrayMember } from "sanity";

export const portableTextBody = defineType({
  name: "portableTextBody",
  title: "Rich Text Body",
  type: "array",
  of: [
    defineArrayMember({
      type: "block",
      styles: [
        { title: "Normal", value: "normal" },
        { title: "H2 (Heading 2)", value: "h2" },
        { title: "H3 (Heading 3)", value: "h3" },
        { title: "H4 (Heading 4)", value: "h4" },
        { title: "Quote", value: "blockquote" },
      ],
      lists: [
        { title: "Bullet", value: "bullet" },
        { title: "Numbered", value: "number" },
      ],
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
            title: "URL Link",
            fields: [
              {
                name: "href",
                type: "url",
                title: "URL",
                validation: (Rule) =>
                  Rule.uri({
                    allowRelative: true,
                    scheme: ["http", "https", "mailto", "tel"],
                  }),
              },
            ],
          },
        ],
      },
    }),
    // Native Image Embed with Alt Text & Caption
    defineArrayMember({
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text (Required for SEO & Accessibility)",
          validation: (Rule) => Rule.required(),
        },
        {
          name: "caption",
          type: "string",
          title: "Image Caption (Optional)",
        },
      ],
    }),
    // Custom Block Types
    defineArrayMember({
      type: "tableBlock",
    }),
    defineArrayMember({
      type: "checklistBlock",
    }),
    defineArrayMember({
      type: "calloutBlock",
    }),
    defineArrayMember({
      type: "statsBlock",
    }),
    defineArrayMember({
      type: "callout",
    }),
    defineArrayMember({
      type: "verdictBox",
    }),
    defineArrayMember({
      type: "customTable",
    }),
    defineArrayMember({
      type: "sourceCitation",
    }),
  ],
});
