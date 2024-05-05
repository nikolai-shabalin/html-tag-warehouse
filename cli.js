#!/usr/bin/env node
import * as groups from './index.js';
import inquirer from 'inquirer';

const args = process.argv.slice(2);
const groupName = args[0] ? args[0].replace(/^--/, '') : '';
const TEXT_COLORS = {
  default: '\x1b[0m',
  green: '\x1b[32m',
};
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
  'noEnd': 'No-end or self-closing tags',
  'paired': 'Paired tags',
  'deprecated': 'Tags that are not included in the HTML5 specification, but were in HTML4',
  'html4': 'All tags are from the HTML4 specification',
  'html1': 'All tags are from the first HTML specification',
};

const showHelp = () => {
  console.log('Usage: html-tag-warehouse', TEXT_COLORS.green, '--option');
  console.log(TEXT_COLORS.default, 'Options:');
  console.log('  group:');
  for (const key of Object.keys(DESCRIPTIONS)) {
    console.log(TEXT_COLORS.green, `    --${key}:`, TEXT_COLORS.default, `${DESCRIPTIONS[key]}`);
  }
  console.log('  search:');
  console.log(TEXT_COLORS.green, '    --search:', TEXT_COLORS.default, 'Search for a tag name in all groups. Provide the tag name as the next argument.');
  console.log('  help:');
  console.log(TEXT_COLORS.green, '    --help:', TEXT_COLORS.default, 'Display this help message');
};

const searchTag = () => {
  const tagName = args[1];
  if (!tagName) {
    console.error('Please provide a tag name to search for.');
    return;
  }
  const foundGroups = Object.entries(groups).filter(([, tags]) => tags.includes(tagName)).map(([group]) => group);
  const message = foundGroups.length > 0 ? `Tag ${tagName} found in groups: ${foundGroups.join(', ')}` : `Tag ${tagName} not found.`;
  console.log(message);
};

const handleGroup = async () => {
  if (groupName) {
    const group = groups[groupName];
    if (group) {
      console.table(group);
    } else {
      console.error('Unknown command. Please use --help to see available options.');
    }
  } else {
    const { chosenGroup } = await inquirer.prompt([
      {
        type: 'list',
        name: 'chosenGroup',
        message: 'Choose a group:',
        choices: Object.keys(groups),
      },
    ]);
    console.table(groups[chosenGroup]);
  }
};

if (args.length === 0) {
  handleGroup();
} else {
  switch (groupName) {
    case 'help':
      showHelp();
      break;
    case 'search':
      searchTag();
      break;
    default:
      handleGroup();
      break;
  }
}
