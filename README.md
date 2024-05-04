# html-tag-warehouse

## Install

```bash
npm i html-tag-warehouse
```

## Usage

```js
import { all, noEndTags, deprecated, html4 } from 'html-tag-warehouse';

console.log(all); // ['html', 'head', ...]
```

The following shows the possible values for import.

### cli

#### View all tags in a specific group
```shell
npx html-tag-warehouse --all
```

Any group can be specified in place of `all`:
- `deprecated`
- `document`
- `no-end`
- etc...

#### Find the tag in all groups

```shell
npx html-tag-warehouse search a
```

Finds the `<a>` tag in all groups.

#### Help

```shell
npx html-tag-warehouse --help
```


### Document tags

```js
import { document } from 'html-tag-warehouse';

console.log(document); // ['html']
```

### Metadata tags

```js
import { metadata } from 'html-tag-warehouse';

console.log(metadata); // ['head', 'title', ...]
```

### Sections tags

```js
import { sections } from 'html-tag-warehouse';

console.log(sections); // ['body', 'article', ...]
```

### Grouping tags

```js
import { grouping } from 'html-tag-warehouse';

console.log(grouping); // ['p', 'hr', ...]
```

### Texts tags

```js
import { texts } from 'html-tag-warehouse';

console.log(texts); // ['a', 'em', ...]
```

### Edits tags

```js
import { edits } from 'html-tag-warehouse';

console.log(edits); // ['ins', 'del']
```

### Embedded tags

```js
import { embedded } from 'html-tag-warehouse';

console.log(embedded); // ['img', 'iframe', ...]
```

### Tabular tags

```js
import { tabular } from 'html-tag-warehouse';

console.log(tabular); // ['table', 'tr', ...]
```

### Forms tags

```js
import { forms } from 'html-tag-warehouse';

console.log(forms); // ['form', 'input', ...]
```

### Interactive tags

```js
import { interactive } from 'html-tag-warehouse';

console.log(interactive); // ['details', 'dialog', ...]
```

### Scripting tags

```js
import { scripting } from 'html-tag-warehouse';

console.log(scripting); // ['script', 'noscript', ...]
```

### No end tags

No end or self-closing tags

```html
<img>
<input>
...
```

```js
import { noEndTags } from 'html-tag-warehouse';

console.log(noEndTags); // ['area', 'base', ...]
```

### Paired tags

> Paired HTML tags consist of two instructions — an opening tag (also called a starting tag) that marks the beginning of a block, and a closing tag that looks the same but with an additional slash `/`. The closing tag marks the end of the block.

```html
<html></html>
<span></span>
```

```js
import { paired } from 'html-tag-warehouse';

console.log(paired); // ['html', 'head', ...]
```

### Deprecated tags

Tags that are not included in the HTML5 specification, but were in HTML4.

> https://www.w3.org/TR/html5-diff/#changed-elements

```js
import { deprecated } from 'html-tag-warehouse';

console.log(deprecated); // ['acronym', 'applet', ...]
```

### html4 tags

All tags are from the HTML4 specification.

> https://www.w3.org/TR/html401/index/elements.html

```js
import { html4 } from 'html-tag-warehouse';

console.log(html4); // ['a', 'abbr', ...]
```

### html1 tags

All tags are from the first HTML specification.

> https://www.w3.org/History/19921103-hypertext/hypertext/WWW/MarkUp/Tags.html

```js
import { html1 } from 'html-tag-warehouse';

console.log(html1); // ['TITLE', 'NEXTID', ...]
```
