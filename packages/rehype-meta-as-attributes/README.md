# @lekoarts/rehype-meta-as-attributes

Adds code block meta to the `node.properties`.

````
```js title=hello hightlight
const hello = "world"
```
````

Is turned into `title: "hello"` and `highlight: true`.

You can access those in e.g. React then in the `props` of `<pre>` tags.
