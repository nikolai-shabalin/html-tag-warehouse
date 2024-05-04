#!/usr/bin/env node
import * as groups from "./index.js";

const args = process.argv.slice(2);
const groupName = args[0].replace(/^--/, '');

const group = groups[groupName];

if (group) {
  console.log(group);
} else {
  console.log('Unknown command');
}
