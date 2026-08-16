import { type SchemaTypeDefinition } from "sanity";

// Objects
import { seo } from "./objects/seo";
import { faqItem } from "./objects/faqItem";
import { sourceCitation } from "./objects/sourceCitation";
import { customTable } from "./objects/customTable";
import { callout, verdictBox } from "./objects/callout";
import { portableTextBody } from "./objects/portableTextBody";
import { tableBlock } from "./objects/tableBlock";
import { checklistBlock } from "./objects/checklistBlock";
import { calloutBlock } from "./objects/calloutBlock";
import { statsBlock } from "./objects/statsBlock";

// Documents
import { learnHubSettings } from "./documents/learnHubSettings";
import { pillar } from "./documents/pillar";
import { cluster } from "./documents/cluster";
import { author } from "./documents/author";
import { article } from "./documents/article";
import { researchStudy } from "./documents/researchStudy";
import { redirect } from "./documents/redirect";

export const schemaTypes: SchemaTypeDefinition[] = [
  // Objects
  seo,
  faqItem,
  sourceCitation,
  customTable,
  callout,
  verdictBox,
  portableTextBody,
  tableBlock,
  checklistBlock,
  calloutBlock,
  statsBlock,

  // Documents
  learnHubSettings,
  pillar,
  cluster,
  author,
  article,
  researchStudy,
  redirect,
];
