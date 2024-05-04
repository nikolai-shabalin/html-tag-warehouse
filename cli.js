#!/usr/bin/env node
import * as groups from './index.js';

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

const showHelp = () => {
  console.log('Usage: html-tag-warehouse [--option]');
  console.log('Options:');
  for (const key of Object.keys(DESCRIPTIONS)) {
    console.log(`  --${key}: ${DESCRIPTIONS[key]}`);
  }
  console.log('  --help: Display this help message');
};

const searchTag = () => {
  const tagName = args[1];
  if (!tagName) {
    console.error('Please provide a tag name to search for.');
    return;
  }
  const foundGroups = Object.entries(groups).filter(([, tags]) => tags.has(tagName)).map(([group]) => group);
  const message = foundGroups.length > 0 ? `Tag ${tagName} found in groups: ${foundGroups.join(', ')}` : `Tag ${tagName} not found.`;
  console.log(message);
};

const handleGroup = () => {
  const group = groups[groupName];
  if (group) {
    console.log(group);
  } else {
    console.error('Unknown command. Please use --help to see available options.');
  }
};

if (args.length === 0 || groupName === 'help') {
  showHelp();
} else {
  switch (groupName) {
    case 'search':
      searchTag();
      break;
    default:
      handleGroup();
      break;
  }
}
