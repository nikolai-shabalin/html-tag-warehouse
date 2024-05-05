<div align="center">
    <img width="185" height="180" src="./assets/logo.webp" alt="logo html-tag-warehouse">
</div>

# html-tag-warehouse

> Is a JavaScript library that provides access to categories of HTML tags, including deprecated and unclosed tags, as well as tags from older HTML specifications. Includes CLI tools for browsing and searching tags.

## Install

```bash
npm i html-tag-warehouse
```

## Usage

Import the desired tag group and use it. The list of groups is listed later in this document. Each group is always an `array` of tags.

```js
import { all, noEndTags, deprecated, html4 } from 'html-tag-warehouse';

console.log(all); // ['html', 'head', ...]
```

## Groups
- `all`: all HTML5 tags
- `document`: all document tags from HTML5
- `metadata`: all document tags from HTML5
- `sections`: all document tags from HTML5
- `grouping`: all document tags from HTML5
- `texts`: all document tags from HTML5
- `edits`: all document tags from HTML5
- `embedded`: all document tags from HTML5
- `tabular`: all document tags from HTML5
- `forms`: all document tags from HTML5
- `interactive`: all document tags from HTML5
- `scripting`: all document tags from HTML5
- `noEndTags`: all self-close or block tags from HTML5
- `paired`: all paired tags from HTML5
  > Paired HTML tags consist of two instructions — an opening tag (also called a starting tag) that marks the beginning of a block, and a closing tag that looks the same but with an additional slash `/`. The closing tag marks the end of the block.
- `deprecated`: tags that are not included in the HTML5 specification, but were in HTML4.
- `html4`: all tags are from the HTML4 specification.
- `html1`: all tags are from the first HTML specification.

## cli

### View all tags in a specific group
```shell
npx html-tag-warehouse --all
```

Any group can be specified in place of `all`:
- `deprecated`
- `document`
- `noEnd`
- etc...

### Find the tag in all groups

```shell
npx html-tag-warehouse --search img
Tag img found in groups: all, embedded, html4, noEndTags
```

Finds the `<img>` tag in all groups.

### Help

```shell
npx html-tag-warehouse --help
```
