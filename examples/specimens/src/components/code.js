/* eslint react/destructuring-assignment: 0 */
/** @jsx jsx */
import { jsx } from "theme-ui"
import Highlight, { defaultProps } from "prism-react-renderer"
import theme from "prism-react-renderer/themes/vsDark"
import loadable from "@loadable/component"
import { useMDXScope } from "gatsby-plugin-mdx/context"
import { useMDXComponents } from "@mdx-js/react"

const badgeStyle = {
  marginBottom: `0.5rem`,
  backgroundColor: `#4c51bf`,
  display: `inline-block`,
  color: `white`,
  padding: `0.2rem 0.75rem`,
  borderRadius: `0.5rem`,
  textTransform: `uppercase`,
  fontSize: `12px`,
  letterSpacing: `0.05em`,
}

const LazyLiveProvider = loadable(async () => {
  const Module = await import(`react-live`)
  const { LiveProvider, LiveEditor, LiveError, LivePreview } = Module
  return (props) => (
    <LiveProvider {...props}>
      <div sx={badgeStyle}>Editor</div>
      <LiveEditor sx={{ marginBottom: `1rem`, borderRadius: `0.25rem` }} />
      <LiveError />
      <div sx={badgeStyle}>Preview</div>
      <LivePreview sx={{ marginBottom: `3rem` }} />
    </LiveProvider>
  )
})

const Code = ({ codeString, language, live, noInline }) => {
  const imported = useMDXScope()
  const defined = useMDXComponents()

  delete defined.delete

  if (live) {
    return (
      <LazyLiveProvider
        code={codeString}
        theme={theme}
        noInline={noInline || false}
        scope={{ ...defined, ...imported }}
      />
    )
  }
  return (
    <Highlight {...defaultProps} code={codeString} language={language} theme={theme}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}

export default Code
