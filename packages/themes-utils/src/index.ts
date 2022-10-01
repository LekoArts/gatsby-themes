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

export type GetLanguageInput = `language-${Language}` | ""

export const getLanguage = (className: GetLanguageInput = ``) => className.split(`language-`).pop() as Language

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
    type: string
  }
}

export const preToCodeBlock = (preProps: IPreProps) => {
  const { children: codeString, className = ``, ...props } = preProps.children.props

  const match = className.match(/language-([\0-\uFFFF]*)/)
  return {
    codeString: codeString.trim(),
    className,
    language: match !== null ? match[1] : ``,
    ...props,
  }
}

export const calculateLinesToHighlight = (meta: string) => {
  if (!meta) {
    return () => false
  }
  const lineNumbers = meta.split(`,`).map((v) => v.split(`-`).map((x) => parseInt(x, 10)))
  return (index: number) => {
    const lineNumber = index + 1
    return lineNumbers.some(([start, end]) => (end ? lineNumber >= start && lineNumber <= end : lineNumber === start))
  }
}

export const mdxResolverPassthrough =
  (fieldName: string) => async (source: any, args: any, context: any, info: any) => {
    const type = info.schema.getType(`Mdx`)
    const mdxNode = context.nodeModel.getNodeById({
      id: source.parent,
    })
    const resolver = type.getFields()[fieldName].resolve
    const result = await resolver(mdxNode, args, context, info)
    return result
  }

export const slugify = (source: { slug?: string; title: string }, basePath: string) => {
  const slug = source.slug ? source.slug : kebabCase(source.title)

  return `/${basePath}/${slug}`.replace(/\/\/+/g, `/`)
}
