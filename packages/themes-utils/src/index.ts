import kebabCase from "lodash.kebabcase"

type Language =
  | "bash"
  | "sh"
  | "shell"
  | "css"
  | "javascript"
  | "js"
  | "jsx"
  | "diff"
  | "git"
  | "go"
  | "graphql"
  | "handlebars"
  | "json"
  | "less"
  | "markdown"
  | "mdx"
  | "python"
  | "py"
  | "sass"
  | "scss"
  | "tsx"
  | "typescript"
  | "ts"
  | "wasm"
  | "yaml"
  | "rust"
  | "svelte"
  | "html"
  | "text"

type GetLanguageInput = `language-${Language}` | ""

const getLanguage = (className: GetLanguageInput = ``) => className.split(`language-`).pop() as Language

interface IPreProps {
  children: {
    props: {
      children: string
      className?: GetLanguageInput
      title?: string
      highlight?: string
      withLineNumbers?: boolean
      [key: string]: any
    }
  }
}

const preToCodeBlock = (preProps: IPreProps) => {
  if (preProps?.children?.props) {
    const { children: codeString, className = ``, ...props } = preProps.children.props
    const match = className.match(/language-([\0-\uFFFF]*)/)

    return {
      codeString: codeString.trim(),
      className: className as GetLanguageInput,
      language: match !== null ? match[1] : ``,
      ...props,
    }
  }

  return undefined
}

const calculateLinesToHighlight = (meta: string) => {
  if (!meta) {
    return () => false
  }
  const lineNumbers = meta.split(`,`).map((v) => v.split(`-`).map((x) => parseInt(x, 10)))
  return (index: number) => {
    const lineNumber = index + 1
    return lineNumbers.some(([start, end]) => (end ? lineNumber >= start && lineNumber <= end : lineNumber === start))
  }
}

/* c8 ignore start */
const mdxResolverPassthrough = (fieldName: string) => async (source: any, args: any, context: any, info: any) => {
  const type = info.schema.getType(`Mdx`)
  const mdxNode = context.nodeModel.getNodeById({
    id: source.parent,
  })
  const resolver = type.getFields()[fieldName].resolve
  const result = await resolver(mdxNode, args, context, info)
  return result
}
/* c8 ignore stop */

const slugify = (source: { slug?: string; title: string }, basePath: string) => {
  const slug = source.slug ? source.slug : kebabCase(source.title)

  return `/${basePath}/${slug}`.replace(/\/\/+/g, `/`)
}

export {
  kebabCase,
  calculateLinesToHighlight,
  getLanguage,
  GetLanguageInput,
  mdxResolverPassthrough,
  preToCodeBlock,
  slugify,
}
