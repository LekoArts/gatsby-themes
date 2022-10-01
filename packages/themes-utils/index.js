const kebabCase = require(`lodash.kebabcase`)

const getLanguage = (className) => className.split(`language-`).pop()

const preToCodeBlock = (preProps) => {
  const { children: codeString, className = ``, ...props } = preProps.children.props

  const match = className.match(/language-([\0-\uFFFF]*)/)
  return {
    codeString: codeString.trim(),
    className,
    language: match !== null ? match[1] : ``,
    ...props,
  }
}

const calculateLinesToHighlight = (meta) => {
  if (!meta) {
    return () => false
  }
  const lineNumbers = meta.split(`,`).map((v) => v.split(`-`).map((x) => parseInt(x, 10)))
  return (index) => {
    const lineNumber = index + 1
    return lineNumbers.some(([start, end]) => (end ? lineNumber >= start && lineNumber <= end : lineNumber === start))
  }
}

const mdxResolverPassthrough = (fieldName) => async (source, args, context, info) => {
  const type = info.schema.getType(`Mdx`)
  const mdxNode = context.nodeModel.getNodeById({
    id: source.parent,
  })
  const resolver = type.getFields()[fieldName].resolve
  const result = await resolver(mdxNode, args, context, info)
  return result
}

const slugify = (source, basePath) => {
  const slug = source.slug ? source.slug : kebabCase(source.title)

  return `/${basePath}/${slug}`.replace(/\/\/+/g, `/`)
}

exports.getLanguage = getLanguage
exports.preToCodeBlock = preToCodeBlock
exports.calculateLinesToHighlight = calculateLinesToHighlight
exports.mdxResolverPassthrough = mdxResolverPassthrough
exports.slugify = slugify
exports.kebabCase = kebabCase
