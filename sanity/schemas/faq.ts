import { defineField, defineType } from "sanity";

export const faqSchema = defineType({
  name: "faq",
  title: "FAQ",
  type: "document",
  // Singleton — the studio structure always opens the fixed document ID "faq"
  fields: [
    defineField({
      name: "groups",
      title: "Question groups",
      type: "array",
      of: [
        {
          type: "object",
          name: "faqGroup",
          title: "Group",
          fields: [
            defineField({
              name: "topic",
              title: "Topic heading",
              type: "string",
              validation: (R) => R.required(),
            }),
            defineField({
              name: "items",
              title: "Questions",
              type: "array",
              of: [
                {
                  type: "object",
                  name: "faqItem",
                  title: "Question",
                  preview: {
                    select: { title: "question" },
                  },
                  fields: [
                    defineField({
                      name: "n",
                      title: "Number",
                      type: "string",
                      description: 'Display number, e.g. "01"',
                      readOnly: true,
                    }),
                    defineField({
                      name: "question",
                      title: "Question",
                      type: "string",
                      validation: (R) => R.required(),
                    }),
                    defineField({
                      name: "answer",
                      title: "Answer",
                      type: "array",
                      of: [
                        {
                          type: "block",
                          styles: [{ title: "Normal", value: "normal" }],
                          marks: {
                            decorators: [
                              { title: "Bold", value: "strong" },
                              { title: "Italic", value: "em" },
                            ],
                            annotations: [
                              {
                                name: "link",
                                type: "object",
                                title: "Link",
                                fields: [
                                  {
                                    name: "href",
                                    type: "string",
                                    title: "URL",
                                  },
                                ],
                              },
                            ],
                          },
                        },
                      ],
                    }),
                  ],
                },
              ],
            }),
          ],
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: "FAQ" };
    },
  },
});
