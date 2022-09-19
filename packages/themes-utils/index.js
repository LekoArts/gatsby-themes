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

exports.getLanguage = getLanguage
exports.preToCodeBlock = preToCodeBlock
exports.calculateLinesToHighlight = calculateLinesToHighlight
