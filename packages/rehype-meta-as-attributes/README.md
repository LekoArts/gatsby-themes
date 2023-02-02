# @lekoarts/rehype-meta-as-attributes

## Functionality

Adds code block meta to the `node.properties`.

````md
```js title=hello hightlight
const hello = "world";
```
````

Is turned into `title: "hello"` and `highlight: true`.

You can access those in e.g. React then in the `props` of `<pre>` tags.

## Install

```shell
npm install @lekoarts/rehype-meta-as-attributes
```

## Use

Say we have the following file `example.md`:

````md
# rehype-meta-as-attributes

```js title=hello hightlight
const hello = "world";
```
````

Then use it in your pipeline as following:

```js
import { read } from "to-vfile";
import { unified } from "unified";
import remarkRehype from "remark-rehype";
import rehypeMetaAsAttributes from "@lekoarts/rehype-meta-as-attributes";

main();

async function main() {
  const file = await unified()
    .use(remarkRehype)
    .use(rehypeMetaAsAttributes)
    .process(await read("example.md"));

  console.log(String(file));
}
```
