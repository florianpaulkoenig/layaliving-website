import { defineField, defineType } from "sanity";

export const siteContentSchema = defineType({
  name: "siteContent",
  title: "Site Content",
  type: "document",
  // Singleton — the studio structure always opens the fixed document ID "siteContent"
  groups: [
    { name: "hero", title: "Hero" },
    { name: "seasons", title: "Seasons" },
    { name: "guests", title: "Guest reviews" },
    { name: "journal", title: "Journal" },
  ],
  fields: [
    // ── Hero ──────────────────────────────────────────────────────
    defineField({
      name: "heroParagraph",
      title: "Intro paragraph",
      description: "The short paragraph directly beneath the title on the homepage.",
      type: "text",
      rows: 3,
      group: "hero",
    }),

    // ── Seasons ───────────────────────────────────────────────────
    defineField({
      name: "seasons",
      title: "Seasons",
      type: "array",
      group: "seasons",
      of: [
        {
          type: "object",
          name: "season",
          preview: { select: { title: "name" } },
          fields: [
            defineField({ name: "key", title: "Key", type: "string", readOnly: true }),
            defineField({ name: "name", title: "Season name", type: "string" }),
            defineField({ name: "months", title: "Months", type: "string" }),
            defineField({ name: "titleLead", title: "Title (first part)", type: "string" }),
            defineField({ name: "titleTail", title: "Title (second part)", type: "string" }),
            defineField({
              name: "body",
              title: "Description",
              type: "text",
              rows: 5,
            }),
          ],
        },
      ],
    }),

    // ── Guest reviews ─────────────────────────────────────────────
    defineField({
      name: "guestReviews",
      title: "Guest reviews",
      type: "array",
      group: "guests",
      of: [
        {
          type: "object",
          name: "guestReview",
          preview: { select: { title: "who" } },
          fields: [
            defineField({
              name: "quote",
              title: "Quote",
              type: "text",
              rows: 4,
            }),
            defineField({ name: "who", title: "Name", type: "string" }),
            defineField({ name: "where", title: "Origin & date", type: "string" }),
          ],
        },
      ],
    }),

    // ── Journal ───────────────────────────────────────────────────
    defineField({
      name: "journalEntries",
      title: "Journal entries",
      type: "array",
      group: "journal",
      of: [
        {
          type: "object",
          name: "journalEntry",
          preview: { select: { title: "title" } },
          fields: [
            defineField({ name: "n", title: "Number", type: "string", readOnly: true }),
            defineField({ name: "kicker", title: "Kicker", type: "string", description: 'e.g. "Recipe" or "A walk"' }),
            defineField({ name: "date", title: "Date label", type: "string", description: 'e.g. "March 2026"' }),
            defineField({ name: "title", title: "Title", type: "string" }),
            defineField({ name: "body", title: "Body", type: "text", rows: 3 }),
          ],
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: "Site Content" };
    },
  },
});
