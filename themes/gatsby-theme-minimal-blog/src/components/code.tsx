/* eslint react/destructuring-assignment: 0 */
import React from "react"
import loadable from "@loadable/component"
import theme from "prism-react-renderer/themes/nightOwl"
import useMinimalBlogConfig from "../hooks/use-minimal-blog-config"
import { HighlightInnerProps, Language } from "../types"

type CodeProps = {
  codeString: string
  language: Language
  noLineNumbers?: boolean
  metastring?: string
  [key: string]: any
}

const LazyHighlight = loadable(async () => {
  const Module = await import(`prism-react-renderer`)
  const Highlight = Module.default
  const { defaultProps } = Module
  return (props: any) => <Highlight {...defaultProps} {...props} />
})

const LazyLiveProvider = loadable(async () => {
  const Module = await import(`react-live`)
  const { LiveProvider, LiveEditor, LiveError, LivePreview } = Module
  return (props: any) => (
    <LiveProvider {...props}>
      <LiveEditor data-name="live-editor" />
      <LiveError />
      <LivePreview data-name="live-preview" />
    </LiveProvider>
  )
})

function getParams(className = ``) {
  const [lang = ``, params = ``] = className.split(`:`)

  return [
    // @ts-ignore
    lang
      .split(`language-`)
      .pop()
      .split(`{`)
      .shift(),
  ].concat(
    // @ts-ignore
    params.split(`&`).reduce((merged, param) => {
      const [key, value] = param.split(`=`)
      // @ts-ignore
      merged[key] = value
      return merged
    }, {})
  )
}

const RE = /{([\d,-]+)}/

const calculateLinesToHighlight = (meta: string) => {
  if (!RE.test(meta)) {
    return () => false
  }
  const lineNumbers = RE.exec(meta)![1]
    .split(`,`)
    .map(v => v.split(`-`).map(x => parseInt(x, 10)))
  return (index: number) => {
    const lineNumber = index + 1
    const inRange = lineNumbers.some(([start, end]) =>
      end ? lineNumber >= start && lineNumber <= end : lineNumber === start
    )
    return inRange
  }
}

const Code = ({
  codeString,
  noLineNumbers = false,
  className: blockClassName,
  metastring = ``,
  ...props
}: CodeProps) => {
  const { showLineNumbers } = useMinimalBlogConfig()

  const [language, { title = `` }] = getParams(blockClassName)
  const shouldHighlightLine = calculateLinesToHighlight(metastring)

  const hasLineNumbers = !noLineNumbers && language !== `noLineNumbers` && showLineNumbers

  if (props[`react-live`]) {
    return <LazyLiveProvider code={codeString} noInline theme={theme} />
  }
  return (
    <LazyHighlight code={codeString} language={language} theme={theme}>
      {({ className, style, tokens, getLineProps, getTokenProps }: HighlightInnerProps) => (
        <React.Fragment>
          {title && (
            <div className="code-title">
              <div>{title}</div>
            </div>
          )}
          <div className="gatsby-highlight" data-language={language}>
            <pre className={className} style={style} data-linenumber={hasLineNumbers}>
              {tokens.map((line, i) => {
                const lineProps = getLineProps({ line, key: i })

                if (shouldHighlightLine(i)) {
                  lineProps.className = `${lineProps.className} highlight-line`
                }

                return (
                  <div {...lineProps}>
                    {hasLineNumbers && <span className="line-number-style">{i + 1}</span>}
                    {line.map((token, key) => (
                      <span {...getTokenProps({ token, key })} />
                    ))}
                  </div>
                )
              })}
            </pre>
          </div>
        </React.Fragment>
      )}
    </LazyHighlight>
  )
}

export default Code
