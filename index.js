import { all } from "./all.js";
import { document } from "./document.js";
import { metadata } from "./metadata.js";
import { sections } from "./sections.js";
import { grouping } from "./grouping.js";
import { texts } from "./texts.js";
import { edits } from "./edits.js";
import { embedded } from "./embedded.js";
import { tabular } from "./tabular.js";
import { forms } from "./forms.js";
import { interactive } from "./interactive.js";
import { scripting } from "./scripting.js";
import { noEndTags } from "./no-end.js";
import { paired } from "./paired.js";
import { deprecated } from "./deprecated.js";
import { html4 } from "./html4.js";
import { html1 } from "./html1.js";

const isDocument = (tag) => document.includes(tag);
const isMetadata = (tag) => metadata.includes(tag);
const isSections = (tag) => sections.includes(tag);
const isGrouping = (tag) => grouping.includes(tag);
const isTexts = (tag) => texts.includes(tag);
const isEmbedded = (tag) => embedded.includes(tag);
const isTabular = (tag) => tabular.includes(tag);
const isForms = (tag) => forms.includes(tag);
const isInteractive = (tag) => interactive.includes(tag);
const isScripting = (tag) => scripting.includes(tag);
const isNoEndTags = (tag) => noEndTags.includes(tag);
const isPaired = (tag) => paired.includes(tag);
const isDeprecated = (tag) => deprecated.includes(tag);
const isHtml4 = (tag) => html4.includes(tag);
const isHtml1 = (tag) => html1.includes(tag);

const isGroup = (tag, group) => group.includes(tag);

export {
  all,
  document,
  metadata,
  sections,
  grouping,
  texts,
  edits,
  embedded,
  tabular,
  forms,
  interactive,
  scripting,
  paired,
  noEndTags,
  deprecated,
  html4,
  html1
};
