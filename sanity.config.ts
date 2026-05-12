import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemas } from "./sanity/schemas";

export default defineConfig({
  name: "laya-living",
  title: "Laya Living",

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            S.listItem()
              .title("FAQ")
              .id("faq")
              .child(
                S.document()
                  .schemaType("faq")
                  .documentId("faq")
              ),
            S.listItem()
              .title("Site Content")
              .id("siteContent")
              .child(
                S.document()
                  .schemaType("siteContent")
                  .documentId("siteContent")
              ),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemas,
  },
});
