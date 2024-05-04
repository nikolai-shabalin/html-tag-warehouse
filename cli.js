#!/usr/bin/env node
import * as groups from "./index.js";

const args = process.argv.slice(2);
const groupName = args[0] ? args[0].replace(/^--/, '') : '';
const DESCRIPTIONS = {
  'all': 'Display the All HTML5 tags',
  'document': 'Document tags',
  'metadata': 'Metadata tags',
  'sections': 'Sectioning tags',
  'grouping': 'Grouping tags',
  'texts': 'Text tags',
  'edits': 'Edit tags',
  'embedded': 'Embedded tags',
  'tabular': 'Tabular tags',
  'forms': 'Form tags',
  'interactive': 'Interactive tags',
  'scripting': 'Scripting tags',
  'noEndTags': 'No-end or self-closing tags',
  'paired': 'Paired tags',
  'deprecated': 'Tags that are not included in the HTML5 specification, but were in HTML4',
  'html4': 'All tags are from the HTML4 specification',
  'html1': 'All tags are from the first HTML specification',
};

if (groupName === 'help' || args.length === 0) {
  console.log('Usage: html-tag-warehouse [--option]');
  console.log('Options:');
  Object.keys(groups).forEach(key => {
    console.log(`  --${key}: ${DESCRIPTIONS[key]}`);
  });
  console.log('  --help: Display this help message');
} else {
  const group = groups[groupName];
  if (group) {
    console.log(group);
  } else {
    console.log('Unknown command. Please use --help to see available options.');
  }
}
