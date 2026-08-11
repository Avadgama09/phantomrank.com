import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./schemaTypes";

export default defineConfig({
  name: "phantomrank-studio",
  title: "PhantomRank Content Hub Studio",

  projectId: "ppkytbjt",
  dataset: "production",

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content Hub")
          .items([
            // 1. Learn Hub Settings (Singleton)
            S.listItem()
              .title("Learn Hub Settings")
              .child(
                S.document()
                  .schemaType("learnHubSettings")
                  .documentId("learnHubSettings")
              ),

            // 2. Major Topics (Pillars)
            S.listItem()
              .title("Major Topics")
              .child(
                S.documentList()
                  .title("Major Topics")
                  .filter('_type == "pillar"')
              ),

            // 3. Topic Clusters (Sorted 1..6)
            S.listItem()
              .title("Topic Clusters")
              .child(
                S.documentList()
                  .title("Topic Clusters")
                  .filter('_type == "cluster"')
                  .defaultOrdering([{ field: "order", direction: "asc" }])
              ),

            // 4. Articles & Guides with Filter Sub-lists
            S.listItem()
              .title("Articles & Guides")
              .child(
                S.list()
                  .title("Articles & Guides Filtered Lists")
                  .items([
                    S.documentTypeListItem("article").title("All Articles"),
                    S.listItem()
                      .title("Outline Drafts")
                      .child(
                        S.documentList()
                          .title("Outline Drafts")
                          .filter('_type == "article" && editorialStage == "outline"')
                      ),
                    S.listItem()
                      .title("Ready for Review")
                      .child(
                        S.documentList()
                          .title("Ready for Review")
                          .filter('_type == "article" && editorialStage == "readyForReview"')
                      ),
                    S.listItem()
                      .title("Published Guides")
                      .child(
                        S.documentList()
                          .title("Published Guides")
                          .filter('_type == "article" && !(_id in path("drafts.**"))')
                      ),
                    S.listItem()
                      .title("SEO Targets")
                      .child(
                        S.documentList()
                          .title("SEO Targets")
                          .filter('_type == "article" && seoStrategyType == "seo-target"')
                      ),
                    S.listItem()
                      .title("Keyword Verification Needed")
                      .child(
                        S.documentList()
                          .title("Keyword Verification Needed")
                          .filter('_type == "article" && seoStrategyType == "keyword-verification-needed"')
                      ),
                    S.listItem()
                      .title("Proprietary / Enablement")
                      .child(
                        S.documentList()
                          .title("Proprietary / Enablement")
                          .filter('_type == "article" && seoStrategyType == "proprietary-enablement"')
                      ),
                    S.listItem()
                      .title("Research / Evidence")
                      .child(
                        S.documentList()
                          .title("Research / Evidence")
                          .filter('_type == "article" && seoStrategyType == "research-evidence"')
                      ),
                  ])
              ),

            // 5. Research Studies
            S.documentTypeListItem("researchStudy").title("Research Studies"),

            // 6. Authors & Reviewer Profiles
            S.documentTypeListItem("author").title("Authors & Reviewer Profiles"),

            // 7. URL Redirects
            S.documentTypeListItem("redirect").title("URL Redirects"),
          ]),
    }),
  ],

  schema: {
    types: schemaTypes,
  },
});
