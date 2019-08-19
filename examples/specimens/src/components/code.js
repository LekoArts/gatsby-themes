/* eslint react/destructuring-assignment: 0 */
import React from "react"
import Highlight, { defaultProps } from "prism-react-renderer"
import theme from "prism-react-renderer/themes/vsDark"
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live"
import { useMDXScope } from "gatsby-plugin-mdx/context"
import { useMDXComponents } from "@mdx-js/react"
import { css } from "@emotion/core"

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

const Code = ({ codeString, language, live, noInline }) => {
  const imported = useMDXScope()
  const defined = useMDXComponents()

  delete defined.delete

  if (live) {
    return (
      <LiveProvider code={codeString} theme={theme} noInline={noInline || false} scope={{ ...defined, ...imported }}>
        <div css={css(badgeStyle)}>Editor</div>
        <LiveEditor css={css({ marginBottom: `1rem`, borderRadius: `0.25rem` })} />
        <LiveError />
        <div css={css(badgeStyle)}>Preview</div>
        <LivePreview css={css({ marginBottom: `3rem` })} />
      </LiveProvider>
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
