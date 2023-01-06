/* eslint react/destructuring-assignment: 0 */
/** @jsx jsx */
import { jsx, ThemeUIStyleObject } from "theme-ui"
import Highlight, { defaultProps, Language } from "prism-react-renderer"
import theme from "prism-react-renderer/themes/vsDark"
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live"
import { useMDXComponents } from "@mdx-js/react"
import { normalizeThemeUIColors, filterStyles } from "@lekoarts/gatsby-theme-specimens"

const badgeStyle: ThemeUIStyleObject = {
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

export interface ICodeProps {
  codeString: string
  language: Language
  live: boolean
  noInline: boolean
}

const Code = ({ codeString, language, live, noInline }: ICodeProps) => {
  const {
    Alert,
    Audio,
    BorderRadius,
    ColorFamilies,
    ColorRow,
    ColorSwatch,
    Download,
    FontFamily,
    FontSize,
    FontWeight,
    Heading,
    Palette,
    Shadow,
    Space,
    Table,
    Video,
  } = useMDXComponents()

  if (live) {
    return (
      <LiveProvider
        code={codeString}
        theme={theme}
        noInline={noInline || false}
        scope={{
          Alert,
          Audio,
          BorderRadius,
          ColorFamilies,
          ColorRow,
          ColorSwatch,
          Download,
          FontFamily,
          FontSize,
          FontWeight,
          Heading,
          Palette,
          Shadow,
          Space,
          Table,
          Video,
          normalizeThemeUIColors,
          filterStyles,
        }}
      >
        <div sx={badgeStyle}>Editor</div>
        <LiveEditor sx={{ marginBottom: `1rem`, borderRadius: `0.25rem` }} />
        <LiveError />
        <div sx={badgeStyle}>Preview</div>
        <LivePreview sx={{ marginBottom: `3rem` }} />
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
